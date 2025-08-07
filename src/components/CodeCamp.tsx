import {
  Code2,
  Smartphone,
  Clock,
  BarChart2,
  Users,
  BookOpenCheck,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';
import { Button } from "./ui/button";

const CodeCamp = () => {
  const programs = [
    {
      icon: Code2,
      title: "CodeCamp Fullstack Developer",
      description:
        "Practical full-stack training from fundamentals through React and Node.js in just 3.5 months (onsite) or 6 months (online), delivered in recurring instructor-led cohorts.",
      duration: "3.5 months",
      level: "Beginner → Intermediate",
      classSize: "25–30 participants per class",
      features: [
        "Master core programming",
        "Weekly hands-on labs",
        "Build React & Node.js apps",
        "Present at Demo Day"
      ],
      price: "80,000",
      tag: "Most Popular"
    },
    {
      icon: Smartphone,
      title: "CodeCamp Mobile Developer",
      description:
        "Become a job-ready mobile developer in just 1.5 months (onsite only), using Flutter and hands-on project learning.",
      duration: "1.5 months",
      level: "Beginner → Intermediate",
      classSize: "25–30 participants per class",
      features: [
        "Write real code from Day 1.",
        "Build Flutter mobile apps",
        "Think like a full-stack developer",
        "Present at Demo Day"
      ],
      price: "60,000",
      tag: "New!"
    }
  ];

  return (
    <section id="code-camp" className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Code Camp </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Intensive, career-focused bootcamps designed to transform you into a job-ready
            professional with cutting-edge skills and industry certifications.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <Icon className="text-primary h-6 w-6" />
                  {program.tag && (
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {program.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex flex-wrap text-sm text-gray-600 gap-x-6 gap-y-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="h-4 w-4 text-primary" />
                    {program.level}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    {program.classSize}
                  </div>
                </div>

                <ul className="text-sm space-y-2 mb-6">
                  {program.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <BookOpenCheck className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span className="text-gray-800">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary font-bold text-lg mb-0">
                      ฿ {program.price}
                    </p>
                    <p className="text-xs text-gray-500">Full program</p>
                  </div>
                  <Button variant="link" className="text-primary font-medium text-sm group">
                    View Curriculum <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-accent text-white rounded-3xl px-6 py-10 text-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                <BadgeCheck className="inline-block mr-2 h-5 w-5" />
                Not Sure Which Program is Right for You?
              </h3>
              <p className="text-white/90 max-w-xl text-sm">
                Schedule a free consultation with our career advisors. We'll help you choose the perfect program based on your background, goals, and career aspirations.
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm rounded-md whitespace-nowrap">
              Schedule Free Consult <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeCamp;
