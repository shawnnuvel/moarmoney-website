import { Sparkles, Users, Rocket } from 'lucide-react';

const cards = [
  {
    icon: Sparkles,
    title: "Your story here",
    description: "Join the beta to be featured"
  },
  {
    icon: Users,
    title: "Coming soon",
    description: "Real agent testimonials"
  },
  {
    icon: Rocket,
    title: "Be the first",
    description: "Shape the product with us"
  }
];

export default function BetaSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="section-animate text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for <span className="text-emerald-500">Singapore</span> property agents
          </h2>
          
          {/* Subheadline */}
          <p className="section-animate text-lg text-[#94A3B8] mb-12">
            Currently in private beta. Be among the first to try MoarMoney.
          </p>

          {/* Cards */}
          <div className="card-group grid sm:grid-cols-3 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={index}
                  className="card-animate glass-card rounded-2xl p-6 border-dashed border-2 border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#64748B]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
