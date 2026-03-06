import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I stopped forgetting follow-ups the week I started using this. My closure rate went up 30%.",
    name: "Priya K.",
    role: "Property Agent",
    avatar: "/assets/avatar-01.jpg"
  },
  {
    quote: "My pipeline used to live in sticky notes. Now it lives in my pocket. Game changer.",
    name: "Darren L.",
    role: "Senior Consultant",
    avatar: "/assets/avatar-02.jpg"
  },
  {
    quote: "Voice notes to deal cards in seconds. It feels like magic. My clients think I'm super organized.",
    name: "Aisyah R.",
    role: "Team Lead",
    avatar: "/assets/avatar-03.jpg"
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(headlineRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards animation with stagger
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.fromTo(card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 z-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Headline */}
        <h2 
          ref={headlineRef}
          className="text-3xl lg:text-5xl font-bold text-white text-center mb-4"
        >
          Loved by agents on the <span className="text-cyan-400">ground</span>
        </h2>
        <p className="text-center text-[#A7B0C8] mb-12 lg:mb-16 max-w-xl mx-auto">
          Join 2,000+ property agents who never miss a follow-up
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={el => { cardsRef.current[index] = el; }}
              className="glass-card rounded-2xl p-6 lg:p-8 relative group hover:border-cyan-400/20 transition-colors duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Quote text */}
              <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-6 pt-4">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-[#A7B0C8]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
