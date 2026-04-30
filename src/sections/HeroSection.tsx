import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CheckCircle, Phone } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' });
      gsap.fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' });
      gsap.fromTo('.hero-badges', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' });
      gsap.fromTo('.hero-cta', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power2.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power2.out' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="hero-title space-y-2">
              <h1 className="font-futuristic text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">CRYPTINITE</h1>
              <h1 className="font-futuristic text-4xl sm:text-5xl lg:text-6xl font-bold gold-text-gradient leading-tight">SECURITY</h1>
            </div>

            <p className="hero-subtitle font-tech text-xl text-gray-300 max-w-xl leading-relaxed">
              Professional security solutions across the UK. All our security guards are fully <span className="text-[#D4AF37] font-semibold">SIA licensed and vetted</span> for your complete peace of mind.
            </p>

            <div className="hero-badges grid sm:grid-cols-2 gap-4">
              {['24/7 Security Coverage', 'Professional Guards', 'Rapid Response', 'UK Wide Service'].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="font-tech text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="gold-btn px-8 py-4 rounded-full font-tech font-bold text-black text-center tracking-wider flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>GET FREE QUOTE</span>
              </a>
              <a href="#services" className="px-8 py-4 rounded-full font-tech font-semibold text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all text-center tracking-wider">OUR SERVICES</a>
            </div>
          </div>

          <div className="relative">
            <div className="hero-image relative">
              <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-20 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30">
                <img src="/images/hero_guards_new.jpg" alt="Professional Security Guards" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
    </section>
  );
};

export default HeroSection;
