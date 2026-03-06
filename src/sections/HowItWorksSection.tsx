import { Mic, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Record',
    description: 'After any client meeting, tap record and speak naturally. No forms, no typing.',
    icon: Mic,
    hasExample: true,
    example: '"Met Mrs Tan today, looking for 4-room HDB in Bishan, budget 650K, call her next Tuesday."'
  },
  {
    number: '02',
    title: 'AI Creates Deal',
    description: 'AI extracts the details and creates a deal card. Name, property, budget, phone—all organized.',
    icon: Sparkles,
    hasExample: false
  },
  {
    number: '03',
    title: 'Follow Up & Close',
    description: 'Get reminded at the right time. Close the deal, track your commission.',
    icon: Phone,
    hasExample: false
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <h2 className="section-animate text-4xl sm:text-5xl font-bold text-center mb-4">
            How it <span className="text-gradient-green">works</span>
          </h2>
          <p className="section-animate text-lg text-[#64748B] text-center mb-16">
            Three steps to never losing a deal again
          </p>

          {/* Steps Grid */}
          <div className="card-group grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="card-animate glass-card rounded-2xl p-6 lg:p-8 relative group"
                >
                  {/* Connecting line (hidden on mobile, visible on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  )}

                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono font-semibold text-emerald-500">
                      Step {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-emerald-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Underline */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400 mb-4" />

                  {/* Description */}
                  <p className="text-[#94A3B8] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Example Quote */}
                  {step.hasExample && (
                    <div className="mt-4 p-4 bg-white/[0.03] rounded-lg border-l-2 border-emerald-500/50">
                      <p className="text-sm text-[#64748B] italic leading-relaxed">
                        {step.example}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="section-animate text-center">
            <Button 
              size="lg"
              className="btn-primary text-[#030712] font-semibold px-8"
            >
              Join the Beta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
