import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
  id: string;
  headline: string;
  description: string;
  bullets: string[];
  cta: string;
  phoneImage: string;
  zIndex: number;
  isLast?: boolean;
}

export default function FeatureSection({ 
  id, 
  headline, 
  description, 
  bullets, 
  cta, 
  phoneImage, 
  zIndex,
  isLast = false
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(phoneRef.current,
        { x: '-50vw', rotation: 10, opacity: 0 },
        { x: 0, rotation: -2, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(cardRef.current,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(headlineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.10
      );

      scrollTl.fromTo(contentRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.12
      );

      scrollTl.fromTo(underlineRef.current,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none' },
        0.18
      );

      // SETTLE (30% - 70%): Elements hold position

      // EXIT (70% - 100%)
      scrollTl.fromTo(phoneRef.current,
        { x: 0, rotation: -2, opacity: 1 },
        { x: '18vw', rotation: -10, opacity: 0, ease: 'power2.in' },
        0.70
      );

      scrollTl.fromTo(cardRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.70
      );

      scrollTl.fromTo(underlineRef.current,
        { scaleX: 1 },
        { scaleX: 0, ease: 'power2.in' },
        0.80
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id}
      className="relative w-full h-screen overflow-hidden"
      style={{ zIndex }}
    >
      <div className="relative w-full h-full flex items-center">
        {/* Phone mockup - left side with iPhone 14 Pro frame */}
        <div 
          ref={phoneRef}
          className="absolute left-[50%] lg:left-[28%] top-[30%] lg:top-[52%] -translate-x-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-[65vw] max-w-[300px] lg:w-[28vw] lg:max-w-[340px]"
        >
          {/* iPhone 14 Pro Frame */}
          <div className="relative">
            {/* Phone bezel */}
            <div className="relative rounded-[44px] bg-[#1a1a1a] p-2 shadow-2xl"
              style={{
                boxShadow: `
                  0 50px 100px -20px rgba(0, 0, 0, 0.7),
                  0 30px 60px -30px rgba(0, 0, 0, 0.5),
                  inset 0 0 0 2px rgba(255, 255, 255, 0.08),
                  0 0 0 1px rgba(0, 0, 0, 0.5)
                `
              }}
            >
              {/* Inner frame */}
              <div className="relative rounded-[36px] overflow-hidden bg-black">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[28%] h-6 bg-black rounded-full z-20" />
                
                {/* Screen content - User's actual screenshot */}
                <img 
                  src={phoneImage} 
                  alt={headline}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Glow effect behind phone */}
            <div className="absolute -inset-12 bg-cyan-400/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>
        </div>

        {/* Content card - right side */}
        <div 
          ref={cardRef}
          className="absolute left-1/2 lg:left-[56%] top-[62%] lg:top-1/2 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 w-[90vw] lg:w-[38vw] max-w-lg"
        >
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <h2 
              ref={headlineRef}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4"
            >
              {headline}
            </h2>

            <div ref={underlineRef} className="w-16 h-0.5 bg-cyan-400 mb-4 origin-left" />

            <div ref={contentRef}>
              <p className="text-base text-[#8a8a9a] leading-relaxed mb-6">
                {description}
              </p>

              <ul className="space-y-3 mb-6">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm text-[#8a8a9a]">{bullet}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`${isLast ? 'bg-cyan-400 text-[#0A0A0F] hover:bg-cyan-300' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'} font-medium`}
              >
                {cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
