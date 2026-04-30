import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Guards', href: '#guards' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
              <Shield className="w-7 h-7 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-futuristic font-bold text-lg tracking-wider text-white">
                CRYPTINITE
              </span>
              <span className="font-futuristic text-xs tracking-[0.3em] gold-text-gradient">
                SECURITY
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-tech text-sm tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="gold-btn px-6 py-2.5 rounded-full font-tech font-semibold text-black text-sm tracking-wider"
            >
              GET QUOTE
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a]/98 backdrop-blur-md border-t border-[#D4AF37]/20">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-tech text-lg text-gray-300 hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block gold-btn px-6 py-3 rounded-full font-tech font-semibold text-black text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GET QUOTE
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
