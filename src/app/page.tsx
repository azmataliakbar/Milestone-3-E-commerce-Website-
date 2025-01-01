import Navbar from '@/app/componenents/Navbar';
import Footer from '@/app/componenents/footer';
import Hero1 from '@/app/componenents/hero1';
import Hero2 from '@/app/componenents/hero2';
import Hero3 from '@/app/componenents/hero3';
import Hero4 from '@/app/componenents/hero4';
import Hero5 from '@/app/componenents/hero5';
import OurPromise from '@/app/componenents/OurPromise';
import Video1 from '@/app/componenents/video1';
import Video2 from '@/app/componenents/video2';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Video2 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Video1 />
      <Hero5 />
      <OurPromise />
      <Footer />
    </main>
  );
}