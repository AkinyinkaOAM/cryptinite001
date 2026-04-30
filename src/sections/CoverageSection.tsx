import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const coverageAreas = [
  { city: 'London', description: 'Greater London & M25' },
  { city: 'Manchester', description: 'Greater Manchester' },
  { city: 'Birmingham', description: 'West Midlands' },
  { city: 'Liverpool', description: 'Merseyside' },
  { city: 'Leeds', description: 'West Yorkshire' },
  { city: 'Glasgow', description: 'Scotland' },
];

const CoverageSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.coverage-image', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
      gsap.fromTo('.coverage-content', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
      gsap.fromTo('.coverage-city', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.coverage-cities', start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="coverage" ref={sectionRef} className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="coverage-image relative order-2 lg:order-1">
            <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-15 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30">
              <img src="/images/guard_female_black.jpg" alt="Professional Security Guard" className="w-full h-auto object-cover" />
              
              <div className="absolute top-6 left-6 bg-[#1a1a1a]/90 backdrop-blur-md rounded-xl p-4 border border-[#D4AF37]/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-futuristic font-bold text-white text-xs">24/7 COVERAGE</p>
                    <p className="font-tech text-[#D4AF37] text-xs">Nationwide Service</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-[#1a1a1a]/90 backdrop-blur-md rounded-xl p-4 border border-[#D4AF37]/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-futuristic font-bold text-white text-xs">UK WIDE</p>
                    <p className="font-tech text-[#D4AF37] text-xs">All Regions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="coverage-content space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-tech text-[#D4AF37] tracking-widest text-sm uppercase">Coverage Areas</span>
            </div>

            <h2 className="font-futuristic text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              UK WIDE <span className="gold-text-gradient">SECURITY COVERAGE</span>
            </h2>

            <p className="font-tech text-gray-300 text-lg leading-relaxed">
              CRYPTINITE SECURITY provides professional security services across the entire United Kingdom. Our network of trained security guards ensures rapid response and consistent service quality wherever you are.
            </p>

            <div className="coverage-cities grid grid-cols-2 sm:grid-cols-3 gap-4">
              {coverageAreas.map((area, index) => (
                <div key={index} className="coverage-city flex items-center space-x-2 p-3 bg-[#252525] rounded-lg border border-[#333] hover:border-[#D4AF37]/30 transition-colors">
                  <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <div>
                    <p className="font-tech font-semibold text-white text-sm">{area.city}</p>
                    <p className="font-tech text-gray-500 text-xs">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
