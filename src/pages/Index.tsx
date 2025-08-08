import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import CodeCamp from '../components/CodeCamp';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';

// import Career from './Career';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // รอให้ DOM โหลดก่อนแล้วค่อย scroll
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <CodeCamp />
        {/* <WhyChooseUs /> */}
        <Portfolio />
        {/* <Team /> */}
        {/* <Career /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
