'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Globe, CodeXml } from 'lucide-react';
import { Button } from './ui/button';

const HeaderCareer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'TH'>('EN');
  const navigate = useNavigate();

  const navigateToHomeSection = (sectionId: string) => {
  if (sectionId === 'career') {
    navigate('/career');
  } else {
    navigate(`/#${sectionId}`);
  }
  setIsMenuOpen(false);
};

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 text-foreground backdrop-blur-md shadow-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => navigate('/#home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="bg-gradient-primary p-2 rounded-full">
              <CodeXml className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold">Relearn Solution</h1>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['home', 'about', 'services', 'CodeCamp', 'career'].map((id) => (
              <button
                key={id}
                onClick={() => navigateToHomeSection(id)}
                className={`hover:text-primary transition-colors ${
                  id === 'career' ? 'text-primary font-semibold' : ''
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative">
              <button className="flex items-center text-sm px-4 py-2 rounded-full border border-border shadow-sm hover:bg-muted transition">
                <Globe className="h-4 w-4 mr-2" />
                {language}
              </button>
            </div>

            <Button
              size="sm"
              className="bg-primary text-white hover:bg-primary/90"
              onClick={() => navigateToHomeSection('contact')}
            >
              Contact us
            </Button>
          </div>

          {/* Mobile Toggle */}
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
              {['home', 'about', 'services', 'CodeCamp', 'career'].map((id) => (
                <button
                  key={id}
                  onClick={() => navigateToHomeSection(id)}
                  className={`block w-full text-left py-2 hover:text-primary transition ${
                    id === 'career' ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
                </button>
              ))}
              <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
                <button className="flex items-center px-4 py-2 rounded border text-sm hover:bg-muted">
                  <Globe className="h-4 w-4 mr-2" />
                  {language}
                </button>
                <Button
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/90"
                  onClick={() => navigateToHomeSection('contact')}
                >
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

export default HeaderCareer;
