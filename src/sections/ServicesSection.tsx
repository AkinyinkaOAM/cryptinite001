import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Building2, Users, Camera, Clock, MapPin, Home, Briefcase, Store, Factory, Hotel, GraduationCap, HardHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Building2, title: 'Corporate Security', description: 'Professional security for offices, corporate buildings, and business parks.' },
  { icon: Home, title: 'Residential Security', description: 'Protect your home and family with our residential security services and patrols.' },
  { icon: Briefcase, title: 'Event Security', description: 'Crowd management and security for events, concerts, and private functions.' },
  { icon: Camera, title: 'CCTV Monitoring', description: '24/7 surveillance and monitoring services with rapid response capabilities.' },
  { icon: Clock, title: 'Mobile Patrols', description: 'Regular patrols of your premises with detailed reporting and checks.' },
  { icon: MapPin, title: 'Key Holding', description: 'Secure key holding and alarm response services for peace of mind.' },
];

const industries = [
  { icon: Building2, name: 'Corporate', description: 'Offices & Business Parks' },
  { icon: Store, name: 'Retail', description: 'Shops & Shopping Centres' },
  { icon: Hotel, name: 'Hospitality', description: 'Hotels & Restaurants' },
  { icon: Factory, name: 'Industrial', description: 'Factories & Warehouses' },
  { icon: HardHat, name: 'Construction', description: 'Building Sites & Developments' },
  { icon: GraduationCap, name: 'Education', description: 'Schools & Universities' },
  { icon: Home, name: 'Residential', description: 'Apartments & Estates' },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
      gsap.fromTo('.industry-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: '.industries-grid', start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 bg-[#1a1a1a]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-tech text-[#D4AF37] tracking-widest text-sm uppercase">Our Services</span>
          </div>
          <h2 className="font-futuristic text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            COMPREHENSIVE <span className="gold-text-gradient">SECURITY SOLUTIONS</span>
          </h2>
          <p className="font-tech text-gray-400 text-lg max-w-2xl mx-auto">
            From corporate buildings to residential properties, we provide tailored security services across the United Kingdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <div key={index} className="service-card group relative bg-[#252525] rounded-2xl p-8 border border-[#333] hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-futuristic text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="font-tech text-gray-400 leading-relaxed">{service.description}</p>
              <div className="absolute inset-0 rounded-2xl gold-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          
          <div className="text-center mb-12 pt-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-tech text-[#D4AF37] tracking-widest text-sm uppercase">Industries We Serve</span>
            </div>
            <h2 className="font-futuristic text-3xl sm:text-4xl font-bold text-white mb-6">
              PROTECTING <span className="gold-text-gradient">ALL INDUSTRIES</span>
            </h2>
            <p className="font-tech text-gray-400 text-lg max-w-2xl mx-auto">
              We provide specialized security solutions tailored to the unique needs of each industry sector.
            </p>
          </div>

          <div className="industries-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card group bg-[#252525] rounded-xl p-6 border border-[#333] hover:border-[#D4AF37]/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto rounded-lg gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-6 h-6 text-black" />
                </div>
                <h4 className="font-futuristic font-bold text-white text-sm mb-1">{industry.name}</h4>
                <p className="font-tech text-gray-500 text-xs">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
