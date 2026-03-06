import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBetaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsBetaModalOpen(false);
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'nav-blur' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-1 group">
              <span className="text-xl lg:text-2xl font-bold text-white tracking-tight transition-all duration-300 group-hover:opacity-80">
                Moar<span className="text-emerald-500">Money</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 relative group"
              >
                How it works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 relative group"
              >
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setIsBetaModalOpen(true)}
                className="btn-primary text-[#030712] font-semibold px-5 h-10"
              >
                Join the Beta
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#030712]/98 backdrop-blur-xl border-t border-white/5">
            <div className="px-6 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-[#94A3B8] hover:text-white py-2 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-[#94A3B8] hover:text-white py-2 transition-colors"
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-[#94A3B8] hover:text-white py-2 transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => {
                  setIsBetaModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full btn-primary text-[#030712] font-semibold mt-2"
              >
                Join the Beta
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Beta Modal */}
      <Dialog open={isBetaModalOpen} onOpenChange={setIsBetaModalOpen}>
        <DialogContent className="bg-[#0F172A] border border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Join the Beta
            </DialogTitle>
            <DialogDescription className="text-[#94A3B8]">
              Limited spots available. Be the first to experience MoarMoney.
            </DialogDescription>
          </DialogHeader>
          
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
              <p className="text-[#94A3B8]">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleBetaSubmit} className="space-y-4 mt-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-[#64748B] focus:border-emerald-500 focus:ring-emerald-500/20 input-glow transition-all duration-300"
                />
              </div>
              <Button 
                type="submit"
                className="w-full btn-primary text-[#030712] font-semibold"
              >
                Join the Beta
              </Button>
              <p className="text-xs text-[#64748B] text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
