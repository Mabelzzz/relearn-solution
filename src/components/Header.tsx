import { useState, useEffect } from 'react';
import { Menu, X, CodeXml, GraduationCap, Building2, Briefcase } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'portfolio', 'team', 'contact', 'career'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for fixed header

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 text-foreground backdrop-blur-md shadow-soft border-b border-border/50' 
          : 'bg-transparent text-white'
      }`
    }
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-full">
              <CodeXml className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold">
              Relearn Solution
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`hover:text-accent transition-colors ${
                activeSection === 'hero' ? 'text-accent font-semibold' : ''
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-primary transition-colors ${
                activeSection === 'about' ? 'text-primary font-semibold' : ''
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-primary transition-colors ${
                activeSection === 'services' ? 'text-primary font-semibold' : ''
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-primary transition-colors ${
                activeSection === 'portfolio' ? 'text-primary font-semibold' : ''
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className={`hover:text-primary transition-colors ${
                activeSection === 'team' ? 'text-primary font-semibold' : ''
              }`}
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hover:text-primary transition-colors ${
                activeSection === 'contact' ? 'text-primary font-semibold' : ''
              }`}
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('career')}
              className={`hover:text-primary transition-colors ${
                activeSection === 'career' ? 'text-primary font-semibold' : ''
              }`}
            >
              Career
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="bg-white text-primary hover:bg-primary hover:text-white" onClick={() => scrollToSection('services')}>
              <GraduationCap className="h-4 w-4 mr-2" />
              Join Code Camp
            </Button>
            <Button size="sm" className="bg-accent hover:bg-white hover:text-accent" onClick={() => scrollToSection('contact')}>
              <Building2 className="h-4 w-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white text-black border-t border-border/50 shadow-soft">
            <nav className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`block w-full text-left py-2 hover:text-accent transition-colors ${
                  activeSection === 'hero' ? 'text-accent font-semibold' : ''
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left py-2 hover:text-primary transition-colors ${
                  activeSection === 'about' ? 'text-primary font-semibold' : ''
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`block w-full text-left py-2 hover:text-primary transition-colors ${
                  activeSection === 'services' ? 'text-primary font-semibold' : ''
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`block w-full text-left py-2 hover:text-primary transition-colors ${
                  activeSection === 'portfolio' ? 'text-primary font-semibold' : ''
                }`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className={`block w-full text-left py-2 hover:text-primary transition-colors ${
                  activeSection === 'team' ? 'text-primary font-semibold' : ''
                }`}
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left py-2 hover:text-primary transition-colors ${
                  activeSection === 'contact' ? 'text-primary font-semibold' : ''
                }`}
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('career')}
                className={`block w-full text-left py-2 hover:text-primary transition-colors ${
                  activeSection === 'career' ? 'text-primary font-semibold' : ''
                }`}
              >
                Career
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" onClick={() => scrollToSection('services')}>
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Join Code Camp
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent-light" onClick={() => scrollToSection('contact')}>
                  <Building2 className="h-4 w-4 mr-2" />
                  Get Quote
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