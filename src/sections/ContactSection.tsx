import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '0734 226 4901', subtext: '24/7 Emergency Line' },
  { icon: Mail, label: 'Email', value: 'info@cryptinite-security.co.uk', subtext: 'General Inquiries' },
  { icon: MapPin, label: 'Address', value: '150 Burham Avenue, Llanrumney', subtext: 'CF3 5QT,  Cardiff Wales' },
  { icon: Clock, label: 'Hours', value: '24 Hours / 7 Days', subtext: 'Always Available' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`, backgroundSize: '50px 50px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Phone className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-tech text-[#D4AF37] tracking-widest text-sm uppercase">Contact Us</span>
          </div>
          <h2 className="font-futuristic text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            GET YOUR <span className="gold-text-gradient">FREE QUOTE</span>
          </h2>
          <p className="font-tech text-gray-400 text-lg max-w-2xl mx-auto">
            Contact us today for a free security assessment and quote. Our team is ready to help protect your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-[#252525] rounded-xl border border-[#333] hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-tech text-[#D4AF37] text-sm mb-1">{info.label}</p>
                  <p className="font-futuristic font-bold text-white">{info.value}</p>
                  <p className="font-tech text-gray-500 text-sm">{info.subtext}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#252525] rounded-2xl p-8 border border-[#333]">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto rounded-full gold-gradient flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="font-futuristic text-2xl font-bold text-white mb-2">MESSAGE SENT!</h3>
                  <p className="font-tech text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block font-tech text-sm text-gray-400 mb-2">Your Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white font-tech focus:border-[#D4AF37] focus:outline-none transition-colors" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block font-tech text-sm text-gray-400 mb-2">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white font-tech focus:border-[#D4AF37] focus:outline-none transition-colors" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block font-tech text-sm text-gray-400 mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white font-tech focus:border-[#D4AF37] focus:outline-none transition-colors" placeholder="0800 123 4567" />
                    </div>
                    <div>
                      <label className="block font-tech text-sm text-gray-400 mb-2">Service Required</label>
                      <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white font-tech focus:border-[#D4AF37] focus:outline-none transition-colors">
                        <option value="">Select a service</option>
                        <option value="corporate">Corporate Security</option>
                        <option value="residential">Residential Security</option>
                        <option value="event">Event Security</option>
                        <option value="cctv">CCTV Monitoring</option>
                        <option value="patrol">Mobile Patrols</option>
                        <option value="keyholding">Key Holding</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block font-tech text-sm text-gray-400 mb-2">Your Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white font-tech focus:border-[#D4AF37] focus:outline-none transition-colors resize-none" placeholder="Tell us about your security needs..." />
                  </div>

                  <button type="submit" className="w-full gold-btn px-8 py-4 rounded-lg font-tech font-bold text-black tracking-wider flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all">
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
