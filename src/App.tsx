import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Promo from './components/Promo';
import Scholarship from './components/Scholarship';
import CampusLife from './components/CampusLife';
import Stories from './components/Stories';
import Footer from './components/Footer';
import { ImageProvider, ImageStudio } from './lib/ImageSlots';

export default function App() {
  return (
    <ImageProvider>
      <div className="min-h-screen w-full overflow-x-clip bg-paper text-delft selection:bg-carolina/40">
        <Navbar />
        <main>
          <Hero />
          <Clients />
          <Services />
          <Work />
          <About />
          <Promo />
          <CampusLife />
          <Stories />
          <Scholarship />
        </main>
        <Footer />
        <ImageStudio />
      </div>
    </ImageProvider>
  );
}
