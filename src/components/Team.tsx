import { Github, Linkedin, Twitter, Coffee, Code, Heart, Gamepad2 } from 'lucide-react';
import teamImage from "@/assets/team-collaboration.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Krissada Chalermsook",
      role: "Founder & Lead Instructor",
      image: "https://relearn-solution.com/wp-content/uploads/2024/07/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%82%E0%B8%AD%E0%B9%8A%E0%B8%84-940x940.jpg",
      bio: "Former Google engineer with 10+ years experience. Passionate about making coding accessible to everyone.",
      specialties: ["Full-Stack Development", "System Design", "Mentorship"],
      funFact: "Loves building mechanical keyboards",
      icon: Code,
      social: {
        github: "https://www.facebook.com/CodeCampThailand",
        linkedin: "https://www.facebook.com/CodeCampThailand",
        twitter: "https://www.facebook.com/CodeCampThailand"
      }
    },
    {
      name: "Ratchapong Tantipantarak",
      role: "Assistant System IT Maneger, System Adminstrator Supervisor & System Adminstrator",
      image: "https://relearn-solution.com/wp-content/uploads/2024/07/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%87-293x300-1-940x940.jpg",
      bio: "React core contributor and UI/UX expert. Believes in learning through hands-on projects.",
      specialties: ["React/Next.js", "UI/UX Design", "Frontend Architecture"],
      funFact: "Has taught over 500 students",
      icon: Heart,
      social: {
        github: "https://www.facebook.com/CodeCampThailand",
        linkedin: "https://www.facebook.com/CodeCampThailand",
        twitter: "https://www.facebook.com/CodeCampThailand"
      }
    },
    {
      name: "Oak Krissada",
      role: "Backend Development Lead",
      image: "https://relearn-solution.com/wp-content/uploads/2024/07/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%82%E0%B8%AD%E0%B9%8A%E0%B8%84-940x940.jpg",
      bio: "Cloud architect and backend specialist. Focuses on scalable systems and best practices.",
      specialties: ["Node.js/Python", "Cloud Architecture", "DevOps"],
      funFact: "Coffee enthusiast & home barista",
      icon: Coffee,
      social: {
        github: "https://www.facebook.com/CodeCampThailand",
        linkedin: "https://www.facebook.com/CodeCampThailand",
        twitter: "https://www.facebook.com/CodeCampThailand"
      }
    },
    {
      name: "J Ratchapong",
      role: "ผู้สอน โครงการ Software park Thailand Code Camp",
      image: "https://relearn-solution.com/wp-content/uploads/2024/07/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%87-293x300-1-940x940.jpg",
      bio: "Mobile-first developer with expertise in React Native and cross-platform solutions.",
      specialties: ["React Native", "Mobile UI/UX", "App Store Optimization"],
      funFact: "Avid gamer and app reviewer",
      icon: Gamepad2,
      social: {
        github: "https://www.facebook.com/CodeCampThailand",
        linkedin: "https://www.facebook.com/CodeCampThailand",
        twitter: "https://www.facebook.com/CodeCampThailand"
      }
    },
    {
      name: "Oaky",
      role: "DevOps & Cloud Instructor",
      image: "https://relearn-solution.com/wp-content/uploads/2024/07/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%82%E0%B8%AD%E0%B9%8A%E0%B8%84-940x940.jpg",
      bio: "Infrastructure and deployment expert. Makes complex DevOps concepts easy to understand.",
      specialties: ["AWS/Azure", "Kubernetes", "CI/CD"],
      funFact: "Maintains 10+ open source projects",
      icon: Code,
      social: {
        github: "https://www.facebook.com/CodeCampThailand",
        linkedin: "https://www.facebook.com/CodeCampThailand",
        twitter: "https://www.facebook.com/CodeCampThailand"
      }
    },
    {
      name: "JJ",
      role: "Career Development Advisor",
      image: "https://relearn-solution.com/wp-content/uploads/2024/07/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%87-293x300-1-940x940.jpg",
      bio: "Former tech recruiter turned career advisor. Helps students land their dream jobs.",
      specialties: ["Career Coaching", "Interview Prep", "Industry Insights"],
      funFact: "Helped 200+ students get hired",
      icon: Heart,
      social: {
        github: "https://www.facebook.com/CodeCampThailand",
        linkedin: "https://www.facebook.com/CodeCampThailand",
        twitter: "https://www.facebook.com/CodeCampThailand"
      }
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our passionate instructors and developers bring years of industry experience 
            and a genuine love for teaching to help you succeed.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8"></div>
        </div>

        {/* Team Hero Image */}
        <div className="relative mb-20 rounded-2xl overflow-hidden">
          <img 
            src={teamImage} 
            alt="Relearn Solution Team" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Building the Future Together</h3>
              <p className="text-white/90 max-w-2xl">
                Our diverse team brings together decades of experience from top tech companies, 
                startups, and educational institutions to provide you with world-class learning and development experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div 
                key={member.name}
                className="team-card group shadow-lg hover:border-2 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links - Show on Hover */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a 
                      href={member.social.github} 
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Github className="h-4 w-4 text-foreground" />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-foreground" />
                    </a>
                    <a 
                      href={member.social.twitter} 
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-foreground" />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm font-medium">{member.role}</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty) => (
                        <span 
                          key={specialty}
                          className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Fun Fact */}
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <p className="text-xs text-accent font-medium mb-1">Fun Fact:</p>
                    <p className="text-xs text-muted-foreground">{member.funFact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Our Team Makes the Difference
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Our instructors aren't just teachers—they're industry professionals 
                who bring real-world experience to every lesson.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
                <div className="text-white/80">Combined Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">1000+</div>
                <div className="text-white/80">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">200+</div>
                <div className="text-white/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
                <div className="text-white/80">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate educators and developers to join our mission 
              of empowering the next generation of tech professionals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/80 transition-colors">
                View Open Positions
              </button>
              <button className="text-accent font-semibold hover:text-accent/70 transition-colors">
                Learn More About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;