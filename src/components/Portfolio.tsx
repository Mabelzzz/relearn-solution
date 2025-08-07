import { Quote, Star } from 'lucide-react';
import { Button } from './ui/button';

const Portfolio = () => {
  const testimonials = [
    {
      name: "Pimchanok Tangtrakool",
      role: "Software Engineer at PTT Digital",
      company: "PTT",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      content:
        "The CodeCamp with Generative AI program completely transformed my career. The hands-on approach and expert mentorship helped me transition from a non-tech background to landing my dream job at PTT Digital.",
      rating: 5,
    },
    {
      name: "Somchai Wongsuwan",
      role: "IT Director",
      company: "SCG",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      content:
        "Relearn Solution's custom training program for our team was exceptional. Their ability to tailor content to our specific needs and deliver measurable results made them our preferred training partner.",
      rating: 5,
    },
    {
      name: "Pimchanok Tangtrakool",
      role: "Data Scientist at Bank of Thailand",
      company: "Bank of Thailand",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      content:
        "The DataCamp program gave me the skills I needed to excel in data science. The AI-enhanced curriculum and real-world projects prepared me perfectly for my role at the central bank.",
      rating: 5,
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our graduated student from Code Camp who have transformed their careers and organizations through our programs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
              <Quote className="text-primary w-6 h-6 mb-4" />
              <p className="text-sm text-gray-800 mb-4">"{t.content}"</p>
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-accent fill-accent mr-1" />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-600">{t.role}</div>
                  <div className="text-xs text-primary mt-1">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics CTA */}
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Join Thousands of Successful Graduates
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-xl font-medium">
            <div>
              <div className="text-4xl font-bold">92%</div>
              <p className="text-sm mt-1">Job Placement Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold">6 months</div>
              <p className="text-sm mt-1">Average Time to Employment</p>
            </div>
            <div>
              <div className="text-4xl font-bold">95%</div>
              <p className="text-sm mt-1">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
