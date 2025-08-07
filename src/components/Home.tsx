import { Button } from './ui/button';
import { Lightbulb, Users, MessageSquareText } from 'lucide-react';
import CollabImage from '../assets/collaborate.png';
import BgImage from '../assets/background.png';

const logosRow1 = [1, 2, 3, 4, 5, 6];
const logosRow2 = [7, 8, 9, 10, 11, 12, 7, 8, 9, 10, 11, 12];

const Home = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen bg-[#FAFAF9] flex items-center px-6 sm:px-12 md:px-20 py-20 overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={BgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto">

          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-1 rounded-full mb-6 font-medium text-sm">
              <Lightbulb className="w-4 h-4" />
              <span>Leading the Way in Skill-Based Education</span>
            </div>

            {/* Headings */}
            <h1
              className="text-[48px] leading-[52.8px] font-extrabold text-[#343231] mb-4"
              style={{ fontFamily: 'YourCustomDisplayFont, sans-serif' }}
            >
              Transform Your <span className="text-primary">Skills</span><br />
              Shape Your Future
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8">
              Relearn Solution Co., Ltd. empowers individuals and organizations through innovative
              skill-based education, digital solutions, and real-world learning experiences that drive career success.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-white hover:text-primary text-white px-6 py-3 text-lg rounded-md">
                Explore Programs
              </Button>
              <Button variant="outline" className="border-2 border-primary hover:bg-primary text-primary px-6 py-3 text-lg rounded-md">
                Talk to Our Team
              </Button>
            </div>
          </div>

          {/* Image & Tags */}
          <div className="relative flex-1 max-w-2xl w-full">
            <img
              src={CollabImage}
              alt="Team collaborating at a table"
              className="rounded-3xl w-full h-auto object-cover shadow-xl"
            />

            {/* Top-left Tag */}
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-md px-4 py-2 flex items-center space-x-3">
              <div className="bg-[#e0e7ff] p-2 rounded-full">
                <code className="text-sm">{`</>`}</code>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">CodeCamp</div>
                <div className="text-gray-500">Full-stacked web dev</div>
              </div>
            </div>

            {/* Bottom-right Tag */}
            <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-md px-4 py-2 flex items-center space-x-3">
              <div className="bg-[#ffe4e6] p-2 rounded-full">
                <MessageSquareText className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">IT Training</div>
                <div className="text-gray-500">By Industry mentorship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="bg-white py-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#343231] mb-2">Trusted by Leading Organizations</h2>
          <p className="text-gray-600 mb-10">
            We've partnered with Thailand's most innovative companies to develop their talent
          </p>

          {/* Logo Rows */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="overflow-hidden relative">
              <div className="flex gap-6 w-max animate-scroll-x">
                {[...logosRow1, ...logosRow1].map((id) => (
                  <div
                    key={`row1-${id}-${Math.random()}`}
                    className="w-48 h-28 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <span className="text-gray-400">Image {id}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="overflow-hidden relative">
              <div className="flex gap-6 w-max animate-scroll-x-reverse">
                {logosRow2.map((id) => (
                  <div
                    key={`row2-${id}-${Math.random()}`}
                    className="w-48 h-28 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <span className="text-gray-400">Image {id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-[#0D5697]">50+</div>
              <p className="text-gray-700">Corporate Client</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0D5697]">10,000+</div>
              <p className="text-gray-700">Professionals Trained</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0D5697]">95%</div>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animation CSS */}
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-x-reverse {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
        .animate-scroll-x-reverse {
          animation: scroll-x-reverse 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Home;
