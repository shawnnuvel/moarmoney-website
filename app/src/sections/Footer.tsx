import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 lg:py-16 border-t border-white/5">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
            {/* Logo and tagline */}
            <div>
              <a href="/" className="text-2xl font-bold text-white tracking-tight mb-2 block hover:opacity-80 transition-opacity">
                Moar<span className="text-emerald-500">Money</span>
              </a>
              <p className="text-sm text-[#64748B]">
                The voice-first CRM for property agents.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 lg:gap-8">
              <a 
                href="/" 
                className="text-sm text-[#64748B] hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="/privacy" 
                className="text-sm text-[#64748B] hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-sm text-[#64748B] hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="mailto:support@moarmoney.app" 
                className="text-sm text-[#64748B] hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
            <p className="text-xs text-[#475569]">
              © 2026 MoarMoney. Built in Singapore 🇸🇬
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
