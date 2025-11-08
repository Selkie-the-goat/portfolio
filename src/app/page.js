import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Writing from './components/Writing/Writing';
import Quotes from './components/Quotes/Quotes';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Quotes />
      <About />
      <Skills />
      <Projects />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
