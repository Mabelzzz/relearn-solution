import { useState, useEffect } from 'react';
import { Menu, X, Globe, CodeXml } from 'lucide-react';
import { Button } from './ui/button';
import RelearnLogo from '../assets/relearn-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [language, setLanguage] = useState<'EN' | 'TH'>('EN');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'CodeCamp', 'career'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 text-foreground backdrop-blur-md shadow-sm border-b border-border/50'
          : 'bg-white/95 text-foreground backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="bg-gradient-primary p-2 rounded-full">
              <CodeXml className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold">
              Relearn Solution
            </h1>
          </button>

          {/* <div className="flex items-center space-x-3">
            <img 
              src={RelearnLogo} 
              alt="Relearn Logo" 
              className="h-auto w-32" 
            />
          </div> */}

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['home', 'about', 'services', 'CodeCamp', 'career'].map((id) => (
              id === 'career' ? (
                <a
                  key={id}
                  href="/career"
                  className="hover:text-primary transition-colors"
                >
                  Career
                </a>
              ) : (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`hover:text-primary transition-colors ${
                    activeSection === id ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
                </button>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="relative">
              <button className="flex items-center text-sm px-4 py-2 rounded-full border border-border shadow-sm hover:bg-muted transition">
                <Globe className="h-4 w-4 mr-2" />
                {language}
              </button>
              {/* Optional dropdown */}
              {/* <div className="absolute right-0 mt-2 bg-white shadow-lg rounded text-sm">
                <button onClick={() => setLanguage('EN')} className="block px-4 py-2 w-full text-left hover:bg-muted">EN</button>
                <button onClick={() => setLanguage('TH')} className="block px-4 py-2 w-full text-left hover:bg-muted">TH</button>
              </div> */}
            </div>

            {/* Contact Us */}
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded hover:bg-muted transition"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white text-black border-t border-border/50 shadow-sm">
            <nav className="px-4 py-6 space-y-4">
              {['home', 'about', 'services', 'CodeCamp', 'career', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left py-2 hover:text-primary transition ${
                    activeSection === id ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
                </button>
              ))}

              {/* Mobile Language + Contact */}
              <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
                <button className="flex items-center px-4 py-2 rounded border text-sm hover:bg-muted">
                  <Globe className="h-4 w-4 mr-2" />
                  {language}
                </button>
                <Button size="sm" className="bg-primary text-white hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
                  Contact us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
