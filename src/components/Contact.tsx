import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["35 Vanasorn Building, 12A Floor, Room No. 1303, Phayathai Road, Phayathai Subdistrict, Ratchathewi District, Bangkok 10400"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["hello@relearnsolution.com", "support@relearnsolution.com"],
      color: "text-warning"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
      color: "text-primary"
    }
  ];

  const faqs = [
    {
      question: "How long are the bootcamp programs?",
      answer: "Our full-stack bootcamps range from 12-24 weeks, depending on the track you choose and your schedule preference."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes! We provide career coaching, resume reviews, interview preparation, and connect you with our hiring partner network."
    },
    {
      question: "What's included in your software development services?",
      answer: "We provide end-to-end development including planning, design, development, testing, deployment, and ongoing maintenance."
    },
    {
      question: "Can I learn part-time while working?",
      answer: "Absolutely! Our weekend courses and 1:1 mentorship programs are designed for working professionals."
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Start Your <span className="text-primary">Learning Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your career? Get in touch with our team to explore how our programs can help you achieve your goals.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Get in touch</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Whether you're looking to advance your career, upskill your team, or explore custom training solutions, we're here to help you succeed.
            </p>

            <div className="grid gap-4 mb-8">
              {[
                {
                  icon: MapPin,
                  title: 'Office',
                  detail: '35 Wansorn Building, PhayaThai Rd Ratchathewi, Bangkok 10400, Thailand',
                  link: 'https://www.google.com/maps?q=35+Wansorn+Building,+PhayaThai+Rd+Ratchathewi,+Bangkok+10400,+Thailand'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  detail: '083-795-1555'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  detail: 'admin@relearn-solution.com'
                }
              ].map(({ icon: Icon, title, detail, link }, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    {title === 'Office' && link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm mt-1 inline-block hover:underline"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm mt-1">{detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-md mb-2 text-foreground">Why Choose Relearn Solution?</h4>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-primary w-4 h-4 mt-1" /> Free career consultation & program assessment
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-primary w-4 h-4 mt-1" /> Flexible payment plans & scholarship opportunities
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-primary w-4 h-4 mt-1" /> Job placement assistance & career support
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-primary w-4 h-4 mt-1" /> Lifetime access to learning resources
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Ready to Get Started?</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name*</label>
                  <Input name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label className="text-sm font-medium">Email Address*</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <label className="text-sm font-medium">Company/Organization</label>
                  <Input name="company" value={formData.company || ''} onChange={handleChange} />
                </div>
                <div>
                  <label className="text-sm font-medium">Program of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select a program</option>
                    <option value="bootcamp">Full-Stack Bootcamp</option>
                    <option value="ai">AI Program</option>
                    <option value="data">DataCamp</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Tell Us About Your Goals *</label>
                <Textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your background, career goals, timeline, and any specific questions you have..."
                  required
                />
              </div>
              <Button type="submit" className="w-full text-white bg-primary hover:bg-primary/90" size="lg">
                Get Started <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;