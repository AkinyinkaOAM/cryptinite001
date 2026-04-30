import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Building2, 
  Hotel, 
  Factory, 
  HardHat, 
  Train,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface IndustriesSectionProps {
  className?: string;
}

export default function IndustriesSection({ className = '' }: IndustriesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const industries = [
    {
      id: 'schools',
      icon: GraduationCap,
      title: 'Schools & Universities',
      description: 'Comprehensive campus security solutions protecting students, faculty, and facilities across UK educational institutions.',
      features: ['Campus patrols', 'Emergency protocols', 'Visitor management', 'After-hours security'],
      image: '/images/industry_schools.jpg',
    },
    {
      id: 'hotels',
      icon: Hotel,
      title: 'Hotels & Hospitality',
      description: 'Discreet yet effective security for hotels and resorts across the UK.',
      features: ['Lobby security', 'Room floor patrols', 'Event security', 'Valet oversight'],
      image: '/images/industry_hotels.jpg',
    },
    {
      id: 'corporate',
      icon: Building2,
      title: 'Corporate & Commercial',
      description: 'Professional security for office buildings, corporate headquarters, and commercial properties.',
      features: ['Reception security', 'Access control', 'CCTV monitoring', 'Key holding'],
      image: '/images/industry_corporate.jpg',
    },
    {
      id: 'retail',
      icon: Factory,
      title: 'Retail & Shopping',
      description: 'Loss prevention and customer safety for retail stores and shopping centres.',
      features: ['Loss prevention', 'Customer safety', 'Store detectives', 'Crowd management'],
      image: '/images/industry_retail.jpg',
    },
    {
      id: 'construction',
      icon: HardHat,
      title: 'Construction Sites',
      description: 'Site security preventing theft, vandalism, and unauthorized access.',
      features: ['Perimeter patrols', 'Equipment guarding', 'Material protection', 'Site access control'],
      image: '/images/industry_construction.jpg',
    },
    {
      id: 'transport',
      icon: Train,
      title: 'Transport & Logistics',
      description: 'Public transit security ensuring passenger safety and facility protection.',
      features: ['Platform patrols', 'Crowd control', 'Baggage screening', 'Emergency response'],
      image: '/images/industry_transport.jpg',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="industries"
      className={`relative bg-[#2a2a2a] py-[10vh] px-[4vw] ${className}`}
    >
      <div ref={contentRef} className="max-w-7xl mx-auto" style={{ opacity: 0 }}>
        <div className="text-center mb-12">
          <span className="micro-label mb-4 block">OUR EXPERTISE</span>
          <div className="flex justify-center mb-6">
            <div className="accent-line" />
          </div>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.7] text-[#aaaaaa] max-w-2xl mx-auto">
            Tailored security solutions for diverse sectors across the UK. 
            All services delivered by SIA licensed professionals.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[rgba(212,175,55,0.3)] shadow-2xl shadow-[#D4AF37]/10">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/20 to-transparent" />
                </div>
              ))}
              
              <div className="absolute bottom-4 left-4">
                <div className="glass-card px-4 py-2 flex items-center gap-2">
                  {industries[activeIndex] && (
                    <>
                      {(() => {
                        const Icon = industries[activeIndex].icon;
                        return <Icon className="w-4 h-4 text-[#D4AF37]" />;
                      })()}
                      <span className="text-sm font-semibold text-white ml-2">{industries[activeIndex].title}</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex gap-2">
                {industries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? 'bg-[#D4AF37] w-6' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  className={`transition-all duration-500 ${
                    index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-8'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                      <industry.icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <span className="micro-label">{industry.id.toUpperCase()}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-[#aaaaaa] mb-6">{industry.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {industry.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm text-[#888888]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                    Get a quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#888888] hover:text-[#D4AF37] glass-card">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#888888] hover:text-[#D4AF37] glass-card">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-4 md:grid-cols-7 gap-3">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndex(index)}
                className={`p-3 rounded-xl border transition-all ${
                  index === activeIndex ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40' : 'bg-[rgba(212,175,55,0.03)] border-[rgba(212,175,55,0.08)]'
                }`}
              >
                <industry.icon className={`w-5 h-5 mx-auto mb-2 ${index === activeIndex ? 'text-[#D4AF37]' : 'text-[#888888]'}`} />
                <span className={`text-[10px] block text-center ${index === activeIndex ? 'text-white' : 'text-[#888888]'}`}>
                  {industry.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
