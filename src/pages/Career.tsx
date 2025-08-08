import Innovation from '../assets/icons/innovation.svg';
import Thunder from '../assets/icons/thunder.svg';
import UsersRound from '../assets/icons/users-round.svg';
import Growth from '../assets/icons/growth.svg';

import Heart from '../assets/icons/heart.svg';
import Target from '../assets/icons/target.svg';
import Repeat from '../assets/icons/repeat.svg';

import HeaderCareer from '../components/HeaderCareer'
import OpenPositions from '../components/OpenPositions'
import FooterCareer from '../components/FooterCareer'
import { useNavigate } from 'react-router-dom';

export default function Career() {
  const navigate = useNavigate();
  const values = [
  { icon: Innovation, title: 'Innovation', description: "We constantly push the boundaries of what’s possible in education and learning." },
  { icon: Thunder, title: 'Impact', description: "Every solution we create has the power to transform lives and communities." },
  { icon: UsersRound, title: 'Collaboration', description: "We believe the best solutions come from diverse perspectives working together." },
  { icon: Growth, title: 'Excellence', description: "We strive for excellence in everything we do, from code to customer service." },
];

const reasons = [
  { icon: Heart, title: 'Health & Wellness', description: "Comprehensive health insurance and wellness programs" },
  { icon: Target, title: 'Professional Growth', description: "Continuous learning opportunities and career development" },
  { icon: Repeat, title: 'Flexible Work', description: "Hybrid work model with flexible hours and remote options" },
];


  return (
    <>
      <HeaderCareer />

      {/* Hero Section */}
      <section className="bg-[linear-gradient(90deg,_#0D5697_0%,_#460D09_100%)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 pt-24">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Join Our Mission to <br />
            <span className="text-accent text-[40px] md:text-[50px]">Transform Learning</span>
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Be part of a team that’s revolutionizing education and empowering learners worldwide.
            Together, we’re building the future of learning.
          </p>
          <button
            onClick={() => navigate('/positions/s')}
            className="bg-accent text-white px-6 py-3 text-sm rounded-md hover:bg-accent/90"
          >
            View Open Positions →
          </button>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[#FAF9F6] py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Values</h2>
        <p className="text-muted-foreground mb-10 text-sm max-w-2xl mx-auto">
          These core values guide everything we do and shape our culture
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map(({ icon, title, description }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-md p-6 shadow-sm text-left">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-md">
                <img src={icon} alt={title} className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-[#343231] mb-2">{title}</h4>
              <p className="text-sm text-[#666] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-[#FAF9F6] py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Join Relearn Solution?</h2>
        <p className="text-muted-foreground mb-10 text-sm max-w-2xl mx-auto">
          We believe in taking care of our team so they can do their best work
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-md">
                <img src={icon} alt={title} className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-[#343231] mb-2">{title}</h4>
              <p className="text-sm text-[#666] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <OpenPositions/>

      <FooterCareer/>
    </>
  );
}
