import { 
  Award, 
  Users, 
  Code, 
  Headphones, 
  TrendingUp, 
  Shield, 
  Clock, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { Button } from './ui/button';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Industry Expert Instructors",
      description: "Learn from professionals who've worked at Google, Microsoft, and other top tech companies.",
      highlight: "10+ years average experience"
    },
    {
      icon: Code,
      title: "Hands-On Project-Based Learning",
      description: "Build real-world applications and create a portfolio that showcases your skills to employers.",
      highlight: "5+ projects per course"
    },
    {
      icon: Users,
      title: "Personalized Learning Paths",
      description: "Customized curriculum based on your goals, experience level, and preferred learning style.",
      highlight: "1:1 mentorship available"
    },
    {
      icon: TrendingUp,
      title: "Career Support & Job Placement",
      description: "Resume reviews, interview prep, and connections to our network of 200+ hiring partners.",
      highlight: "85% job placement rate"
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "If you're not satisfied within the first 30 days, we'll refund your tuition completely.",
      highlight: "30-day guarantee"
    },
    {
      icon: Headphones,
      title: "24/7 Student Support",
      description: "Get help when you need it with our dedicated support team and active community forums.",
      highlight: "Always available"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling Options",
      description: "Choose from full-time, part-time, weekend, or self-paced options that fit your lifestyle.",
      highlight: "Multiple formats"
    },
    {
      icon: Globe,
      title: "Global Community Network",
      description: "Join a worldwide community of developers and alumni for networking and collaboration.",
      highlight: "1000+ active members"
    }
  ];

  const stats = [
    {
      number: "1000+",
      label: "Successful Graduates",
      description: "Students who've transformed their careers"
    },
    {
      number: "200+",
      label: "Hiring Partners",
      description: "Companies actively recruiting our graduates"
    },
    {
      number: "85%",
      label: "Job Placement Rate",
      description: "Within 6 months of graduation"
    },
    {
      number: "4.9/5",
      label: "Student Satisfaction",
      description: "Based on 500+ reviews"
    }
  ];

  const testimonials = [
    {
      quote: "The instructors are amazing and the curriculum is exactly what the industry needs. I landed my dream job 3 months after graduation!",
      author: "Mo Bile",
      role: "Software Engineer at Relearn",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      quote: "The project-based approach helped me build a strong portfolio. The career support was invaluable during my job search.",
      author: "Mobile Relearn",
      role: "Full-Stack Developer at Relearn",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      quote: "Best investment I've ever made. The mentorship and community support made all the difference in my learning journey.",
      author: "Mobile Mb",
      role: "React Developer at Relearn",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Relearn Solution</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another coding bootcamp or software agency. Here's what makes us different 
            and why thousands of students and clients trust us with their success.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  <span className="text-accent text-sm font-medium">{feature.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Our Track Record
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to excellence and the success of our students and clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Proven Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Planning", desc: "Creating a detailed roadmap for success" },
              { step: "03", title: "Execution", desc: "Implementing solutions with precision" },
              { step: "04", title: "Support", desc: "Ongoing assistance and maintenance" }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30"></div>
                )}
                <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{process.title}</h4>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Students Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-warning fill-current" />
                    // <div key={i} className="w-4 h-4 bg-warning rounded-full mr-1"></div>
                  ))}
                </div>
                
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">How We Compare</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2">Features</th>
                  <th className="text-center py-4 px-2 bg-primary/5 rounded-t-lg">
                    <div className="font-bold text-primary">Relearn Solution</div>
                  </th>
                  <th className="text-center py-4 px-2">Other Bootcamps</th>
                  <th className="text-center py-4 px-2">Online Courses</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "1:1 Mentorship", us: "✓", others: "Limited", online: "✗" },
                  { feature: "Job Placement Support", us: "85% Rate", others: "60% Rate", online: "✗" },
                  { feature: "Real-World Projects", us: "5+ Projects", others: "2-3 Projects", online: "Tutorials Only" },
                  { feature: "Flexible Scheduling", us: "Multiple Options", others: "Fixed Schedule", online: "Self-Paced" },
                  { feature: "Community Support", us: "24/7 + Alumni", others: "Business Hours", online: "Forums Only" },
                  { feature: "Industry Connections", us: "200+ Partners", others: "50+ Partners", online: "None" }
                ].map((row, index) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 px-2 font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-2 bg-primary/5">
                      <span className="inline-flex items-center justify-center bg-primary text-white text-sm px-3 py-1 rounded-full font-medium">
                        {row.us}
                      </span>
                    </td>
                    <td className="text-center py-4 px-2 text-muted-foreground">{row.others}</td>
                    <td className="text-center py-4 px-2 text-muted-foreground">{row.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students and satisfied clients who chose Relearn Solution 
              for their journey in tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" variant="secondary">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-accent hover:bg-accent hover:text-white">
                Schedule Consultation
              </Button>
            </div>
            <p className="text-white/80 text-sm mt-4">
              No commitment required • Free trial for 7 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;