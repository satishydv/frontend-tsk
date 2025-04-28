import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShopCollections from '@/components/ShopCollections';
import SemiPermanentSlider from '@/components/SemiPermanentSlider';
import ReligiousCollection from '@/components/ReligiousCollection';
import ProductFeatures from '@/components/ProductFeatures';
import CommunityVideos from '@/components/CommunityVideos';
import ProteinSlider from './components/ProteinSlider';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShopCollections />
      <SemiPermanentSlider />
      <ReligiousCollection />
      <ProductFeatures />
      <CommunityVideos />
      <ProteinSlider />
      <Footer />
    </main>
  );
}
