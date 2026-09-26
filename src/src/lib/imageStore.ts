// Browser-only storage for images picked in the Images panel (IndexedDB holds full-size files).
const DB_NAME = 'kfupm-landing-images';
const STORE = 'slots';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function tx<T>(mode: IDBTransactionMode, run: (s: IDBObjectStore) => IDBRequest<T> | void): Promise<T | void> {
  return openDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const t = db.transaction(STORE, mode);
        const req = run(t.objectStore(STORE));
        t.oncomplete = () => resolve(req ? req.result : undefined);
        t.onerror = () => reject(t.error);
      }),
  );
}

export async function loadAll(): Promise<Record<string, Blob>> {
  try {
    const out: Record<string, Blob> = {};
    await openDb().then(
      (db) =>
        new Promise<void>((resolve, reject) => {
          const req = db.transaction(STORE).objectStore(STORE).openCursor();
          req.onsuccess = () => {
            const cur = req.result;
            if (!cur) return resolve();
            out[String(cur.key)] = cur.value as Blob;
            cur.continue();
          };
          req.onerror = () => reject(req.error);
        }),
    );
    return out;
  } catch {
    return {};
  }
}

export async function saveBlob(id: string, blob: Blob) {
  try {
    await tx('readwrite', (s) => s.put(blob, id));
  } catch {
    /* storage unavailable: the pick still shows for this visit */
  }
}

export async function removeBlob(id: string) {
  try {
    await tx('readwrite', (s) => s.delete(id));
  } catch {
    /* ignore */
  }
}
