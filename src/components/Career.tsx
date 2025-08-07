import { Briefcase, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Career = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Software Development",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications using React, Node.js, and modern technologies.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"]
    },
    {
      title: "Code Camp Instructor",
      department: "Education",
      location: "On-site",
      type: "Part-time",
      experience: "2+ years",
      description: "Teach programming fundamentals and mentor aspiring developers.",
      skills: ["JavaScript", "Python", "Teaching", "Communication", "Mentoring"]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2+ years",
      description: "Create beautiful and intuitive user experiences for web and mobile applications.",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"]
    }
  ];

  return (
    <></>
    // <section id="career" className="py-20 bg-secondary/30">
    //   <div className="container mx-auto px-4">
    //     {/* Header */}
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
    //         Join Our <span className="gradient-text">Growing Team</span>
    //       </h2>
    //       <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
    //         Be part of a company that's shaping the future of technology education and software development. 
    //         We're looking for passionate individuals who share our vision.
    //       </p>
    //       <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8"></div>
    //     </div>

    //     {/* Company Culture */}
    //     <div className="grid md:grid-cols-4 gap-8 mb-16">
    //       {[
    //         { icon: Users, title: "Collaborative Team", desc: "Work with talented professionals" },
    //         { icon: Briefcase, title: "Growth Opportunities", desc: "Advance your career with us" },
    //         { icon: Clock, title: "Work-Life Balance", desc: "Flexible schedules and remote work" },
    //         { icon: MapPin, title: "Great Location", desc: "Modern office with great amenities" }
    //       ].map((benefit, index) => (
    //         <div key={index} className="text-center">
    //           <div className="bg-white rounded-2xl p-8 hover-lift shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
    //             <div className="bg-primary/10 w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center">
    //               <benefit.icon className="h-8 w-8 text-primary" />
    //             </div>
    //             <h3 className="font-semibold mb-2 text-foreground">{benefit.title}</h3>
    //             <p className="text-muted-foreground text-sm">{benefit.desc}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Job Openings */}
    //     <div className="mb-12">
    //       <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
    //         Current <span className="gradient-text">Openings</span>
    //         {/* <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8"></div> */}
    //       </h3>
          
    //       <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
    //         {jobOpenings.map((job, index) => (
    //           <Card key={index} className="hover-lift border-border/50 shadow-lg">
    //             <CardHeader>
    //               <div className="flex justify-between items-start mb-2">
    //                 <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
    //                 <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
    //                   {job.type}
    //                 </span>
    //               </div>
    //               <CardDescription className="text-muted-foreground">
    //                 {job.department}
    //               </CardDescription>
    //             </CardHeader>
                
    //             <CardContent>
    //               <div className="space-y-4">
    //                 <p className="text-foreground">{job.description}</p>
                    
    //                 <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
    //                   <div className="flex items-center gap-1">
    //                     <MapPin className="h-4 w-4" />
    //                     {job.location}
    //                   </div>
    //                   <div className="flex items-center gap-1">
    //                     <Clock className="h-4 w-4" />
    //                     {job.experience}
    //                   </div>
    //                 </div>
                    
    //                 <div className="flex flex-wrap gap-2">
    //                   {job.skills.slice(0, 3).map((skill, skillIndex) => (
    //                     <span 
    //                       key={skillIndex}
    //                       className="text-xs px-2 py-1 bg-accent/10 text-accent rounded"
    //                     >
    //                       {skill}
    //                     </span>
    //                   ))}
    //                   {job.skills.length > 3 && (
    //                     <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
    //                       +{job.skills.length - 3} more
    //                     </span>
    //                   )}
    //                 </div>
                    
    //                 <Button className="w-full bg-primary hover:bg-primary-dark">
    //                   Apply Now
    //                   <ArrowRight className="h-4 w-4 ml-2" />
    //                 </Button>
    //               </div>
    //             </CardContent>
    //           </Card>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Call to Action */}
    //     <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-2xl p-12 text-white text-center">
    //     {/* <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white"> */}
    //       <h3 className="text-3xl font-bold mb-4">Don't See Your Role?</h3>
    //       <p className="text-xl mb-8 opacity-90">
    //         We're always looking for talented individuals. Send us your resume!
    //       </p>
    //       <Button size="lg" className="bg-white text-accent hover:bg-accent-light hover:text-accent-foreground">
    //         <Briefcase className="h-5 w-5 mr-2" />
    //         Send Resume
    //       </Button>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Career;