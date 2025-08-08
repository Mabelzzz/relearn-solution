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
  CheckCircle,
  Layers,
  Briefcase,
  MonitorSmartphone,
  BookOpenCheck,
  LucideTarget,
  MessageSquareQuote,
  SlidersHorizontal
} from 'lucide-react';
import { Button } from './ui/button';

const Services = () => {
  const serviceList = [
    {
      icon: Code2,
      tag: '350+ Courses',
      title: 'IT Professions Training',
      description: 'Over 350 hands-on IT, data & security courses with ITIL v4 and ISO exam prep.',
      bullets: [
        'Covers modern cloud, data and cyber.',
        'Prepares you for ITIL® & ISO tests.',
        'Led by ITIL®, PRINCE2®, CISSP trainers.'
      ],
      footerNote: 'Certified expert instructors on every course.'
    },
    {
      icon: Users,
      tag: 'People Skills',
      title: 'Soft-skill & Leadership Training',
      description: 'Workshops that sharpen communication, analytic thinking and core leadership.',
      bullets: [
        'Improve clear communication fast.',
        'Boost critical-thinking ability.',
        'Learn sales & marketing skills.'
      ],
      footerNote: 'Essential & Sales-skill tracks included.'
    },
    {
      icon: BookOpenCheck,
      tag: 'Tailored Learning',
      title: 'Custom / In-house / Virtual',
      description: 'Training shaped to your goals—on-site, in-house or live online.',
      bullets: [
        'Pick topics that fit your team.',
        'Choose on-site or virtual delivery.',
        'Schedule flexes around your workflow.'
      ],
      footerNote: 'Fully customised to organisation needs.'
    },
    {
      icon: Briefcase,
      tag: 'L&D Strategy',
      title: 'Consulting & Tailored Development',
      description: 'Experts analyse skill gaps and build an end-to-end development plan.',
      bullets: [
        'Needs assessment and clear roadmap.',
        'Bespoke development programmes.',
        'Includes online learning solutions.'
      ],
      footerNote: 'Trusted by PTT & SCG.'
    },
    {
      icon: MonitorSmartphone,
      tag: 'Smart Tech',
      title: 'Software & Digital Solutions',
      description: 'We build web/mobile, AI/AR, IoT and RPA solutions for real impact.',
      bullets: [
        'Launch web & mobile apps.',
        'Integrate AI/AR & IoT tech.',
        'Automate with low-code & RPA.'
      ],
      footerNote: 'Projects span public & private clients.'
    },
    {
      icon: Cloud,
      tag: 'Cloud LMS',
      title: 'Online Learning Solutions & LMS',
      description: 'Cloud platform that hosts courses, analytics and mobile certificates.',
      bullets: [
        'Host courses, quizzes, certificates.',
        'Track progress with analytics.',
        'Mobile-ready learning anywhere.'
      ],
      footerNote: 'Part of our tailored programmes.'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive education and technology solutions designed to empower individuals and transform organizations in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <div className="bg-accent/10 border-2 border-accent text-accent px-3 py-1 text-xs font-medium rounded-full">{service.tag}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-sm text-primary">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span className="text-gray-800">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {service.footerNote && (
                  <p className="text-sm text-gray-600 mt-4">{service.footerNote}</p>
                )}

                <div className="mt-4 flex justify-end">
                  <Button variant="link" className="px-0 text-sm text-primary font-medium group">
                    Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-primary text-white rounded-3xl p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-medium mb-4">Need a Tailored Program?</h3>
            <p className="text-white/90 mb-0">
              Let’s co-design your learning journey. Our experts will work with you to create a customized solution that meets your specific goals and requirements.
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 text-md rounded-md whitespace-nowrap font-light">
            Start Planning <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
