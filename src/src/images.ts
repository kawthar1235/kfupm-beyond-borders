/**
 * Every photo on the page lives here. Nothing is pre-filled — you choose them all.
 *
 * Two ways to fill a slot:
 *  1. While designing: open the "Images" panel (bottom-left of the page) and upload.
 *     Picks are saved in this browser only, so you can compare options freely.
 *  2. Final: drop the file in /public/images and set `src`, e.g. src: '/images/hero-reveal.jpg'.
 *     A `src` here is what visitors see; a browser pick overrides it only on your machine.
 */

export type ImageSlot = {
  label: string;
  hint: string;
  section: string;
  alt: string;
  src: string;
};

export const IMAGE_SLOTS = {
  heroSketch: {
    section: 'Hero',
    label: 'Hero · First Layer',
    hint: 'Shown before scrolling. A sketch, line drawing or muted version of the reveal photo works best.',
    alt: 'Line drawing of a Saudi city skyline',
    src: 'images/hero-sketch.JPG',
  },
  heroReveal: {
    section: 'Hero',
    label: 'Hero · Reveal Layer',
    hint: 'Revealed by the growing circle on scroll. A bold, wide real-life photo.',
    alt: 'Saudi city skyline at dusk',
    src: 'images/hero-reveal.JPG',
  },
  whyFuture: {
    section: 'Why Saudi Arabia',
    label: 'Card · Future',
    hint: 'A transforming economy: skyline, waterfront, new development.',
    alt: 'Modern Saudi waterfront and skyline',
    src: 'images/why-future.JPG',
  },
  whyConnect: {
    section: 'Why Saudi Arabia',
    label: 'Card · Connect',
    hint: 'Technology and innovation: landmark architecture, labs, research.',
    alt: 'Landmark centre for technology and culture',
    src: 'images/why-connect.JPG',
  },
  whyDiscover: {
    section: 'Why Saudi Arabia',
    label: 'Card · Discover',
    hint: 'Culture and experience: desert, heritage, people outdoors.',
    alt: 'Students gathered in the Saudi desert',
    src: 'images/why-discover.JPG',
  },
  globalExchange: {
    section: 'Experience The World',
    label: 'Panel · Exchange',
    hint: 'Studying abroad in a new academic environment.',
    alt: 'Students on an exchange campus',
    src: 'images/exp-exchange.JPG',
  },
  globalResearch: {
    section: 'Experience The World',
    label: 'Panel · Research',
    hint: 'Summer research: labs, equipment, collaboration.',
    alt: 'Student working in a research lab',
    src: 'images/exp-research.jpg',
  },
  globalCoop: {
    section: 'Experience The World',
    label: 'Panel · Co-Op',
    hint: 'Professional experience: industry, offices, field sites.',
    alt: 'Student on an industry co-op placement',
    src: 'images/exp-coop.JPG',
  },
  globalVisits: {
    section: 'Experience The World',
    label: 'Panel · Visits',
    hint: 'Academic and cultural visits abroad.',
    alt: 'Students on an academic visit abroad',
    src: 'images/exp-visits.png',
  },
  campus: {
    section: 'Meet KFUPM',
    label: 'Campus Hero',
    hint: 'The KFUPM campus: water tower, mosque, evening light.',
    alt: 'KFUPM campus in Dhahran at dusk',
    src: 'images/campus-hero.jpeg',
  },
  lifeLive: {
    section: 'Campus Life',
    label: 'Live',
    hint: 'Accommodation and dining.',
    alt: 'Modern on-campus student accommodation',
    src: 'images/campus-live.jpeg',
  },
  lifeBelong: {
    section: 'Campus Life',
    label: 'Belong',
    hint: 'Friends and community, e.g. a group selfie.',
    alt: 'International students taking a selfie together',
    src: 'images/campus-belong.jpg',
  },
  lifeMove: {
    section: 'Campus Life',
    label: 'Move',
    hint: 'Sports, gyms, clubs and games.',
    alt: 'Student playing pool in the recreation centre',
    src: 'images/campus-move.jpeg',
  },
  lifeExplore: {
    section: 'Campus Life',
    label: 'Explore',
    hint: 'Beach, cafés, malls around Dhahran.',
    alt: 'Beach near the KFUPM campus',
    src: 'images/campus-explore.jpg',
  },
  stories: {
    section: 'Student Stories',
    label: 'Student Stories',
    hint: 'Real students on campus, e.g. by the KFUPM letters.',
    alt: 'Three international students in front of the KFUPM letters',
    src: 'images/stories.MP4',
  },
} satisfies Record<string, ImageSlot>;

export type SlotId = keyof typeof IMAGE_SLOTS;

/** Set to false before going live to hide the image panel from visitors. */
export const SHOW_IMAGE_STUDIO = false;
