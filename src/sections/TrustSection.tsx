import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, CheckCircle, Building, Users, Clock, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '500+', label: 'Professional Guards', icon: Users },
  { value: '1000+', label: 'Clients Served', icon: Building },
  { value: '100%', label: 'Vetted Staff', icon: CheckCircle },
];

const trustBadges = [
  { icon: Shield, title: 'Fully Insured', description: 'Comprehensive public liability insurance' },
  { icon: CheckCircle, title: 'Vetted Staff', description: 'Rigorous background checks on all personnel' },
  { icon: Star, title: '5-Star Rated', description: 'Consistently rated excellent by clients' },
];

const TrustSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.trust-stat', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.trust-stats', start: 'top 80%' } });
      gsap.fromTo('.trust-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.trust-badges', start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`, backgroundSize: '50px 50px' }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-tech text-[#D4AF37] tracking-widest text-sm uppercase">Why Choose Us</span>
          </div>
          <h2 className="font-futuristic text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            TRUSTED BY <span className="gold-text-gradient">UK BUSINESSES</span>
          </h2>
          <p className="font-tech text-gray-400 text-lg max-w-2xl mx-auto">
            With over 15 years of experience, CRYPTINITE SECURITY has built a reputation for excellence in the UK security industry.
          </p>
        </div>

        <div className="trust-stats grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="trust-stat text-center p-6 bg-[#252525] rounded-2xl border border-[#333] hover:border-[#D4AF37]/30 transition-all duration-300 group">
              <div className="w-14 h-14 mx-auto rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-black" />
              </div>
              <p className="font-futuristic text-3xl lg:text-4xl font-bold gold-text-gradient mb-2">{stat.value}</p>
              <p className="font-tech text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="trust-badges grid md:grid-cols-3 gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="trust-badge flex items-start space-x-4 p-6 bg-[#252525] rounded-2xl border border-[#333] hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-futuristic font-bold text-white mb-2">{badge.title}</h4>
                <p className="font-tech text-gray-400 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
