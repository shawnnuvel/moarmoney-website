import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Glow effect container */}
          <div className="relative">
            {/* Background glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full -z-10"
              style={{
                background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.12) 0%, transparent 60%)'
              }}
            />
            
            <div className="relative">
              {/* Badge with pulse effect */}
              <div className="section-animate inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8 badge-pulse">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-500">Limited beta spots</span>
              </div>

              {/* Headline */}
              <h2 className="section-animate text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                Ready to close
              </h2>
              <h2 className="section-animate text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-green mb-6">
                more deals?
              </h2>

              {/* Subheadline */}
              <p className="section-animate text-lg text-[#94A3B8] mb-10">
                Join the beta. Limited spots available.
              </p>

              {/* Form */}
              <div className="section-animate">
                {isSubmitted ? (
                  <div className="glass-card rounded-2xl p-8 max-w-md mx-auto border-emerald-500/30">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Check className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                    <p className="text-[#94A3B8]">We'll be in touch soon with your beta access.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-[#64748B] focus:border-emerald-500 focus:ring-emerald-500/20 input-glow transition-all duration-300 h-12"
                    />
                    <Button 
                      type="submit"
                      size="lg"
                      className="btn-primary text-[#030712] font-semibold px-6 h-12"
                    >
                      Join the Beta
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Trust note */}
              {!isSubmitted && (
                <p className="section-animate text-xs text-[#64748B] mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
