import { Clock, MessageSquare, TrendingDown } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    text: "You meet 10 clients. You follow up with 3."
  },
  {
    icon: MessageSquare,
    text: "Details live in WhatsApp, notebooks, and your head."
  },
  {
    icon: TrendingDown,
    text: "By the time you remember, they've found another agent."
  }
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <h2 className="section-animate text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4 leading-tight">
            Deals slip. Clients forget.
          </h2>
          <p className="section-animate text-3xl sm:text-4xl lg:text-5xl font-bold text-[#64748B] text-center mb-16 leading-tight">
            You're too busy to chase.
          </p>

          {/* Pain Points Grid */}
          <div className="card-group grid md:grid-cols-3 gap-6 mb-16">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index}
                  className="card-animate glass-card rounded-2xl p-8 text-center group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <p className="text-[#CBD5E1] leading-relaxed text-lg">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Transition Text */}
          <div className="section-animate text-center">
            <p className="text-2xl lg:text-3xl font-semibold text-emerald-500">
              There's a better way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
