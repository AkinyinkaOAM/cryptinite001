import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, CheckCircle, UserCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const guardFeatures = [
  { title: 'Professional', description: 'Trained security professionals', icon: UserCheck },
  { title: 'DBS Checked', description: 'Full background verification', icon: CheckCircle },
  { title: 'Vetted', description: 'Rigorous screening process', icon: Shield },
  { title: 'Trained', description: 'Regular training updates', icon: Shield },
];

const GuardSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.guard-content', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
      gsap.fromTo('.guard-image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="guards" ref={sectionRef} className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`, backgroundSize: '50px 50px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="guard-content space-y-8">
            <div className="inline-flex items-center space-x-2">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-tech text-[#D4AF37] tracking-widest text-sm uppercase">Our Guards</span>
            </div>

            <h2 className="font-futuristic text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              PROFESSIONAL <span className="gold-text-gradient">SECURITY GUARDS</span>
            </h2>

            <p className="font-tech text-gray-300 text-lg leading-relaxed">
              Our security personnel are the backbone of our service. Every guard is fully trained and vetted to ensure the highest standards of professionalism and reliability for your security needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {guardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-[#252525] rounded-xl border border-[#333] hover:border-[#D4AF37]/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-futuristic font-bold text-white text-sm mb-1">{feature.title}</h4>
                    <p className="font-tech text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="guard-image relative">
            <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-15 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30">
              <img src="/images/guard_hispanic.jpg" alt="Professional Security Guard" className="w-full h-auto object-cover" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-futuristic text-3xl font-bold gold-text-gradient">500+</p>
                    <p className="font-tech text-gray-400 text-sm">Professional Guards</p>
                  </div>
                  <div className="text-right">
                    <p className="font-futuristic text-3xl font-bold gold-text-gradient">100%</p>
                    <p className="font-tech text-gray-400 text-sm">Vetted Staff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuardSection;
