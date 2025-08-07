import { Target, Lightbulb, Users, Zap } from 'lucide-react';
import teamImage from '../assets/team-collaboration.jpg';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions and modern learning methodologies."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both in our internal processes and with our students and clients."
    },
    {
      icon: Target,
      title: "Learning",
      description: "Continuous learning is at our core. We help others learn while constantly improving ourselves."
    },
    {
      icon: Zap,
      title: "Agility",
      description: "We adapt quickly to changing technologies and market demands, ensuring relevant and effective solutions."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">Relearn Solution</span>
          </h2> */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Relearn Solution</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to bridge the gap between learning and professional growth, 
            while delivering exceptional software solutions for businesses.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Relearn Solution, we believe that technology should empower people and businesses to reach their full potential. 
                Our dual approach as both a Code Camp and Software House allows us to nurture the next generation of developers 
                while creating innovative solutions for today's digital challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with the vision of making quality tech education accessible and creating impactful software solutions, 
                we've grown from a small team of passionate educators and developers into a trusted partner for individuals 
                and businesses seeking digital transformation.
              </p>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Our Vision</h4>
                <p className="text-muted-foreground">
                  To be the leading force in democratizing tech education and digital innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img 
                src={teamImage} 
                alt="Our team collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-large border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl p-8 hover-lift shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;