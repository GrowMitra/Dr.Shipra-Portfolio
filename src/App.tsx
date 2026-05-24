import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Techniques from './components/sections/Techniques';
import Projects from './components/sections/Projects';
import Podcasts from './components/sections/Podcasts';
import Communication from './components/sections/Communication';
import Scientorship from './components/sections/Scientorship';
import Contact from './components/sections/Contact';
import ScrollProgress from './components/reusable/ScrollProgress';
import BackToTop from './components/reusable/BackToTop';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-primary min-h-screen">
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Techniques />
        <Projects />
        <Podcasts />
        <Communication />
        <Scientorship />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}

export default App;









