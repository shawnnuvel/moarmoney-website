import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mic, 
  Check, 
  Phone, 
  Calendar, 
  DollarSign, 
  MessageSquare,
  ArrowRight,
  Sparkles,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Is my client data secure?",
    answer: "Yes. Your client information is never shared with other MoarMoney users, never sold to third parties, and never used for advertising. Voice recordings are processed to extract deal information, then immediately deleted from our servers — we don't store your audio. Your data is encrypted and synced securely across your devices."
  },
  {
    question: "Does it work offline?",
    answer: "Yes. Record voice notes without an internet connection. They'll sync automatically when you're back online, so you never lose your work."
  },
  {
    question: "Which languages does it understand?",
    answer: "English with full support for Singapore accents, Chinese names, and local locations like Ang Mo Kio, Bishan, Clementi, Orchard, and Jurong. Our AI is trained to understand how property agents actually speak."
  },
  {
    question: "How is this different from my agency's CRM?",
    answer: "MoarMoney is personal and portable. Your data is tied to your account, not your agency — so if you change agencies, your pipeline stays with you. Plus, voice capture is 10x faster than typing into forms."
  },
  {
    question: "What happens if I lose my phone?",
    answer: "Your data is safe. Sign into your new phone with your account, and your entire pipeline is there. We keep your data for 90 days after account deletion, so you can always recover it."
  },
  {
    question: "Is the AI always accurate?",
    answer: "Our AI is highly accurate for Singapore property contexts, but you should always verify extracted information before taking action. You can edit any deal details directly in the app."
  },
  {
    question: "When will it be available?",
    answer: "We're in private beta now. Join the waitlist to get early access."
  }
];

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  
  const mainRef = useRef<HTMLDivElement>(null);
  const scroll1Ref = useRef<HTMLDivElement>(null);
  const scroll2Ref = useRef<HTMLDivElement>(null);
  const scroll3Ref = useRef<HTMLDivElement>(null);
  const scroll5Ref = useRef<HTMLDivElement>(null);
  const scroll6Ref = useRef<HTMLDivElement>(null);
  const scroll7Ref = useRef<HTMLDivElement>(null);
  const scroll8Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll 1 - The Hook
    const hookHeadline = scroll1Ref.current?.querySelector('.hook-headline');
    const hookSubtext = scroll1Ref.current?.querySelector('.hook-subtext');
    if (hookHeadline) {
      gsap.fromTo(hookHeadline,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll1Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
    if (hookSubtext) {
      gsap.fromTo(hookSubtext,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll1Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Scroll 2 - The Shift
    const shiftHeadline = scroll2Ref.current?.querySelector('.shift-headline');
    const shiftSubtext = scroll2Ref.current?.querySelector('.shift-subtext');
    const phoneContainer = scroll2Ref.current?.querySelector('.phone-container');
    if (shiftHeadline) {
      gsap.fromTo(shiftHeadline,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll2Ref.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
    if (shiftSubtext) {
      gsap.fromTo(shiftSubtext,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll2Ref.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
    if (phoneContainer) {
      gsap.fromTo(phoneContainer,
        { opacity: 0, x: 100 },
        {
          opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll2Ref.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Scroll 3 - The Magic
    const magicText = scroll3Ref.current?.querySelector('.magic-text');
    const voiceExample = scroll3Ref.current?.querySelector('.voice-example');
    if (magicText) {
      gsap.fromTo(magicText,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll3Ref.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
    if (voiceExample) {
      gsap.fromTo(voiceExample,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll3Ref.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Scroll 5 - The Transformation
    const transformText = scroll5Ref.current?.querySelector('.transform-text');
    if (transformText) {
      gsap.fromTo(transformText,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll5Ref.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Scroll 6 - The Outcome
    const outcomeText = scroll6Ref.current?.querySelector('.outcome-text');
    if (outcomeText) {
      gsap.fromTo(outcomeText,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll6Ref.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Scroll 7 - The Money
    const moneyHeadline = scroll7Ref.current?.querySelector('.money-headline');
    if (moneyHeadline) {
      gsap.fromTo(moneyHeadline,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll7Ref.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Scroll 8 - The CTA
    const ctaContent = scroll8Ref.current?.querySelector('.cta-content');
    if (ctaContent) {
      gsap.fromTo(ctaContent,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: scroll8Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Gradient orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="gradient-orb gradient-orb-green w-[1000px] h-[1000px] top-[5%] left-[20%] opacity-50 animate-pulse-slow" />
        <div className="gradient-orb gradient-orb-green-subtle w-[700px] h-[700px] -top-[15%] -right-[15%] opacity-30 animate-pulse-slower" />
        <div className="gradient-orb gradient-orb-green-subtle w-[600px] h-[600px] bottom-[15%] -left-[15%] opacity-20 animate-pulse-slow" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'nav-blur' : 'bg-transparent'}`}>
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="/" className="text-xl lg:text-2xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
              Moar<span className="text-emerald-500">Money</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('faq')} className="text-sm text-[#94A3B8] hover:text-white transition-colors relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
            <Button onClick={() => setIsBetaModalOpen(true)} className="btn-primary text-[#030712] font-semibold px-5 h-10 text-sm">
              Join the Beta
            </Button>
          </div>
        </div>
      </nav>

      {/* Beta Modal */}
      {isBetaModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setIsBetaModalOpen(false)}>
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-white mb-2">Join the Beta</h3>
            <p className="text-[#94A3B8] mb-6">Limited spots available. Be the first to experience MoarMoney.</p>
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                <p className="text-white font-semibold">You're on the list!</p>
                <p className="text-[#94A3B8] text-sm">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-[#64748B] focus:border-emerald-500 h-12"
                />
                <Button type="submit" className="w-full btn-primary text-[#030712] font-semibold h-12">
                  Join the Beta
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

      <main ref={mainRef} className="relative z-10">
        {/* ============================================
            SCROLL 1 — THE HOOK
            ============================================ */}
        <section ref={scroll1Ref} className="scroll-section">
          {/* Chaos background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <MessageSquare className="chaos-element absolute top-[20%] left-[10%] w-24 h-24 text-white" style={{ animationDelay: '0s' }} />
            <Phone className="chaos-element absolute top-[60%] right-[15%] w-20 h-20 text-white" style={{ animationDelay: '2s' }} />
            <Calendar className="chaos-element absolute bottom-[20%] left-[20%] w-16 h-16 text-white" style={{ animationDelay: '4s' }} />
            <div className="chaos-element absolute top-[40%] right-[25%] text-6xl font-bold text-white" style={{ animationDelay: '1s' }}>?</div>
            <div className="chaos-element absolute bottom-[30%] right-[10%] text-5xl font-bold text-white" style={{ animationDelay: '3s' }}>...</div>
          </div>
          
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="hook-headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-6">
                You don't lose deals<br />
                <span className="text-[#64748B]">because you lack skill.</span>
              </h1>
              <p className="hook-subtext text-xl lg:text-2xl text-[#94A3B8]">
                You lose them because you have more leads than your memory can handle.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            SCROLL 2 — THE SHIFT
            ============================================ */}
        <section ref={scroll2Ref} className="scroll-section">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <h2 className="shift-headline text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                    What if you never forgot<br />
                    <span className="text-gradient-green">another client?</span>
                  </h2>
                  <p className="shift-subtext text-lg lg:text-xl text-[#94A3B8] leading-relaxed">
                    Introducing MoarMoney — <span className="text-white font-semibold">your personal closing engine.</span>
                  </p>
                </div>
                <div className="phone-container flex justify-center lg:justify-end">
                  <div className="relative hero-phone-float">
                    <div className="phone-glow" />
                    <div className="iphone-mockup w-[260px] sm:w-[300px] lg:w-[320px]">
                      <div className="iphone-mockup-inner">
                        <div className="iphone-notch" />
                        <img src="/assets/phone-home.png" alt="MoarMoney App" className="w-full h-auto" />
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 rounded-full -z-10" 
                      style={{ background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, transparent 70%)', filter: 'blur(8px)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SCROLL 3 — THE MAGIC (Voice)
            ============================================ */}
        <section ref={scroll3Ref} className="scroll-section">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="magic-text mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 mb-6 animate-pulse">
                  <Mic className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
                  Just talk. <span className="text-gradient-green">Naturally.</span>
                </h2>
                <p className="text-lg text-[#94A3B8]">
                  Brain dump after every interaction. 30 seconds. That's all.
                </p>
              </div>
              
              <div className="voice-example glass-card rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Mic className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-lg lg:text-xl leading-relaxed italic">
                      "Met Mrs Tan today, looking for 4-room HDB in Bishan, budget 650K, call her next Tuesday."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SCROLL 4 — OLD WAY VS MOARMONEY WAY
            ============================================ */}
        <section className="scroll-section">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Old Way - Left side (chaos, scattered fragments) */}
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#64748B] mb-6">
                    THE OLD WAY
                  </p>
                  
                  {/* Scattered fragments representing chaos */}
                  <div className="relative h-[280px]">
                    {/* WhatsApp-style bubble */}
                    <div className="absolute top-0 left-0 bg-[#25D366]/20 border border-[#25D366]/30 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[180px]">
                      <p className="text-[#94A3B8] text-sm">"Call Mr Tan"</p>
                    </div>
                    
                    {/* Notes-style snippet */}
                    <div className="absolute top-[60px] right-0 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3 max-w-[200px] transform rotate-2">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="w-4 h-4 text-amber-500/60 mt-0.5" />
                        <p className="text-[#94A3B8] text-sm">Clementi guy - 850K?</p>
                      </div>
                    </div>
                    
                    {/* Calendar entry */}
                    <div className="absolute top-[130px] left-4 bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-3 max-w-[160px] transform -rotate-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500/60" />
                        <p className="text-[#94A3B8] text-sm">Viewing Sat</p>
                      </div>
                    </div>
                    
                    {/* Thought bubble / brain icon */}
                    <div className="absolute bottom-[20px] right-8 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center">
                          <span className="text-purple-400 text-xs">?</span>
                        </div>
                        <p className="text-[#64748B] text-sm italic">MOP ending...?</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#64748B] text-sm mt-4">
                    Scattered. Incomplete. Forgotten.
                  </p>
                </div>

                {/* MoarMoney Way - Right side (organized, complete) */}
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-500 mb-6">
                    THE MOARMONEY WAY
                  </p>
                  <div className="glass-card rounded-2xl p-6 lg:p-8 border-emerald-500/30 bg-emerald-500/[0.03]">
                    <p className="text-white text-lg lg:text-xl font-medium mb-2">
                      Mr Tan · Clementi HDB Seller
                    </p>
                    <p className="text-[#94A3B8] mb-4">
                      Asking $850K · MOP ends June
                    </p>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-emerald-400">Confirm if Intent to Sell registered</span>
                    </div>
                  </div>
                  <p className="text-emerald-400 text-sm mt-4">
                    Full context. Ready to close.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SCROLL 5 — THE TRANSFORMATION
            ============================================ */}
        <section ref={scroll5Ref} className="scroll-section">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <div className="transform-text">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                      AI extracts <span className="text-gradient-green">every detail.</span><br />
                      <span className="text-[#64748B]">Instantly.</span>
                    </h2>
                  </div>
                  
                  {/* Deal card building animation */}
                  <div className="glass-card rounded-2xl p-6 mt-8">
                    <div className="space-y-4">
                      <div className="deal-card-line flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-500 check-appear" style={{ animationDelay: '0s' }} />
                        </div>
                        <span className="text-white"><span className="text-[#64748B]">Name:</span> Mrs Tan</span>
                      </div>
                      <div className="deal-card-line flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-500 check-appear" style={{ animationDelay: '0.3s' }} />
                        </div>
                        <span className="text-white"><span className="text-[#64748B]">Property:</span> HDB, Bishan</span>
                      </div>
                      <div className="deal-card-line flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-500 check-appear" style={{ animationDelay: '0.6s' }} />
                        </div>
                        <span className="text-white"><span className="text-[#64748B]">Budget:</span> $650,000</span>
                      </div>
                      <div className="deal-card-line flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-500 check-appear" style={{ animationDelay: '0.9s' }} />
                        </div>
                        <span className="text-white"><span className="text-[#64748B]">Follow-up:</span> Tuesday</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative">
                    <div className="phone-glow" />
                    <div className="iphone-mockup w-[260px] sm:w-[300px] lg:w-[320px]">
                      <div className="iphone-mockup-inner">
                        <div className="iphone-notch" />
                        <img src="/assets/phone-deal.png" alt="Deal Details" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SCROLL 6 — THE OUTCOME
            ============================================ */}
        <section ref={scroll6Ref} className="scroll-section">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="phone-glow" />
                    <div className="iphone-mockup w-[260px] sm:w-[300px] lg:w-[320px]">
                      <div className="iphone-mockup-inner">
                        <div className="iphone-notch" />
                        <img src="/assets/phone-home.png" alt="Your Focus Today" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="outcome-text">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                    Wake up knowing<br />
                    <span className="text-gradient-green">exactly who to call.</span>
                  </h2>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-[#CBD5E1] text-lg">Auto-captured from voice</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-[#CBD5E1] text-lg">Sorted by urgency</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-[#CBD5E1] text-lg">One-tap call</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SCROLL 7 — THE MONEY
            ============================================ */}
        <section ref={scroll7Ref} className="scroll-section">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="money-headline">
                <div className="inline-flex items-center gap-2 mb-8">
                  <DollarSign className="w-12 h-12 text-emerald-500" />
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4">
                  Close <span className="text-gradient-green">moar.</span>
                </h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#64748B] leading-[1.1] mb-8">
                  Leak <span className="text-white">less.</span>
                </h2>
                <p className="text-xl text-[#94A3B8] mb-4">
                  Track every deal. See your commissions grow.
                </p>
                <p className="text-lg text-emerald-400 font-medium">
                  We track. We chase. You close.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SCROLL 8 — THE CTA
            ============================================ */}
        <section ref={scroll8Ref} id="cta" className="scroll-section-short">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-2xl mx-auto text-center cta-content">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8 badge-pulse">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-500">Limited beta spots</span>
              </div>

              {/* Label */}
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-500 mb-4">
                YOUR PERSONAL CLOSING ENGINE
              </p>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
                Ready to close <span className="text-gradient-green">more deals?</span>
              </h2>

              {/* Subheadline */}
              <p className="text-lg text-[#94A3B8] mb-10">
                Speak for 30 seconds after any client interaction. AI captures every detail, schedules your follow-ups, and tracks your commissions—automatically.
              </p>

              {/* Form */}
              {isSubmitted ? (
                <div className="glass-card rounded-2xl p-8 max-w-md mx-auto border-emerald-500/30">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Check className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                  <p className="text-[#94A3B8]">We'll be in touch soon with your beta access.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-[#64748B] focus:border-emerald-500 h-12"
                  />
                  <Button type="submit" className="btn-primary text-[#030712] font-semibold px-6 h-12">
                    Join the Beta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[#64748B]">
                <span className="flex items-center gap-2">
                  Built for Singapore property agents <span className="text-lg">🇸🇬</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span>No spam. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ SECTION
            ============================================ */}
        <section id="faq" className="py-24 lg:py-32">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-4">
                Questions?
              </h2>
              <p className="text-lg text-[#64748B] text-center mb-12">
                Everything you need to know
              </p>

              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="glass-card rounded-xl px-6 border-none overflow-hidden transition-all duration-300 data-[state=open]:border-emerald-500/30 data-[state=open]:bg-white/[0.04]"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-emerald-400 hover:no-underline py-5 text-base lg:text-lg font-medium transition-colors duration-200 [&[data-state=open]>svg]:rotate-180">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#94A3B8] pb-5 leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ============================================
            FOOTER
            ============================================ */}
        <footer className="py-12 lg:py-16 border-t border-white/5">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
                <div>
                  <a href="/" className="text-2xl font-bold text-white tracking-tight mb-2 block hover:opacity-80 transition-opacity">
                    Moar<span className="text-emerald-500">Money</span>
                  </a>
                  <p className="text-sm text-[#64748B]">
                    Your personal closing engine for property agents.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 lg:gap-8">
                  <a href="/" className="text-sm text-[#64748B] hover:text-white transition-colors duration-200">
                    Home
                  </a>
                  <a href="/#/privacy" className="text-sm text-[#64748B] hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="/#/terms" className="text-sm text-[#64748B] hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="mailto:support@moarmoney.app" className="text-sm text-[#64748B] hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
                <p className="text-xs text-[#475569]">
                  © 2026 MoarMoney. Built in Singapore 🇸🇬
                </p>

                <div className="flex items-center gap-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/10 transition-all duration-200" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/10 transition-all duration-200" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/10 transition-all duration-200" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
