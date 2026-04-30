import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface MonitoringSectionProps {
  className?: string;
}

export default function MonitoringSection({ className = '' }: MonitoringSectionProps) {
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
      id="monitoring"
      className={`relative bg-[#2a2a2a] py-[10vh] px-[4vw] ${className}`}
    >
      <div ref={contentRef} className="max-w-7xl mx-auto" style={{ opacity: 0 }}>
        <div className="text-center mb-12">
          <span className="micro-label mb-4 block">MONITORING CENTER</span>
          <div className="flex justify-center mb-6">
            <div className="accent-line" />
          </div>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            Live oversight. Faster decisions.
          </h2>
          <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.7] text-[#aaaaaa] max-w-2xl mx-auto">
            Our UK-based team tracks every patrol, verifies alerts, and coordinates 
            response—so nothing gets missed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-6 md:p-8 order-2 lg:order-1">
            <h3 className="font-display font-semibold text-xl text-white mb-6">What We Monitor</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm text-[#aaaaaa]">GPS routes & geofences</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm text-[#aaaaaa]">Panic signals & alerts</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm text-[#aaaaaa]">Incident notes & photo logs</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                Talk to our control room
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="link-underline flex items-center gap-2 text-sm">
                <BarChart3 className="w-4 h-4" />
                View reporting tools
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.2)] shadow-xl order-1 lg:order-2">
            <img
              src="/images/monitoring_room.jpg"
              alt="CRYPTINITE Security Control Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
