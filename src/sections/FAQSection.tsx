import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="section-animate text-4xl sm:text-5xl font-bold text-white text-center mb-4">
            Questions?
          </h2>
          <p className="section-animate text-lg text-[#64748B] text-center mb-12">
            Everything you need to know
          </p>

          {/* Accordion */}
          <div className="section-animate">
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
      </div>
    </section>
  );
}
