import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Building, Clock4 } from 'lucide-react';
import HeaderCareer from '../components/HeaderCareer';
import FooterCareer from '../components/FooterCareer'
interface DetailedPosition {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  category: string;
  type: string;
  applyLink: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  techStack: string[];
  whyJoin: string[];
}

const detailedPositions: DetailedPosition[] = [
  {
    slug: 'senior-full-stack-developer',
    title: 'Senior Full-Stack Developer',
    subtitle:
      'Lead end-to-end web development across React, Node.js, and cloud infrastructure. Collaborate cross-functionally to ship scalable platforms that power education at scale.',
    location: 'PhayaThai, Bangkok (Hybrid)',
    category: 'Web Development',
    type: 'Full time, 5 days/week',
    applyLink: '/#contact',
    about:
      "We're looking for a senior-level full-stack developer to help us build scalable, modern platforms that empower thousands of learners. You’ll work across the stack—from UI in React to APIs in Node.js and deployment on cloud—and collaborate with design, product, and content teams to deliver real value at speed.",
    responsibilities: [
      'Build, test, and ship web apps using React, Node.js, and modern cloud stacks.',
      'Design APIs, database models, and backend services for performance and maintainability.',
      'Collaborate with designers and product managers to refine user flows and features.',
      'Write clean, well-documented code and perform code reviews for peers.',
      'Help scale infrastructure (Docker, CI/CD, AWS) to support growing demand.',
      'Lead sprints and contribute to architectural decisions in the engineering team.',
    ],
    requirements: [
      '3+ years in full-stack development (React + Node.js).',
      'Solid experience with REST APIs, databases (PostgreSQL or MongoDB), and version control.',
      'Familiarity with Docker, GitHub Actions, and AWS or other cloud platforms.',
      'Strong understanding of clean code, testing practices, and deployment workflows.',
      'Ability to mentor junior devs and lead technical discussions.',
      'Bonus: Experience with GraphQL, Next.js, or microservices.',
    ],
    techStack: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'GitHub Actions',
      'AWS',
    ],
    whyJoin: [
      'Build tools that power real impact in education.',
      'Work with a cross-functional, mission-driven team.',
      'Flexible working model (remote-friendly).',
      'Opportunity to own systems, not just features.',
      'Be part of a growing, product-first tech company.',
    ],
  },
  // Add at least 2 more entries so you always have something to show:
  {
    slug: 'product-designer',
    title: 'Product Designer',
    subtitle: 'Design intuitive, scalable learning experiences across web and mobile.',
    location: 'Remote',
    category: 'Design',
    type: 'Full time',
    applyLink: '/#contact',
    about: 'We need a creative Product Designer to craft user flows, wireframes & prototypes.',
    responsibilities: [
      'Create wireframes and high-fidelity prototypes.',
      'Conduct user research and testing.',
      'Collaborate with engineers to ship polished UIs.',
    ],
    requirements: [
      '2+ years in UX/UI design.',
      'Strong portfolio of web & mobile work.',
      'Expertise in Figma or Sketch.',
    ],
    techStack: ['Figma', 'Sketch', 'Adobe XD'],
    whyJoin: ['Join a fast-paced design team', 'Ownership over design decisions'],
  },
  {
    slug: 'content-creator',
    title: 'Content Creator',
    subtitle: 'Produce engaging educational articles, scripts, and social media posts.',
    location: 'Onsite',
    category: 'Content',
    type: 'Full time',
    applyLink: '/#contact',
    about: 'We’re looking for a skilled writer who can translate complex tech topics into clear content.',
    responsibilities: [
      'Write blog posts, whitepapers, and guides.',
      'Manage social media content calendar.',
      'Collaborate with subject-matter experts.',
    ],
    requirements: [
      '2+ years in content writing or technical journalism.',
      'Excellent research and storytelling skills.',
    ],
    techStack: ['Notion', 'Google Docs', 'WordPress'],
    whyJoin: ['Shape our content strategy', 'Work with educators and engineers'],
  },
];

export default function PositionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pos =
    detailedPositions.find((p) => p.slug === slug) ?? detailedPositions[0];

  // Filter out current, then pick exactly 2 (or fallback to first 2)
  const others = detailedPositions.filter((p) => p.slug !== pos.slug);
  const relatedToShow =
    others.length >= 2 ? others.slice(0, 2) : detailedPositions.slice(0, 2);

  return (
    <div>
      {/* Header */}
      <HeaderCareer />

      {/* Hero */}
      <section className="bg-primary text-white text-center py-12 px-6 pt-32">
        <h1 className="text-4xl font-semibold">{pos.title}</h1>
        <p className="mt-4 max-w-2xl mx-auto">{pos.subtitle}</p>
      </section>

      {/* Main */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Sidebar */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">{pos.title}</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              {pos.location}
            </li>
            <li className="flex items-center">
              <Building className="h-5 w-5 text-primary mr-2" />
              {pos.category}
            </li>
            <li className="flex items-center">
              <Clock4 className="h-5 w-5 text-primary mr-2" />
              {pos.type}
            </li>
          </ul>
          <Link
            to={pos.applyLink}
            className="inline-block bg-[#1B8ADC] text-white px-6 py-3 rounded-md font-medium hover:bg-primary transition"
          >
            Apply for role →
          </Link>
        </div>

        {/* Content */}
        <div className="md:col-span-2 space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-3">About the Role</h3>
            <p className="text-gray-700 leading-relaxed">{pos.about}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">What You’ll Do</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {pos.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">What We’re Looking For</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {pos.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
            <p className="text-gray-700">{pos.techStack.join(' • ')}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Why Join Us</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {pos.whyJoin.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      <section className="container mx-auto px-6 pb-16 space-y-8">
        <h3 className="text-2xl font-semibold">Related Jobs</h3>
        <div className="space-y-6">
          {relatedToShow.map((p) => (
            <div
              key={p.slug}
              className="border rounded-xl p-6 shadow-sm bg-white"
            >
              {/* Job title + icons */}
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-4">
                {p.title}
                <span className="inline-flex items-center gap-1 text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  {p.location.replace(' (Hybrid)', '')}
                </span>
                <span className="inline-flex items-center gap-1 text-gray-600 text-sm">
                  <Clock4 className="h-4 w-4 text-primary" />
                  {p.type}
                </span>
              </h4>

              {/* Qualifications grid + View Details button */}
              <div className="flex justify-between items-start mt-2">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-600 text-sm mt-6">
                  {p.requirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    // to={`/positions/${p.slug}`}
                    to={`/career`}

                    className="bg-primary text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-primary-dark transition"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterCareer/>

    </div>
  );
}
