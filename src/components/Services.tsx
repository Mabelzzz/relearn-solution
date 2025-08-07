import { 
  GraduationCap, 
  Code2, 
  Users, 
  Clock, 
  Building2, 
  Smartphone, 
  Palette, 
  Cloud,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import { Button } from './ui/button';

const Services = () => {
  const codeCampServices = [
    {
      icon: Code2,
      title: "Full-Stack Bootcamps",
      description: "Comprehensive 12-24 week programs covering modern web development from frontend to backend.",
      features: ["React, Node.js, MongoDB", "Live Projects", "Job Placement Support", "1:1 Mentorship"],
      duration: "12-24 weeks",
      level: "Beginner to Advanced"
    },
    {
      icon: Clock,
      title: "Weekend Courses",
      description: "Flexible learning options for working professionals who want to upskill without leaving their current jobs.",
      features: ["Flexible Schedule", "Industry-Relevant Curriculum", "Hands-on Practice", "Certificate"],
      duration: "8-12 weeks",
      level: "All Levels"
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "One-on-one guidance from industry experts to accelerate your learning journey and career transition.",
      features: ["Personal Mentor", "Custom Learning Path", "Career Guidance", "Code Reviews"],
      duration: "Ongoing",
      level: "Customized"
    }
  ];

  const softwareHouseServices = [
    {
      icon: Code2,
      title: "Custom Web & Mobile Apps",
      description: "Tailored software solutions built with modern technologies to meet your business needs.",
      features: ["React/Next.js", "React Native", "Node.js/Python", "Database Design"],
      category: "Development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications that provide seamless user experiences across iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      category: "Development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      category: "Design"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Scalable cloud infrastructure and DevOps practices to ensure reliable deployments.",
      features: ["AWS/Azure", "CI/CD Pipelines", "Docker/Kubernetes", "Monitoring"],
      category: "Infrastructure"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking to learn new skills or build custom software, 
            we provide comprehensive solutions tailored to your needs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8"></div>
        
        </div>

        {/* Code Camp Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-accent/10 p-4 rounded-2xl mr-4">
              <GraduationCap className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Code Camp</span> Programs
            </h3>
            <p className="text-lg text-muted-foreground">Transform your career with our intensive coding programs</p>
          </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {codeCampServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="service-card hover-lift shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                    <span><strong>Duration:</strong> {service.duration}</span>
                    <span><strong>Level:</strong> {service.level}</span>
                  </div>

                  <Button className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Software House Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="bg-primary/10 p-4 rounded-2xl mr-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">Software House</span> Solutions
              </h3>
              {/* <h3 className="text-2xl md:text-3xl font-bold">Software House</h3> */}
              <p className="text-muted-foreground">End-to-end software development for your business</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {softwareHouseServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="service-card hover-lift shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* <Button variant="outline" className="w-full group">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-accent rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Whether you want to learn to code or need custom software development, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" variant="secondary">
                <GraduationCap className="mr-2 h-5 w-5" />
                Enroll in Code Camp
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-primary hover:text-white">
                <Building2 className="mr-2 h-5 w-5" />
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;