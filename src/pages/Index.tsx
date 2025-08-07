import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import CodeCamp from '../components/CodeCamp';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';

import Career from '../components/Career';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
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
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
