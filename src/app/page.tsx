import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShopCollections from '@/components/ShopCollections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShopCollections />
      <Footer />
    </main>
  );
}
