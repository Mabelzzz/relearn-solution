import { 
  CodeXml, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowRight,
  Heart 
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Meet Our Team", href: "#team" },
    { name: "Contact Us", href: "#contact" }
  ];

  const courses = [
    { name: "Full-Stack Bootcamp", href: "#" },
    { name: "React Development", href: "#" },
    { name: "Node.js Backend", href: "#" },
    { name: "Mobile Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "DevOps & Cloud", href: "#" }
  ];

  const services = [
    { name: "Custom Web Apps", href: "#" },
    { name: "Mobile Applications", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "Consulting", href: "#" },
    { name: "Maintenance & Support", href: "#" }
  ];

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Community Forum", href: "#" },
    { name: "Career Resources", href: "#" },
    { name: "Student Portal", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/CodeCampThailand", name: "Facebook" },
    { icon: Twitter, href: "https://www.facebook.com/CodeCampThailand", name: "Twitter" },
    { icon: Linkedin, href: "https://www.facebook.com/CodeCampThailand", name: "LinkedIn" },
    { icon: Instagram, href: "https://www.facebook.com/CodeCampThailand", name: "Instagram" },
    { icon: Youtube, href: "https://www.facebook.com/CodeCampThailand", name: "YouTube" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Connected with Our Community
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get weekly coding tips, industry insights, course updates, and exclusive offers 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
              />
              <Button size="lg" className="bg-accent hover:bg-accent-light w-full sm:w-auto">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Join 10,000+ developers and entrepreneurs • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-primary p-2 rounded-full">
                <CodeXml className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold">RELEARN SOLUTION CO., LTD.</span>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6">
              Empowering individuals and businesses through comprehensive coding education 
              and innovative software solutions. Join thousands who have transformed their 
              careers and businesses with us.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">35 Vanasorn Building, 12A Floor, Room No. 1303, Phayathai Road, Phayathai Subdistrict, Ratchathewi District, Bangkok 10400 Thailand</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">hello@relearnsolution.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4 text-white group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-white/80 hover:text-accent transition-colors text-sm"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">Live Chat</a></li>
                <li><a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">Contact Support</a></li>
                <li><a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">Report Issue</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">Cookie Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">Refund Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Recognition</h4>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-sm font-medium mb-1">🏆 Best Coding Bootcamp 2024</div>
                  <div className="text-xs text-white/60">Tech Education Awards</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-sm font-medium mb-1">⭐ 4.9/5 Rating</div>
                  <div className="text-xs text-white/60">Based on 500+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-1 text-white/80 text-sm mb-4 md:mb-0">
              <span>© 2024 Relearn Solution. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for the developer community.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-white/60">All rights reserved</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Status</a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Security</a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;