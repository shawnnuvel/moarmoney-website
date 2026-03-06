import { Check } from 'lucide-react';

const features = [
  "Auto-extracted fields",
  "One-tap call/WhatsApp",
  "Follow-up reminder"
];

export default function FeatureDealSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content - Left with fade-in */}
            <div className="section-animate order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 leading-tight">
                Every detail,
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold text-gradient-green mb-6 leading-tight">
                captured
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 mb-6" />
              
              <p className="text-lg text-[#94A3B8] leading-relaxed mb-8">
                AI extracts names, numbers, budgets, and locations from your voice note—so your follow-up is ready before you leave the lobby.
              </p>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-emerald-500/30 group-hover:scale-110">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <span className="text-[#CBD5E1] text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone Mockup - Right with slide-in animation */}
            <div className="slide-right flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                {/* Glow behind phone */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full -z-10 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.2) 0%, transparent 65%)'
                  }}
                />
                
                {/* iPhone Mockup */}
                <div className="iphone-mockup w-[280px] sm:w-[300px] lg:w-[320px]">
                  <div className="iphone-mockup-inner">
                    <div className="iphone-notch" />
                    <img 
                      src="/assets/phone-deal.png" 
                      alt="MoarMoney - Deal Details"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
