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
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your coding journey or discuss your next project? 
            We'd love to hear from you and help you achieve your goals.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <div className="flex flex-col">
            <div className="bg-white rounded-3xl p-8 shadow-md flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="bootcamp">Full-Stack Bootcamp</option>
                      <option value="weekend">Weekend Courses</option>
                      <option value="mentorship">1:1 Mentorship</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="devops">DevOps & Cloud</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex-grow pb-8">
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, timeline, or any questions you have..."
                    rows={5}
                    required
                    className="w-full h-full mt-4"
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div> 
          </div>

          {/* Contact Info + FAQ + Location */}
          <div className="space-y-8 flex flex-col h-full">
            {/* Contact Info Cards */}
            <div className="grid gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={info.title}
                    className="bg-white rounded-2xl p-6 shadow-md hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start">
                      <div className={`${info.color} bg-current/10 p-3 rounded-xl mr-4 flex-shrink-0`}>
                        <Icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-md border-2">
          <iframe
            title="Relearn Solution Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.4881543649815!2d100.5322377153596!3d13.7563552011305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec94aa3efbb%3A0x8c7e7488eb43a537!2z4Lia4LmJ4Liy4LiZ4LmB4Liy4Lih4Lix4LiZ4LiE4Lij4Liw4LiX4Lij4Lih4LmB4Liw4LmA4Lij4Lih4Li54LiZ4LiV4LiH4Lit4LiH4LiK4LmJIOC4reC4oeC4o-C4meC4teC4l-C4suC4geC4lOC4n-C5jA!5e0!3m2!1sth!2sth!4v1690477200875!5m2!1sth!2sth"
            width="100%"
            height="300"
            // allowFullScreen="true"
            loading="lazy"
            className="w-full h-[300px] border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;