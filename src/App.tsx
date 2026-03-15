import { useState, useEffect } from 'react';
import { 
  Check, 
  X, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Lock,
  BookOpen,
  Smartphone,
  Search,
  Trophy,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Polished Phone Mockup Component with Back Glow
interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
  animated?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
}

function PhoneMockup({ 
  children, 
  className = '', 
  maxWidth = '280px', 
  animated = false,
  glowIntensity = 'medium'
}: PhoneMockupProps) {
  const glowOpacity = {
    low: '0.1',
    medium: '0.2',
    high: '0.3'
  };

  return (
    <div className={`relative ${className}`} style={{ maxWidth }}>
      {/* Back Glow Effect */}
      <div 
        className="absolute -inset-6 rounded-[3.5rem] blur-2xl -z-10 transition-opacity duration-500"
        style={{ 
          background: `radial-gradient(ellipse at center, rgba(34, 197, 94, ${glowOpacity[glowIntensity]}) 0%, transparent 70%)`,
        }}
      />
      {/* Secondary subtle glow */}
      <div 
        className="absolute -inset-12 rounded-[4rem] blur-3xl -z-20 opacity-50"
        style={{ 
          background: `radial-gradient(ellipse at center, rgba(16, 185, 129, ${parseFloat(glowOpacity[glowIntensity]) * 0.5}) 0%, transparent 60%)`,
        }}
      />
      {/* Phone Frame */}
      <div 
        className={`
          relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] 
          rounded-[2.5rem] p-2
          shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]
          ${animated ? 'animate-float' : ''}
        `}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1a1a] rounded-b-xl z-20" />
        {/* Screen */}
        <div className="relative bg-black rounded-[2rem] overflow-hidden">
          {children}
        </div>
        {/* Bottom Reflection */}
        <div className="absolute bottom-2 left-2 right-2 h-20 bg-gradient-to-t from-white/5 to-transparent rounded-b-[2rem] pointer-events-none" />
      </div>
    </div>
  );
}

