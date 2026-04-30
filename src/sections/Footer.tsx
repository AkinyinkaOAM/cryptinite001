import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Corporate Security', href: '#services' },
    { name: 'Residential Security', href: '#services' },
    { name: 'Event Security', href: '#services' },
    { name: 'CCTV Monitoring', href: '#services' },
    { name: 'Mobile Patrols', href: '#services' },
    { name: 'Key Holding', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Guards', href: '#guards' },
    { name: 'Coverage Areas', href: '#coverage' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-[#151515] border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                <Shield className="w-7 h-7 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-futuristic font-bold text-lg tracking-wider text-white">CRYPTINITE</span>
                <span className="font-futuristic text-xs tracking-[0.3em] gold-text-gradient">SECURITY</span>
              </div>
            </a>
            <p className="font-tech text-gray-400 mb-6 leading-relaxed">
              Professional security solutions across the UK. All guards are SIA licensed and vetted for your peace of mind.
            </p>
          </div>

          <div>
            <h4 className="font-futuristic font-bold text-white mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="font-tech text-gray-400 hover:text-[#D4AF37] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-futuristic font-bold text-white mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="font-tech text-gray-400 hover:text-[#D4AF37] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-futuristic font-bold text-white mb-6">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-tech text-white">0800 123 4567</p>
                  <p className="font-tech text-gray-500 text-sm">24/7 Emergency</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p className="font-tech text-white">info@cryptinite-security.co.uk</p>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p className="font-tech text-gray-400">123 Security House<br />London, EC1A 1BB</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-tech text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} CRYPTINITE SECURITY. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link, index) => (
                <a key={index} href={link.href} className="font-tech text-gray-500 hover:text-[#D4AF37] text-sm transition-colors">{link.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a5f3f]/10 border-t border-[#1a5f3f]/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-tech text-[#2d8f5f] text-sm text-center">
            ALL GUARDS ARE SIA LICENSED AND VETTED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
