import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero section scroll-reveal (runs on mount)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    const targets = el.querySelectorAll('.reveal');
    targets.forEach((t) => observer.observe(t));

    // Trigger hero immediately since it's in viewport on load
    setTimeout(() => {
      targets.forEach((t) => t.classList.add('visible'));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <Works />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
