import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Shield, Users, Clock, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface MissionVisionSectionProps {
  className?: string;
}

export default function MissionVisionSection({ className = '' }: MissionVisionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with unwavering honesty and ethical standards in every interaction.',
    },
    {
      icon: Users,
      title: 'Professionalism',
      description: 'Our team delivers disciplined, courteous service that reflects excellence.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Count on us 24/7. We show up on time, every time, without exception.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We continuously improve our training, technology, and service delivery.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="mission-vision"
      className={`relative bg-[#2a2a2a] py-[10vh] px-[4vw] ${className}`}
    >
      <div ref={contentRef} className="max-w-7xl mx-auto" style={{ opacity: 0 }}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="micro-label mb-4 block">ABOUT US</span>
          <div className="flex justify-center mb-6">
            <div className="accent-line" />
          </div>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            Who We Are
          </h2>
          <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.7] text-[#aaaaaa] max-w-2xl mx-auto">
            Driven by purpose, guided by values, committed to your safety.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#D4AF37]" />
              </div>
              
              <span className="micro-label mb-3 block">OUR MISSION</span>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">To protect what matters most</h3>
              
              <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.7] text-[#aaaaaa]">
                We provide exceptional security services that safeguard people, 
                property, and assets across diverse industries. Through highly trained 
                personnel, cutting-edge technology, and unwavering commitment, we 
                create secure environments where businesses thrive and communities flourish.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#D4AF37]" />
              </div>
              
              <span className="micro-label mb-3 block">OUR VISION</span>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">Setting the standard in security excellence</h3>
              
              <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.7] text-[#aaaaaa]">
                To be the most trusted security partner in the region, recognized 
                for our innovation, reliability, and people-first approach. We envision 
                a future where every organization—regardless of size—has access to 
                world-class protection that adapts to evolving threats.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-8">
            <span className="micro-label">CORE VALUES</span>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:border-[rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h4 className="font-display font-semibold text-lg text-white mb-2">{value.title}</h4>
                <p className="text-sm text-[#888888] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
