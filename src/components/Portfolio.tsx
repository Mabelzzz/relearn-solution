import { ExternalLink, Github, Quote, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Portfolio = () => {
  const testimonials = [
    {
      name: "Momo Bile",
      role: "UX UI Design",
      company: "SE Hub",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      content: "The Code Camp at Relearn Solution completely transformed my career. I went from having no coding experience to landing a senior developer role in just 6 months.",
      rating: 5,
      course: "Full-Stack Bootcamp"
    },
    {
      name: "Mobile pn",
      role: "Teacher Assistant",
      company: "Code Camp",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      content: "Relearn Solution delivered an exceptional mobile app for our startup. Their team's expertise and attention to detail exceeded our expectations.",
      rating: 4,
      course: "Mentorship Program"
    },
    {
      name: "Mobile Relearn",
      role: "Full-Stack Developer",
      company: "Relearn Solution",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      content: "The weekend courses were perfect for my schedule. I was able to upskill while maintaining my full-time job, and the mentorship was invaluable.",
      rating: 5,
      course: "Weekend Course"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A comprehensive e-commerce solution with real-time inventory, payment processing, and advanced analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      client: "RetailTech Corp",
      rating: 5,
      link: "https://www.facebook.com/CodeCampThailand"
    },
    {
      title: "Learning Management System",
      category: "Educational Platform",
      description: "Custom LMS with video streaming, progress tracking, and interactive assignments for online education.",
      technologies: ["Next.js", "MongoDB", "AWS", "WebRTC"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      client: "EduTech Solutions",
      rating: 5,
      link: "https://www.facebook.com/CodeCampThailand"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Application",
      description: "HIPAA-compliant mobile app for patient management and telemedicine consultations.",
      technologies: ["React Native", "Express", "MongoDB", "WebRTC"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      client: "MedCare Plus",
      rating: 5,
      link: "https://www.facebook.com/CodeCampThailand"
    },
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "Real-time financial analytics dashboard with advanced charting and data visualization.",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      client: "FinanceFlow Inc",
      rating: 5,
      link: "https://www.facebook.com/CodeCampThailand"
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Success <span className="gradient-text">Stories</span> & Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our students have transformed their careers and see the innovative 
            software solutions we've built for our clients.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8"></div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">Student Success Stories</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 card-hover shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
                <Quote className="h-8 w-8 text-accent mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning fill-warning" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                    <div className="text-xs text-accent font-medium mt-1">
                      {/* <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium"> */}
                        {testimonial.course}
                      {/* </span> */}
                    </div>   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Projects Portfolio */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mt-12 mb-12">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden card-hover shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          {/* <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-2xl p-8 lg:p-12 text-white"> */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Be Our Next Success Story?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing community of successful developers and satisfied clients. 
              Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;