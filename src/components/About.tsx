import { Target, Lightbulb, Users, Zap } from 'lucide-react';
import ceoImage from '../assets/ceo-speaking.png';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Lifelong Learning',
      description: 'We believe learning never stops. Our programs are designed to evolve with industry trends and individual career paths.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge curriculum that incorporates the latest technologies, including AI and emerging digital solutions.'
    },
    {
      icon: Target,
      title: 'Real-World Impact',
      description: 'Practical, hands-on learning experiences that directly translate to workplace success and career advancement.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Quality education should be accessible to all. We offer flexible learning paths for diverse backgrounds and schedules.'
    }
  ];

  const timeline = [
    { year: '2020', detail: 'CodeCamp launched. Over 50 bootcamp batches ran from then to now.' },
    { year: '2022', detail: '350+ courses went live. Our catalogue now covers IT, data, and soft skills.' },
    { year: '2023', detail: 'Solutions division formed. We began building real software projects alongside training.' },
    { year: '2023 – Now', detail: '5,000–10,000 weekly viewers. Our "Live Tech Talk" draws thousands each week.' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#343231]">
              About <span className="text-primary">Relearn Solution</span>
            </h2>
            <p className="text-[#343231] text-lg mb-6">
              Led by visionary CEO Krissada Chalemrsook, Relearn Solution Co., Ltd. has been at the forefront of Thailand’s educational
              technology revolution since 2020.
            </p>
            <p className="text-[#343231] text-lg mb-6">
              We empower learners by making quality education accessible and career-relevant. Through hands-on training in software and
              digital technology, we help people build real skills, unlock top job opportunities, and create lasting impact — all through a model
              designed for inclusive, lifelong learning.
            </p>
            <ul className="space-y-2 text-[#343231] font-medium">
              <li className="flex items-start gap-2"><span className="text-primary">✔</span> Industry-aligned curriculum development</li>
              <li className="flex items-start gap-2"><span className="text-primary">✔</span> Certified training professionals</li>
              <li className="flex items-start gap-2"><span className="text-primary">✔</span> AI-enhanced learning experiences</li>
              <li className="flex items-start gap-2"><span className="text-primary">✔</span> Comprehensive post-graduation support</li>
            </ul>
          </div>
          <div className="relative">
            <img
              src={ceoImage}
              alt="CEO Speaking"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white shadow px-4 py-2 rounded-xl text-sm">
              <strong>Krissada C.</strong><br />CEO & Founder
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-center mb-4 text-[#343231]">Our Core Values</h3>
          <p className="text-center text-[#666] mb-12">The principles that guide every decision we make and every program we design.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#343231] mb-2">{value.title}</h4>
                  <p className="text-sm text-[#666] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-4 text-[#343231]">Our Journey</h3>
          <p className="text-center text-[#666] mb-12 max-w-2xl mx-auto">
            Key milestones in our mission to transform education and empower learners.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-left border border-gray-200 shadow-sm">
                <div className="text-xl font-bold text-primary mb-2">{item.year}</div>
                <p className="text-[#343231] text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;