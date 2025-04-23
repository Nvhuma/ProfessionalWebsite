import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div className="font-sans text-dark bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
