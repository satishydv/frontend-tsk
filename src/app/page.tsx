import Navbar from '@/components/Navbar';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Hero from '@/components/Hero';
import ShopCollections from '@/components/ShopCollections';
import SemiPermanentSlider from '@/components/SemiPermanentSlider';
import PromotionalSlider from '@/components/PromotionalSlider';
import ReligiousCollection from '@/components/ReligiousCollection';
import ProductFeatures from '@/components/ProductFeatures';
import CommunityVideos from '@/components/CommunityVideos';
import DesignCategories from '@/components/DesignCategories';
import ProteinSlider from './components/ProteinSlider';
import Footer from '@/components/Footer';
import Promotional from '@/components/Promotional';
import OrderAgain from '@/components/OrderAgain';

export default function Home() {
  return (
    <main>
      <AnnouncementBanner />
      <Navbar />
      <Hero />
      <Promotional/>
      <PromotionalSlider/>
      <OrderAgain/>
      <ShopCollections />
      <SemiPermanentSlider />
      <PromotionalSlider />
      <ReligiousCollection />
      <ProductFeatures />
      <ShopCollections />
      <Promotional/>
      <CommunityVideos />
      <DesignCategories />
      <ProteinSlider />
      <Footer />
    </main>
  );
}
