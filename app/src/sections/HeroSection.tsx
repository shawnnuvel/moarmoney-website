import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Mic, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLSpanElement>(null);
  const headline2Ref = useRef<HTMLSpanElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cascading headline reveal animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(headline1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(headline2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(subheadlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(badgeRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Label */}
              <div ref={labelRef} className="mb-6 opacity-0">
                <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-emerald-500">
                  Voice-First CRM
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                <span ref={headline1Ref} className="block text-white opacity-0">
                  Make Moar.
                </span>
                <span ref={headline2Ref} className="block text-gradient-green opacity-0">
                  Leak Less.
                </span>
              </h1>

              {/* Subheadline */}
              <p ref={subheadlineRef} className="text-lg lg:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-lg opacity-0">
                Record a voice note after every meeting. AI turns it into a follow-up plan—so no deal slips through the cracks.
              </p>

              {/* CTAs */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0">
                <Button 
                  size="lg"
                  className="btn-primary text-[#030712] font-semibold px-8 h-12 text-base"
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Join the Beta
                </Button>
                <Button 
                  variant="ghost"
                  size="lg"
                  onClick={scrollToFeatures}
                  className="text-[#94A3B8] hover:text-white hover:bg-white/5 h-12 text-base group"
                >
                  See how it works
                  <ChevronDown className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-y-1" />
                </Button>
              </div>

              {/* Trust badge */}
              <div ref={badgeRef} className="flex items-center gap-2 text-sm text-[#64748B] opacity-0">
                <span>Built for Singapore property agents</span>
                <span className="text-lg">🇸🇬</span>
              </div>
            </div>

            {/* Right Content - Phone Mockup with floating animation */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative hero-phone-float">
                {/* Pulsing glow behind phone */}
                <div className="phone-glow" />
                
                {/* Secondary glow layer */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full -z-10 animate-pulse-slow"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.15) 0%, transparent 60%)'
                  }}
                />
                
                {/* iPhone Mockup */}
                <div className="iphone-mockup w-[280px] sm:w-[320px] lg:w-[340px]">
                  <div className="iphone-mockup-inner">
                    <div className="iphone-notch" />
                    <img 
                      src="/assets/phone-home.png" 
                      alt="MoarMoney App - Home Screen"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Reflection/shadow beneath phone */}
                <div 
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 rounded-full -z-10"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
                    filter: 'blur(8px)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
