import {
  CodeXml,
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import RelearnLogo from '../assets/relearn-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'CodeCamp', href: '#codecamp' },
    { name: 'Success Stories', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#career' },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook' },
    { icon: Linkedin, name: 'LinkedIn' },
    { icon: Youtube, name: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left: Logo & Social */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {/* <img 
                src={RelearnLogo} 
                alt="Relearn Logo" 
                className="h-auto w-32" 
              /> */}
              <div className="bg-white p-2 rounded-full">
                <CodeXml className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Relearn Solution</p>
                <p className="text-sm text-white/80">Co.,Ltd.</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ icon: Icon, name }) => (
                <a
                  key={name}
                  href="https://www.facebook.com/CodeCampThailand"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="bg-white text-primary rounded p-2 hover:bg-accent hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/90">
              <p>
                35 Wansorn Building, PhayaThai Rd <br />
                Ratchathewi, Bangkok 10400, Thailand
              </p>
              <p>Tel: 083-795-1555</p>
              <p>Email: admin@relearn-solution.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