// FAQ data — 5 questions
const faqs = [
  {
    question: "What exactly is MoarMoney?",
    answer: "A voice-first app for salespeople who manage their own client relationships. Talk after every client meeting. We turn your voice into structured deal cards — names, budgets, timelines, and all the details you'd otherwise forget."
  },
  {
    question: "Who is this for?",
    answer: "Self-employed B2C sales professionals in Singapore — property agents, insurance agents, IFAs, mortgage brokers. Anyone who owns their book of business and needs to remember client details across dozens of relationships."
  },
  {
    question: "How is this different from a notes app?",
    answer: "Notes apps don't structure anything. MoarMoney listens to your natural voice and extracts client names, budgets, timelines, and preferences automatically. Then it reminds you who needs attention every morning."
  },
  {
    question: "Where is my data stored?",
    answer: "Your data is securely encrypted and synced so you never lose it — even when you change phones. We never share your clients' information with anyone else, ever. Your book stays yours."
  },
  {
    question: "How much does it cost?",
    answer: "Free during beta. We'll announce pricing before the official launch — founding members will get special rates."
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/assets/logo_header.png" alt="MoarMoney" className="h-8 w-auto" style={{ height: '32px' }} />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('transformation')} className="text-[#94A3B8] hover:text-white transition-colors text-sm">How it works</button>
              <button onClick={() => scrollToSection('compound-action')} className="text-[#94A3B8] hover:text-white transition-colors text-sm">See it in action</button>
              <button onClick={() => scrollToSection('faq')} className="text-[#94A3B8] hover:text-white transition-colors text-sm">FAQ</button>
            </nav>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-[#22C55E] hover:bg-[#16A34A] text-[#0F172A] font-semibold px-4 md:px-6 py-2 text-sm"
            >
              Join the Beta
            </Button>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center pt-20 md:pt-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#1E293B]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full mb-6">
                <span className="text-[#22C55E] text-sm font-medium tracking-wide">Make moar. Leak less.</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">YOU</span> are leaking<br />
                <span className="text-white">deals.</span><br />
                <span className="text-[#94A3B8]">You just don't know what leaked.</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-xl mx-auto lg:mx-0">
                MoarMoney catches them for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('waitlist')}
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-[#0F172A] font-semibold px-8 py-6 text-lg glow-green"
                >
                  Join the Beta
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <button 
                  onClick={() => scrollToSection('transformation')}
                  className="text-[#94A3B8] hover:text-white transition-colors flex items-center justify-center gap-2 py-3"
                >
                  See how it works
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </button>
              </div>
              <p className="text-sm text-[#64748B] mt-8">
                Built for Singapore's B2C sales professionals — property agents, wealth planners, and more.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup maxWidth="320px" animated glowIntensity="high">
                <img 
                  src="/assets/moarmoney_hitlist_v1.pg.png" 
                  alt="MoarMoney Dashboard" 
                  className="w-full h-auto"
                />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOUND FAMILIAR? */}
      <section className="section-padding bg-[#1E293B]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Sound familiar?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#94A3B8]">The Old Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Scattered WhatsApp threads</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Notes app chaos</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">"I'll remember" (you won't)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Promising to call back... and forgetting</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Losing deals you don't even know you lost</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 border-[#22C55E]/30">
              <h3 className="text-xl font-semibold mb-6 text-[#22C55E]">With MoarMoney</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <span>One place for everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <span>Structured deal cards, automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <span>Every promise captured</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <span>Morning reminders: who needs attention today</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <span>Your network becomes searchable</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-lg md:text-xl mt-12 max-w-3xl mx-auto">
            The scariest part? You'll never know which deals you lost to forgetfulness.
            <span className="text-[#22C55E] font-semibold"> MoarMoney makes sure that number is zero.</span>
          </p>
        </div>
      </section>

      {/* SECTION 3: THE TRANSFORMATION — SCALED MOCKUP */}
      <section id="transformation" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Speak for 30 seconds. <span className="text-[#22C55E]">Never lose a detail again.</span>
            </h2>
            <p className="text-lg text-[#94A3B8]">Talk naturally. We handle the rest.</p>
          </div>

          {/* Onboarding Mockup — max-width 300px, margin 40px auto */}
          <div className="my-10">
            <PhoneMockup maxWidth="300px" glowIntensity="medium" className="mx-auto">
              <img 
                src="/assets/onboarding_mockup.png" 
                alt="MoarMoney Onboarding — Voice to Deal Cards" 
                className="w-full h-auto"
              />
            </PhoneMockup>
          </div>

          <div className="text-center">
            <p className="text-lg text-white">
              Your messy voice becomes a structured deal. <span className="font-semibold">Instantly.</span>
            </p>
            <p className="text-sm mt-2 text-[#64748B]">
              Names, budgets, timelines, preferences — all captured automatically.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WAKE UP KNOWING */}
      <section className="section-padding bg-[#1E293B]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Wake up knowing <span className="text-[#22C55E]">exactly who to call.</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Every morning, MoarMoney tells you who needs attention — and why.
            </p>
          </div>

          <div className="flex justify-center">
            <PhoneMockup maxWidth="360px" animated glowIntensity="high">
              <img 
                src="/assets/moarmoney_hitlist_v1.pg.png" 
                alt="MoarMoney Hit List" 
                className="w-full h-auto"
              />
            </PhoneMockup>
          </div>

          <p className="text-center text-lg mt-12">
            No more <span className="text-[#94A3B8]">"I should have called them last week."</span>
            <br />
            <span className="text-[#22C55E] font-semibold">Now you call them FIRST.</span>
          </p>
        </div>
      </section>

      {/* SECTION 5: COMPOUND TIMELINE — NEW DESIGN WITH NUMBERS */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The compound effect of <span className="text-[#22C55E]">capturing everything.</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="relative">
              <div className="hidden md:block absolute left-0 right-0 top-3 h-0.5 bg-gradient-to-r from-[#64748B] via-[#94A3B8] to-[#22C55E]" />
              <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64748B] via-[#94A3B8] to-[#22C55E]" />

              <div className="grid md:grid-cols-5 gap-8 md:gap-4">
                {/* 1W */}
                <div className="relative pl-16 md:pl-0 md:pt-8">
                  <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-6 h-6 bg-[#64748B] rounded-full border-4 border-[#0F172A]"></div>
                  <div className="md:text-center">
                    <p className="text-[#64748B] font-bold text-lg mb-1">1W</p>
                    <p className="text-white font-medium">12 clients</p>
                    <p className="text-[#94A3B8]">captured</p>
                  </div>
                </div>

                {/* 1M */}
                <div className="relative pl-16 md:pl-0 md:pt-8">
                  <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-6 h-6 bg-[#94A3B8] rounded-full border-4 border-[#0F172A]"></div>
                  <div className="md:text-center">
                    <p className="text-[#94A3B8] font-bold text-lg mb-1">1M</p>
                    <p className="text-white font-medium">48 clients</p>
                    <p className="text-[#94A3B8]">captured</p>
                  </div>
                </div>

                {/* 6M — GREEN HIGHLIGHT */}
                <div className="relative pl-16 md:pl-0 md:pt-8">
                  <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-6 h-6 bg-[#22C55E] rounded-full border-4 border-[#0F172A] ring-4 ring-[#22C55E]/30"></div>
                  <div className="md:text-center">
                    <p className="text-[#22C55E] font-bold text-lg mb-1">6M</p>
                    <p className="text-white font-medium">200 clients</p>
                    <p className="text-[#22C55E] font-semibold">$30K+ deals closed</p>
                  </div>
                </div>

                {/* 1Y */}
                <div className="relative pl-16 md:pl-0 md:pt-8">
                  <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-6 h-6 bg-[#22C55E] rounded-full border-4 border-[#0F172A]"></div>
                  <div className="md:text-center">
                    <p className="text-[#22C55E] font-bold text-lg mb-1">1Y</p>
                    <p className="text-white font-medium">600 clients</p>
                    <p className="text-[#94A3B8]">searchable</p>
                  </div>
                </div>

                {/* 3Y */}
                <div className="relative pl-16 md:pl-0 md:pt-8">
                  <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-6 h-6 bg-[#22C55E] rounded-full border-4 border-[#0F172A]"></div>
                  <div className="md:text-center">
                    <p className="text-[#22C55E] font-bold text-lg mb-1">3Y</p>
                    <p className="text-white font-medium">2,000+ clients</p>
                    <p className="text-[#94A3B8]">your career asset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 space-y-4">
            <p className="text-lg text-white">
              Every voice recording is a deposit. Your network compounds daily.
            </p>
            <p className="text-lg text-[#22C55E] font-semibold">
              Every voice recording you skip is a deal you might never recover.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPOUND IN ACTION — VERTICAL SCROLL STORY */}
      <section id="compound-action" className="section-padding bg-[#1E293B]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              See the compound effect <span className="text-[#22C55E]">in action.</span>
            </h2>
            <p className="text-lg text-[#94A3B8]">When a new launch drops, your network is already filtered.</p>
          </div>

          {/* STEP 1: THE OPPORTUNITY */}
          <div className="mb-8">
            <div className="bg-[#1E293B] rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-[#F97316]" />
                <span className="text-sm font-bold text-[#F97316] uppercase tracking-wider">NEW LAUNCH</span>
              </div>
              <h4 className="font-bold text-2xl mb-1">Pinery Residences</h4>
              <p className="text-lg text-[#94A3B8] mb-4">@ Tampines West</p>
              <div className="space-y-1 text-lg">
                <p className="text-white">3BR from $1.9M</p>
                <p className="text-[#64748B]">TOP 2030</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[#F97316]">📅 Booking opens in 14 days</p>
              </div>
            </div>
            <p className="text-white text-center mt-4 text-lg">
              Other agents scramble through old WhatsApps. You open MoarMoney.
            </p>
          </div>

          {/* CONNECTOR */}
          <div className="flex justify-center py-4">
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#64748B] to-[#94A3B8]"></div>
          </div>

          {/* STEP 2: THE SEARCH */}
          <div className="mb-8">
            <div className="flex justify-center">
              <PhoneMockup maxWidth="280px" glowIntensity="medium">
                <img 
                  src="/assets/property_frame2.png" 
                  alt="Search your network" 
                  className="w-full h-auto"
                />
              </PhoneMockup>
            </div>
            <p className="text-white text-center mt-6 text-lg">
              MOP 2026-2027. Budget $1.5-2.5M. East / Tampines. Three taps. Done.
            </p>
          </div>

          {/* CONNECTOR */}
          <div className="flex justify-center py-4">
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#94A3B8] to-[#22C55E]"></div>
          </div>

          {/* STEP 3: THE PROOF */}
          <div className="mb-8">
            <div className="flex justify-center">
              <PhoneMockup maxWidth="280px" glowIntensity="medium">
                <img 
                  src="/assets/property_frame3.png" 
                  alt="6 matches surface" 
                  className="w-full h-auto"
                />
              </PhoneMockup>
            </div>
            <p className="text-white text-center mt-6 text-lg">
              6 clients surface instantly. All of them match. All of them ready.
            </p>
          </div>

          {/* CONNECTOR */}
          <div className="flex justify-center py-4">
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#22C55E] to-[#22C55E]"></div>
          </div>

          {/* STEP 4: THE WIN */}
          <div className="mb-8">
            <div className="bg-[#1E293B] rounded-xl p-8 border border-[#22C55E]/30 text-center">
              <div className="w-16 h-16 bg-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h4 className="font-bold text-3xl mb-2">YOU CALLED THEM</h4>
              <p className="font-bold text-4xl text-white mb-6">FIRST.</p>
              <div className="space-y-2 mb-6">
                <p className="text-lg text-[#94A3B8]">Before they saw the ad.</p>
                <p className="text-lg text-[#94A3B8]">Before any other agent reached out.</p>
              </div>
              <p className="text-[#22C55E] font-bold text-xl">THAT'S the compound effect.</p>
            </div>
            <p className="text-white text-center mt-4 text-lg">
              First to call. First to close.
            </p>
          </div>

          {/* BOTTOM TEXT */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-xl text-white">
              This is what 6 months of voice recordings becomes.
            </p>
            <p className="text-sm text-[#64748B]">
              Works the same for wealth planning — retirement clients, insurance renewals, investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: SEARCH POWER */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your calendar tracks when.
            <br />
            <span className="text-[#22C55E]">MoarMoney tracks everything else.</span>
          </h2>

          <div className="max-w-xl mx-auto mb-8">
            <div className="glass-card rounded-xl p-4 flex items-center gap-3">
              <Search className="w-5 h-5 text-[#64748B]" />
              <span className="text-[#64748B]">Search your network...</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['Budget above $2M', 'MOP ending 2026', 'Looking for East side', 'Retirement goal', 'Family with kids', 'Moderate risk'].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-[#1E293B] border border-white/10 rounded-full text-sm text-[#94A3B8]">
                "{tag}"
              </span>
            ))}
          </div>

          <p className="text-lg mt-12 text-[#94A3B8]">
            Every conversation becomes searchable. Every client becomes findable.
            <br />
            <span className="text-white">When opportunity knocks, you'll know exactly who's ready.</span>
          </p>
        </div>
      </section>

      {/* SECTION 8: YOUR DEALS. YOUR DATA. YOUR CAREER. */}
      <section className="section-padding bg-[#1E293B]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Your deals. Your data. <span className="text-[#22C55E]">Your career.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#22C55E]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Your data stays yours</h3>
              <p className="text-[#94A3B8]">Stored on your device. Not uploaded to any server. Not shared with your agency. Not sold to anyone. Ever.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#22C55E]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Build your career asset</h3>
              <p className="text-[#94A3B8]">Your client relationships are yours. Your history with them is yours. Your book goes wherever you go.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#22C55E]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Works offline</h3>
              <p className="text-[#94A3B8]">Record voice notes anywhere — even with no signal. Sync when you're back online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section id="waitlist" className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Close Moar. <span className="text-[#22C55E]">Leak Less.</span>
          </h2>
          <p className="text-xl text-[#94A3B8] mb-8">
            Join the founding members and be first to try MoarMoney.
          </p>

          {isSubmitted ? (
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto border-[#22C55E]/30">
              <div className="w-16 h-16 bg-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-[#94A3B8]">We'll be in touch soon with your beta access.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-[#1E293B] border-white/10 text-white placeholder:text-[#64748B] h-14"
              />
              <Button type="submit" className="bg-[#22C55E] hover:bg-[#16A34A] text-[#0F172A] font-semibold px-8 h-14 text-lg glow-green">
                Join the Beta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          )}

          <p className="text-sm text-[#64748B]">Free during beta. No credit card required.</p>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section id="faq" className="section-padding bg-[#1E293B]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Questions? <span className="text-[#22C55E]">Answers.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-[#94A3B8] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FOOTER */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/assets/logo_header.png" alt="MoarMoney" className="h-6 w-auto" />
              </a>
              <p className="text-sm text-[#64748B] mt-2">Make moar. Leak less.</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="/#/privacy" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Privacy Policy</a>
              <a href="/#/terms" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:support@moarmoney.app" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/5">
            <p className="text-sm text-[#64748B]">© 2026 MoarMoney. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
