import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Download, CheckCircle2, Car, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FleetSectionProps {
  className?: string;
}

export default function FleetSection({ className = '' }: FleetSectionProps) {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="fleet"
      className={`relative bg-[#333333] py-[10vh] px-[4vw] ${className}`}
    >
      <div ref={contentRef} className="max-w-7xl mx-auto" style={{ opacity: 0 }}>
        <div className="text-center mb-12">
          <span className="micro-label mb-4 block">PATROL FLEET</span>
          <div className="flex justify-center mb-6">
            <div className="accent-line" />
          </div>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            A visible deterrent. Tracked in real time.
          </h2>
          <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.7] text-[#aaaaaa] max-w-2xl mx-auto">
            Marked units, live GPS, and incident logging—so every patrol is 
            accountable and every response is fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.3)] shadow-2xl shadow-[#D4AF37]/10">
            <img
              src="/images/fleet_newbadge.jpg"
              alt="CRYPTINITE Security Patrol Vehicle"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 glass-card px-4 py-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm text-white">CRYPTINITE SECURITY</span>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-10 h-10 text-[#D4AF37]" />
              <span className="font-display font-bold text-lg text-[#D4AF37]">CRYPTINITE FLEET</span>
            </div>
            
            <h3 className="font-display font-semibold text-xl text-white mb-6">Fleet Readiness</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm text-[#aaaaaa]">Daily inspected vehicles</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm text-[#aaaaaa]">Live route tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm text-[#aaaaaa]">Incident photo + timestamp</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                Explore fleet features
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="link-underline flex items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                Download patrol specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
