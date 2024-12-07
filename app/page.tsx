import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { WorkShowcase } from '@/components/sections/WorkShowcase';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <WorkShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}