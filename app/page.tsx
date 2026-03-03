import Navbar from '@/components/Navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import MinimalistSection from '@/components/MinimalistSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PortfolioEffects from '@/components/PortfolioEffects';

export default function Home() {
  return (
    <>
      <Navbar />
      <ThemeSwitcher />
      <PortfolioEffects />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MinimalistSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
