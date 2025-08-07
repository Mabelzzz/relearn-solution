import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '../assets/hero-coding.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/10"></div>
        <img 
          src={heroImage} 
          alt="People learning to code" 
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-up">
            <Star className="h-4 w-4 text-warning" />
            <span className="text-sm font-medium">Trusted by 1000+ students & clients</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            Relearn Your Future 
            <span className="block text-accent">with Code</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-up">
            Empowering individuals through comprehensive coding education and delivering 
            cutting-edge software solutions for businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-up">
            <Button 
              size="lg" 
              className="btn-hero min-w-[200px] bg-accent hover:bg-accent"
              onClick={() => scrollToSection('services')}
            >
              Join Code Camp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary border-white text-primary hover:bg-primary hover:text-white min-w-[200px]"
              onClick={() => scrollToSection('portfolio')}
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-white/80">Students Trained</div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-warning" />
              </div>
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-white/80">Client Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;