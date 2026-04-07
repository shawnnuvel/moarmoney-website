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
  Bell,
  ArrowLeft
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

// FAQ data — 6 questions
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
    answer: "Your data are stored securely in the cloud using industry-standard encryption. Our servers are hosted in Singapore for fast access and compliance with local regulations. You own your data. Export or delete it anytime from Settings."
  },
  {
    question: "How much does it cost?",
    answer: "Start with a 14-day free trial — no credit card required. After that, you can choose from any of these plans:\n\n- Monthly: $29/month\n- Annual: $19/month (billed $228/year) — save 35%\n- Lifetime: $499 one-time — never pay again\n\nAll plans include unlimited deals, voice logging, follow-up reminders, and commission tracking. Cancel anytime."
  },
  {
    question: "Is MoarMoney PDPA compliant?",
    answer: "Yes! MoarMoney is compliant under Singapore's Personal Data Protection Act. We're the data controller for your account info and the data intermediary (processor) for the client information you store. Your data is encrypted and stored securely. Export or delete it anytime from the app."
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [route, setRoute] = useState<string>(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  // Privacy Policy Page Component
  const PrivacyPolicyPage = () => (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#/" className="hover:opacity-80 transition-opacity">
              <img src="/assets/logo_header.png" alt="MoarMoney" className="h-8 w-auto" style={{ height: '32px' }} />
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[#94A3B8] text-sm mb-2">Effective Date: March 18, 2026 | Last Updated: April 6, 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">1. INTRODUCTION</h2>
              <p className="text-[#94A3B8] mb-4">MoarMoney ("MoarMoney," "we," "us," or "our") is committed to protecting the privacy and security of personal data. This Privacy Policy describes how we collect, use, disclose, and otherwise process personal data in connection with the MoarMoney mobile application and related services (collectively, the "Service").</p>
              <p className="text-[#94A3B8] mb-4">This Privacy Policy applies to individuals who access or use the Service, including registered users and visitors ("you" or "User"). By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree to this Privacy Policy, you must not access or use the Service.</p>
              <p className="text-[#94A3B8]">We process personal data in accordance with the Personal Data Protection Act 2012 of Singapore ("PDPA") and other applicable data protection laws. For the purposes of applicable data protection legislation, MoarMoney is the data controller responsible for your personal data when you create an account and use our Service. With respect to information about your clients or contacts that you choose to input, MoarMoney acts as a data intermediary (processor) — see Section 3.4 for details.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">2. DEFINITIONS</h2>
              <p className="text-[#94A3B8] mb-4">In this Privacy Policy, the following terms shall have the meanings ascribed to them below:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#94A3B8]">
                <li><strong className="text-white">"Account Data"</strong> means information provided during account registration and authentication, including identifiers, credentials, and profile information.</li>
                <li><strong className="text-white">"Customer Data"</strong> means any data, content, or information that you submit, upload, or otherwise provide to the Service, including but not limited to deal information, client details, notes, and recordings.</li>
                <li><strong className="text-white">"Personal Data"</strong> means any data, whether true or not, about an individual who can be identified from that data, or from that data and other information to which we have or are likely to have access.</li>
                <li><strong className="text-white">"Processing"</strong> means any operation or set of operations performed on Personal Data, including collection, recording, organisation, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure, transmission, dissemination, alignment, combination, restriction, erasure, or destruction.</li>
                <li><strong className="text-white">"Service Providers"</strong> means third-party companies and individuals engaged by us to facilitate or provide services on our behalf, perform Service-related functions, or assist us in analysing how the Service is used.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">3. PERSONAL DATA WE COLLECT</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">3.1 Information You Provide to Us</h3>
              <p className="text-[#94A3B8] mb-4">We collect Personal Data that you voluntarily provide when you register for and use the Service, including:</p>
              <p className="text-[#94A3B8] mb-2"><strong className="text-white">Account Information.</strong> When you create an account, we collect information necessary to authenticate your identity and maintain your account. This may include your name, email address, and authentication credentials. If you register using a third-party authentication service, we receive information from that service as permitted by your settings and their privacy policies.</p>
              <p className="text-[#94A3B8] mb-2"><strong className="text-white">Customer Data.</strong> When you use the Service, you may provide information about your business activities, including client names, contact information, deal details, property or product information, transaction values, notes, follow-up schedules, and other information you choose to record.</p>
              <p className="text-[#94A3B8] mb-2"><strong className="text-white">Audio Recordings.</strong> When you use our voice recording features, we process audio recordings to extract information. Audio recordings are processed in real-time and are not retained on our servers after processing is complete.</p>
              <p className="text-[#94A3B8] mb-4"><strong className="text-white">Communications.</strong> When you contact us for support or provide feedback, we collect the information you provide in those communications.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">3.2 Information We Collect Automatically</h3>
              <p className="text-[#94A3B8] mb-4">When you access or use the Service, we automatically collect certain information, including:</p>
              <p className="text-[#94A3B8] mb-2"><strong className="text-white">Usage Information.</strong> We collect information about your interactions with the Service, including features accessed, actions taken, time and duration of use, and other usage patterns.</p>
              <p className="text-[#94A3B8] mb-2"><strong className="text-white">Device Information.</strong> We collect information about the device you use to access the Service, including device type, operating system, unique device identifiers, and mobile network information.</p>
              <p className="text-[#94A3B8] mb-2"><strong className="text-white">Log Data.</strong> Our servers automatically record information when you access the Service, including your Internet Protocol (IP) address, browser type, referring and exit pages, pages viewed, and timestamps.</p>
              <p className="text-[#94A3B8] mb-4"><strong className="text-white">Diagnostic Information.</strong> We may collect technical information about errors, crashes, and performance issues to maintain and improve the Service. This information is collected in an anonymised or pseudonymised form where possible.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">3.3 Information from Third Parties</h3>
              <p className="text-[#94A3B8] mb-4">We may receive information about you from third parties, including authentication service providers, analytics providers, and other partners. We treat information received from third parties in accordance with this Privacy Policy.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">3.4 Information About Your Clients and Contacts</h3>
              <p className="text-[#94A3B8] mb-4">MoarMoney provides tools for you to organise and manage your professional contacts and deal information. When you input information about your clients, prospects, or other third parties into the Service, you do so at your own discretion as part of your business activities.</p>
              <p className="text-[#94A3B8] mb-4">We function as a data intermediary with respect to such third-party information. We process this data solely to provide the Service to you and do not independently collect, use, or disclose such information for any other purpose.</p>
              <p className="text-[#94A3B8]">We are not responsible for obtaining consent on your behalf from individuals whose information you choose to store. By using the Service, you represent that you have the necessary rights and permissions to store and process any third-party information you input, and you acknowledge your responsibility for compliance with applicable data protection laws, including the PDPA, in relation to such data.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">4. HOW WE USE YOUR PERSONAL DATA</h2>
              <p className="text-[#94A3B8] mb-4">We process your Personal Data for the following purposes and on the following legal bases:</p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.1 To Provide and Maintain the Service</h3>
              <p className="text-[#94A3B8] mb-4">We use your Personal Data to operate, maintain, and provide the features and functionality of the Service, including processing your audio recordings, creating and managing your account, synchronising your data across devices, and providing customer support. This processing is necessary for the performance of our contract with you.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.2 To Improve and Develop the Service</h3>
              <p className="text-[#94A3B8] mb-4">We use information to understand how the Service is used, to diagnose and fix technical issues, to develop new features and services, and to improve the quality and accuracy of our technology. Where this processing is not necessary for the performance of our contract, we rely on our legitimate business interests in improving and developing the Service.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.3 To Communicate with You</h3>
              <p className="text-[#94A3B8] mb-4">We use your contact information to send you service-related communications, including account notifications, security alerts, technical notices, and support messages. We may also send you promotional communications about new features, products, or services, subject to your marketing preferences. You may opt out of promotional communications at any time.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.4 To Ensure Security and Prevent Fraud</h3>
              <p className="text-[#94A3B8] mb-4">We use information to protect the security and integrity of the Service, to detect and prevent fraud, abuse, and other harmful activities, and to enforce our terms and policies. This processing is based on our legitimate interests in protecting our Service and users.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.5 To Comply with Legal Obligations</h3>
              <p className="text-[#94A3B8]">We process Personal Data as necessary to comply with applicable laws, regulations, legal processes, or governmental requests.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">5. HOW WE SHARE YOUR PERSONAL DATA</h2>
              <p className="text-[#94A3B8] mb-4">We do not sell your Personal Data. We may share your Personal Data in the following circumstances:</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.1 Service Providers</h3>
              <p className="text-[#94A3B8] mb-4">We engage third-party companies and individuals to perform services on our behalf, including cloud hosting and infrastructure, data processing and analytics, authentication services, customer support, and error monitoring. These Service Providers have access to your Personal Data only to perform these tasks on our behalf and are contractually obligated to protect your information and use it only for the purposes for which it was disclosed.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.2 Professional Advisors</h3>
              <p className="text-[#94A3B8] mb-4">We may share Personal Data with our professional advisors, including lawyers, auditors, and insurers, where necessary for the provision of their services.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.3 Legal Requirements and Protection of Rights</h3>
              <p className="text-[#94A3B8] mb-4">We may disclose Personal Data if required to do so by law or in response to valid legal requests by public authorities, including to meet national security or law enforcement requirements. We may also disclose Personal Data to protect and defend our rights, property, or safety, or the rights, property, or safety of our users or others.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.4 Business Transfers</h3>
              <p className="text-[#94A3B8] mb-4">In the event of a merger, acquisition, reorganisation, bankruptcy, or other similar event, your Personal Data may be transferred as part of that transaction. We will notify you of any such change in ownership or control and any choices you may have regarding your Personal Data.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.5 With Your Consent</h3>
              <p className="text-[#94A3B8] mb-4">We may share your Personal Data with third parties when you have given us your consent to do so.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.6 Aggregated or De-Identified Information</h3>
              <p className="text-[#94A3B8]">We may share aggregated or de-identified information that cannot reasonably be used to identify you for any purpose.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">6. DATA RETENTION</h2>
              <p className="text-[#94A3B8] mb-4">We retain Personal Data for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. The retention period may vary depending on the context and our obligations.</p>
              <p className="text-[#94A3B8] mb-4">Audio recordings are processed in real-time and deleted immediately after processing. Account and Customer Data are retained while your account is active. If you request deletion of your account, we will delete or anonymise your Personal Data within ninety (90) days, unless we are required to retain it for legal, regulatory, or legitimate business purposes.</p>
              <p className="text-[#94A3B8]">We may retain de-identified or aggregated information that cannot be used to identify you for analytical purposes indefinitely.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">7. INTERNATIONAL DATA TRANSFERS</h2>
              <p className="text-[#94A3B8] mb-4">Your Personal Data may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different from the laws of your country.</p>
              <p className="text-[#94A3B8] mb-4">When we transfer Personal Data internationally, we take appropriate safeguards to ensure that your Personal Data receives an adequate level of protection. Such safeguards may include contractual clauses approved by relevant authorities, reliance on certification schemes, or other legally recognised transfer mechanisms.</p>
              <p className="text-[#94A3B8]">By using the Service, you consent to the transfer of your Personal Data to countries outside your country of residence, including countries that may not provide the same level of data protection as your home country.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">8. DATA SECURITY</h2>
              <p className="text-[#94A3B8] mb-4">We implement appropriate technical and organisational measures designed to protect Personal Data against unauthorised access, alteration, disclosure, or destruction. These measures include encryption of data in transit and at rest, access controls, and regular security assessments.</p>
              <p className="text-[#94A3B8]">However, no method of transmission over the Internet or method of electronic storage is completely secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. You are responsible for maintaining the security of your account credentials and for any activities that occur under your account.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">9. YOUR RIGHTS AND CHOICES</h2>
              <p className="text-[#94A3B8] mb-4">Subject to applicable law, you may have certain rights regarding your Personal Data:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#94A3B8]">
                <li><strong className="text-white">Access.</strong> You may request access to the Personal Data we hold about you and information about how it has been used or disclosed within the past year.</li>
                <li><strong className="text-white">Correction.</strong> You may request that we correct any inaccurate or incomplete Personal Data.</li>
                <li><strong className="text-white">Deletion.</strong> You may request that we delete your Personal Data, subject to certain exceptions.</li>
                <li><strong className="text-white">Data Portability.</strong> You may request to receive your Personal Data in a structured, commonly used, and machine-readable format.</li>
                <li><strong className="text-white">Withdrawal of Consent.</strong> Where we rely on your consent to process Personal Data, you may withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.</li>
                <li><strong className="text-white">Opt-Out of Marketing.</strong> You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.</li>
              </ul>
              <p className="text-[#94A3B8] mt-4">To exercise your rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request in accordance with applicable law. We may need to verify your identity before processing your request.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">10. THIRD-PARTY LINKS AND SERVICES</h2>
              <p className="text-[#94A3B8]">The Service may contain links to third-party websites, applications, or services that are not operated or controlled by us. This Privacy Policy does not apply to third-party services. We encourage you to review the privacy policies of any third-party services you access.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">11. CHILDREN'S PRIVACY</h2>
              <p className="text-[#94A3B8]">The Service is not directed to individuals under the age of eighteen (18). We do not knowingly collect Personal Data from children. If we become aware that we have collected Personal Data from a child without verification of parental consent, we will take steps to delete that information.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">12. CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="text-[#94A3B8] mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will provide notice of any material changes by posting the updated Privacy Policy on the Service and updating the "Last Updated" date. Your continued use of the Service after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.</p>
              <p className="text-[#94A3B8]">We encourage you to review this Privacy Policy periodically to stay informed about our data practices.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">13. DATA PROTECTION OFFICER</h2>
              <p className="text-[#94A3B8] mb-4">In accordance with the PDPA, we have designated a Data Protection Officer who is responsible for ensuring our compliance with applicable data protection laws. If you have any questions about this Privacy Policy or our data practices, or if you wish to exercise your rights, you may contact our Data Protection Officer at:</p>
              <p className="text-[#94A3B8]">Email: <a href="mailto:support@moarmoney.app" className="text-[#22C55E] hover:underline">support@moarmoney.app</a></p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">14. CONTACT US</h2>
              <p className="text-[#94A3B8] mb-4">If you have any questions, concerns, or complaints regarding this Privacy Policy or our handling of your Personal Data, please contact us at:</p>
              <p className="text-[#94A3B8] mb-2">Email: <a href="mailto:support@moarmoney.app" className="text-[#22C55E] hover:underline">support@moarmoney.app</a></p>
              <p className="text-[#94A3B8] mb-4">For Data Protection Inquiries: <a href="mailto:support@moarmoney.app" className="text-[#22C55E] hover:underline">support@moarmoney.app</a></p>
              <p className="text-[#94A3B8] mb-4">We will endeavour to respond to your inquiry within thirty (30) days.</p>
              <p className="text-[#94A3B8]">If you are not satisfied with our response, you may lodge a complaint with the Personal Data Protection Commission of Singapore at <a href="https://www.pdpc.gov.sg" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">https://www.pdpc.gov.sg</a>.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">15. LOCAL DATA STORAGE</h2>
              <p className="text-[#94A3B8]">Certain types of data, including financial information such as commission amounts and earnings calculations, are stored locally on your device and are not transmitted to or processed by our servers. You are solely responsible for the security and backup of locally stored data. We are not responsible for any loss of locally stored data.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">16. GOVERNING LAW</h2>
              <p className="text-[#94A3B8]">This Privacy Policy shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles.</p>
            </section>

            <div className="border-t border-white/10 pt-8 mt-12">
              <p className="text-[#64748B] text-sm">This Privacy Policy was last updated on April 6, 2026.</p>
            </div>

            <div className="mt-12">
              <a href="#/" className="inline-flex items-center gap-2 text-[#22C55E] hover:text-[#16A34A] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <a href="#/" className="hover:opacity-80 transition-opacity">
                <img src="/assets/logo_header.png" alt="MoarMoney" className="h-6 w-auto" />
              </a>
              <p className="text-sm text-[#64748B] mt-2">Make moar. Leak less.</p>
              <p className="text-xs text-[#94A3B8] mt-1">A product of Nuvel Pte Ltd</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#/privacy" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#/terms" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:support@moarmoney.app" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/5">
            <p className="text-sm text-[#64748B]">© 2026 Nuvel Pte Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  // Terms of Service Page Component
  const TermsOfServicePage = () => (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#/" className="hover:opacity-80 transition-opacity">
              <img src="/assets/logo_header.png" alt="MoarMoney" className="h-8 w-auto" style={{ height: '32px' }} />
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[#94A3B8] text-sm mb-2">Effective Date: March 18, 2026 | Last Updated: March 18, 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">1. ACCEPTANCE OF TERMS</h2>
              <p className="text-[#94A3B8] mb-4">These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and MoarMoney ("MoarMoney," "Company," "we," "us," or "our") governing your access to and use of the MoarMoney mobile application, website, and related services (collectively, the "Service").</p>
              <p className="text-[#94A3B8] mb-4 font-semibold">BY ACCESSING OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND OUR PRIVACY POLICY, WHICH IS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SERVICE.</p>
              <p className="text-[#94A3B8]">If you are using the Service on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these Terms, and your agreement to these Terms will be treated as the agreement of such organisation. In such cases, "you" and "your" will refer to that organisation.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">2. ELIGIBILITY</h2>
              <p className="text-[#94A3B8]">The Service is intended for users who are at least eighteen (18) years of age. By using the Service, you represent and warrant that you are at least eighteen (18) years old and have the legal capacity to enter into a binding agreement. If you do not meet these requirements, you must not access or use the Service.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">3. ACCOUNT REGISTRATION AND SECURITY</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">3.1 Account Creation</h3>
              <p className="text-[#94A3B8] mb-4">To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">3.2 Account Security</h3>
              <p className="text-[#94A3B8] mb-4">You are responsible for safeguarding the credentials used to access your account and for any activities or actions under your account. You agree to notify us immediately of any unauthorised access to or use of your account. We are not liable for any loss or damage arising from your failure to maintain the security of your account credentials.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">3.3 Account Restrictions</h3>
              <p className="text-[#94A3B8]">You may not create more than one account for yourself. You may not share your account credentials with any third party. You may not use another user's account without permission.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">4. DESCRIPTION OF SERVICE</h2>
              <p className="text-[#94A3B8] mb-4">MoarMoney provides a mobile application and related services designed to assist sales professionals in managing client relationships, tracking business opportunities, and organising follow-up activities. The Service includes features such as voice recording with automated transcription and data extraction, deal and pipeline management, follow-up reminders, and data synchronisation across devices.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.1 Service Availability</h3>
              <p className="text-[#94A3B8] mb-4">We endeavour to make the Service available at all times but do not guarantee uninterrupted or error-free operation. The Service may be subject to limitations, delays, or other issues inherent in the use of the internet and electronic communications. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without notice or liability.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.2 Artificial Intelligence Features</h3>
              <p className="text-[#94A3B8] font-semibold">Certain features of the Service utilise artificial intelligence and machine learning technologies to process information. While we strive for accuracy, automated processing may produce errors or inaccuracies. YOU ACKNOWLEDGE THAT AI-GENERATED CONTENT MAY CONTAIN ERRORS AND THAT YOU ARE SOLELY RESPONSIBLE FOR REVIEWING AND VERIFYING ALL INFORMATION BEFORE RELYING ON IT.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">5. USER CONTENT AND DATA</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">5.1 Ownership of User Content</h3>
              <p className="text-[#94A3B8] mb-4">You retain all ownership rights in the content, data, and information that you submit, upload, or otherwise provide to the Service ("User Content"). MoarMoney does not claim ownership of your User Content.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.2 Licence Grant</h3>
              <p className="text-[#94A3B8] mb-4">By submitting User Content to the Service, you grant MoarMoney a non-exclusive, worldwide, royalty-free licence to use, process, store, reproduce, modify, and display such User Content solely for the purpose of providing, maintaining, and improving the Service. This licence terminates when you delete your User Content or your account, except to the extent that such content has been shared with others who have not deleted it, or as otherwise required for legitimate business purposes or legal compliance.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.3 Aggregated Data</h3>
              <p className="text-[#94A3B8] mb-4">You grant MoarMoney the right to collect, aggregate, and anonymise data derived from your use of the Service for analytical, research, and product improvement purposes. Such aggregated and anonymised data will not identify you or any individual user.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.4 User Responsibilities</h3>
              <p className="text-[#94A3B8] mb-4">You are solely responsible for your User Content and the consequences of submitting and publishing it. You represent and warrant that you have all necessary rights, licences, consents, and permissions to submit User Content and to grant the licences described herein. You represent and warrant that your User Content does not infringe or violate the rights of any third party, including intellectual property rights, privacy rights, or publicity rights.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.5 Recording Consent</h3>
              <p className="text-[#94A3B8]">If you use the Service to record conversations or interactions, you are solely responsible for obtaining all necessary consents from the individuals being recorded in accordance with applicable laws. We are not responsible for your compliance with recording consent laws.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">6. ACCEPTABLE USE</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">6.1 General Restrictions</h3>
              <p className="text-[#94A3B8] mb-4">You agree not to use the Service to:</p>
              <ol className="list-decimal pl-6 space-y-1 text-[#94A3B8]">
                <li>violate any applicable law, regulation, or ordinance;</li>
                <li>infringe the intellectual property or other proprietary rights of any third party;</li>
                <li>transmit any material that is defamatory, obscene, threatening, abusive, or otherwise objectionable;</li>
                <li>impersonate any person or entity or misrepresent your affiliation with any person or entity;</li>
                <li>interfere with or disrupt the Service or servers or networks connected to the Service;</li>
                <li>attempt to gain unauthorised access to any portion of the Service or any systems or networks connected to the Service;</li>
                <li>use any robot, spider, scraper, or other automated means to access the Service;</li>
                <li>reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Service;</li>
                <li>remove, alter, or obscure any proprietary notices on the Service;</li>
                <li>use the Service in any manner that could damage, disable, overburden, or impair the Service; or</li>
                <li>use the Service for any purpose that is fraudulent or otherwise tortious or unlawful.</li>
              </ol>

              <h3 className="text-xl font-semibold mb-3 mt-4 text-white">6.2 Fair Use</h3>
              <p className="text-[#94A3B8]">To ensure reliable service for all users, we may implement usage limits and restrictions. You agree to use the Service in a manner consistent with fair and reasonable use. We reserve the right to suspend or terminate access for users who exceed reasonable usage limits or who use the Service in a manner that adversely affects other users.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">7. INTELLECTUAL PROPERTY</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">7.1 Company Intellectual Property</h3>
              <p className="text-[#94A3B8] mb-4">The Service and its original content, features, and functionality (excluding User Content) are owned by MoarMoney and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. "MoarMoney" and our logos and product names are trademarks of MoarMoney. You may not use such marks without our prior written permission.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">7.2 Limited Licence</h3>
              <p className="text-[#94A3B8] mb-4">Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable licence to access and use the Service solely for your personal or internal business purposes. This licence does not include the right to modify, copy, distribute, transmit, display, perform, reproduce, publish, licence, create derivative works from, transfer, or sell any information or content obtained from the Service.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">7.3 Feedback</h3>
              <p className="text-[#94A3B8]">If you provide us with any feedback, suggestions, or ideas regarding the Service ("Feedback"), you hereby assign to us all rights in such Feedback and agree that we shall have the right to use and fully exploit such Feedback in any manner we deem appropriate without restriction or compensation to you.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">8. THIRD-PARTY SERVICES</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">8.1 Third-Party Integrations</h3>
              <p className="text-[#94A3B8] mb-4">The Service may integrate with or utilise third-party services, including authentication providers, cloud infrastructure providers, and data processing services. Your use of the Service constitutes your agreement to the terms and privacy policies of such third-party services to the extent applicable.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">8.2 Third-Party Links</h3>
              <p className="text-[#94A3B8]">The Service may contain links to third-party websites or resources. We are not responsible for the content, products, or services on or available from those websites or resources. Your use of third-party websites is at your own risk.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">9. FEES AND PAYMENT</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">9.1 Free Services</h3>
              <p className="text-[#94A3B8] mb-4">Certain features of the Service may be provided at no charge. We reserve the right to modify or discontinue free features at any time without notice.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">9.2 Paid Services</h3>
              <p className="text-[#94A3B8] mb-4">We may offer premium features or subscription plans for a fee ("Paid Services"). If you choose to purchase Paid Services, you agree to pay all applicable fees as described at the time of purchase. All fees are non-refundable unless otherwise stated or required by applicable law.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">9.3 Price Changes</h3>
              <p className="text-[#94A3B8] mb-4">We reserve the right to change our prices at any time. Price changes will not affect current subscription periods but will apply to subsequent renewal periods.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">9.4 Taxes</h3>
              <p className="text-[#94A3B8]">You are responsible for all applicable taxes associated with your use of the Service, except for taxes based on our net income.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">10. TERM AND TERMINATION</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">10.1 Term</h3>
              <p className="text-[#94A3B8] mb-4">These Terms commence on the date you first access or use the Service and continue until terminated in accordance with this Section 10.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">10.2 Termination by You</h3>
              <p className="text-[#94A3B8] mb-4">You may terminate your account and these Terms at any time by contacting us or using the account deletion feature in the Service.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">10.3 Termination by Us</h3>
              <p className="text-[#94A3B8] mb-4">We may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. Reasons for termination may include, but are not limited to: (a) breach of these Terms; (b) conduct that we determine, in our sole discretion, to be harmful to other users or the Service; (c) request by law enforcement or other government agencies; (d) discontinuance or material modification of the Service; or (e) unexpected technical or security issues.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">10.4 Effect of Termination</h3>
              <p className="text-[#94A3B8] mb-4">Upon termination: (a) your right to access and use the Service will immediately cease; (b) we may delete your account and User Content, subject to our data retention practices; and (c) all provisions of these Terms which by their nature should survive termination shall survive, including intellectual property provisions, warranty disclaimers, indemnification, and limitations of liability.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">10.5 Data Retrieval</h3>
              <p className="text-[#94A3B8]">Upon termination, you may request a copy of your User Content within thirty (30) days. After such period, we may delete your User Content and have no obligation to retain or provide copies.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">11. DISCLAIMERS</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">11.1 "As Is" Basis</h3>
              <p className="text-[#94A3B8] mb-4 font-semibold">THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">11.2 No Warranty</h3>
              <p className="text-[#94A3B8] mb-4 font-semibold">WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">11.3 AI and Automated Processing</h3>
              <p className="text-[#94A3B8] mb-4 font-semibold">WE DO NOT WARRANT THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT OR INFORMATION GENERATED OR PROCESSED BY ARTIFICIAL INTELLIGENCE OR AUTOMATED SYSTEMS. YOU ACKNOWLEDGE THAT SUCH CONTENT MAY CONTAIN ERRORS AND THAT YOU USE IT AT YOUR OWN RISK.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">11.4 User Content</h3>
              <p className="text-[#94A3B8] mb-4 font-semibold">WE DO NOT WARRANT THE ACCURACY, INTEGRITY, OR QUALITY OF ANY USER CONTENT. YOU ACKNOWLEDGE THAT BY USING THE SERVICE, YOU MAY BE EXPOSED TO CONTENT THAT IS OFFENSIVE, INACCURATE, OR OBJECTIONABLE.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">11.5 Third-Party Services</h3>
              <p className="text-[#94A3B8] mb-4 font-semibold">WE DISCLAIM ALL WARRANTIES RELATING TO THIRD-PARTY SERVICES, INCLUDING THEIR AVAILABILITY, ACCURACY, OR RELIABILITY.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">11.6 Professional Advice</h3>
              <p className="text-[#94A3B8] font-semibold">THE SERVICE IS NOT INTENDED TO PROVIDE LEGAL, FINANCIAL, TAX, ACCOUNTING, OR OTHER PROFESSIONAL ADVICE. YOU SHOULD CONSULT APPROPRIATE PROFESSIONALS FOR SUCH MATTERS.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">12. LIMITATION OF LIABILITY</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">12.1 Exclusion of Damages</h3>
              <p className="text-[#94A3B8] mb-4 font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MOARMONEY, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">12.2 Cap on Liability</h3>
              <p className="text-[#94A3B8] mb-4 font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNTS PAID BY YOU TO US DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE HUNDRED SINGAPORE DOLLARS (S$100).</p>

              <h3 className="text-xl font-semibold mb-3 text-white">12.3 Exceptions</h3>
              <p className="text-[#94A3B8] mb-4 font-semibold">NOTHING IN THESE TERMS SHALL LIMIT OR EXCLUDE LIABILITY FOR: (A) DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE; (B) FRAUD OR FRAUDULENT MISREPRESENTATION; OR (C) ANY OTHER LIABILITY THAT CANNOT BE LIMITED OR EXCLUDED BY APPLICABLE LAW.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">12.4 Essential Purpose</h3>
              <p className="text-[#94A3B8] font-semibold">THE LIMITATIONS OF LIABILITY SET FORTH IN THIS SECTION 12 SHALL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">13. INDEMNIFICATION</h2>
              <p className="text-[#94A3B8]">You agree to indemnify, defend, and hold harmless MoarMoney and its affiliates, directors, officers, employees, agents, partners, suppliers, and licensors from and against any and all claims, demands, actions, liabilities, losses, damages, judgments, settlements, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your access to or use of the Service; (b) your User Content; (c) your violation of these Terms; (d) your violation of any applicable law or the rights of any third party; or (e) your recording or storage of information without proper consent.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">14. DISPUTE RESOLUTION</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">14.1 Informal Resolution</h3>
              <p className="text-[#94A3B8] mb-4">Before initiating any formal dispute proceedings, you agree to first contact us at <a href="mailto:support@moarmoney.app" className="text-[#22C55E] hover:underline">support@moarmoney.app</a> and attempt to resolve the dispute informally for at least thirty (30) days. Most disputes can be resolved through good faith communication.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">14.2 Governing Law</h3>
              <p className="text-[#94A3B8] mb-4">These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">14.3 Jurisdiction</h3>
              <p className="text-[#94A3B8] mb-4">You agree that any legal action or proceeding arising out of or relating to these Terms or the Service shall be brought exclusively in the courts of Singapore. You consent to the personal jurisdiction of such courts and waive any objection to venue in such courts.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">14.4 Waiver of Class Actions</h3>
              <p className="text-[#94A3B8] font-semibold">TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU WAIVE ANY RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">15. MODIFICATIONS TO TERMS</h2>
              <p className="text-[#94A3B8] mb-4">We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by posting the revised Terms on the Service and updating the "Last Updated" date. Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the changes.</p>
              <p className="text-[#94A3B8]">We encourage you to review these Terms periodically. If you do not agree to the modified Terms, you must discontinue your use of the Service.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">16. GENERAL PROVISIONS</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">16.1 Entire Agreement</h3>
              <p className="text-[#94A3B8] mb-4">These Terms, together with the Privacy Policy and any other agreements or policies referenced herein, constitute the entire agreement between you and MoarMoney regarding the Service and supersede all prior agreements and understandings, whether written or oral.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">16.2 Severability</h3>
              <p className="text-[#94A3B8] mb-4">If any provision of these Terms is held to be invalid, illegal, or unenforceable, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable while preserving its intent. If such modification is not possible, the provision shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">16.3 Waiver</h3>
              <p className="text-[#94A3B8] mb-4">Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorised representative of MoarMoney.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">16.4 Assignment</h3>
              <p className="text-[#94A3B8] mb-4">You may not assign or transfer these Terms or your rights or obligations hereunder without our prior written consent. We may assign these Terms without restriction. Any purported assignment in violation of this Section shall be void.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">16.5 No Third-Party Beneficiaries</h3>
              <p className="text-[#94A3B8] mb-4">These Terms do not create any third-party beneficiary rights.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">16.6 Force Majeure</h3>
              <p className="text-[#94A3B8] mb-4">We shall not be liable for any failure or delay in performance resulting from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labour, or materials.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">16.7 Notices</h3>
              <p className="text-[#94A3B8] mb-4">We may provide notices to you through the Service, by email to the address associated with your account, or by other means. You are responsible for ensuring that your contact information is current. Notices to us should be sent to <a href="mailto:support@moarmoney.app" className="text-[#22C55E] hover:underline">support@moarmoney.app</a>.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">16.8 Headings</h3>
              <p className="text-[#94A3B8] mb-4">The headings in these Terms are for convenience only and shall not affect the interpretation of these Terms.</p>

              <h3 className="text-xl font-semibold mb-3 text-white">16.9 Language</h3>
              <p className="text-[#94A3B8]">These Terms are written in English. Any translations are provided for convenience only. In the event of any conflict between the English version and any translation, the English version shall prevail.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">17. CONTACT INFORMATION</h2>
              <p className="text-[#94A3B8] mb-4">If you have any questions about these Terms, please contact us at:</p>
              <p className="text-[#94A3B8]">Email: <a href="mailto:support@moarmoney.app" className="text-[#22C55E] hover:underline">support@moarmoney.app</a></p>
            </section>

            <div className="border-t border-white/10 pt-8 mt-12">
              <p className="text-[#64748B] text-sm">These Terms of Service were last updated on March 18, 2026.</p>
            </div>

            <div className="mt-12">
              <a href="#/" className="inline-flex items-center gap-2 text-[#22C55E] hover:text-[#16A34A] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <a href="#/" className="hover:opacity-80 transition-opacity">
                <img src="/assets/logo_header.png" alt="MoarMoney" className="h-6 w-auto" />
              </a>
              <p className="text-sm text-[#64748B] mt-2">Make moar. Leak less.</p>
              <p className="text-xs text-[#94A3B8] mt-1">A product of Nuvel Pte Ltd</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#/privacy" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#/terms" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:support@moarmoney.app" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/5">
            <p className="text-sm text-[#64748B]">© 2026 Nuvel Pte Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  // Route-based rendering
  if (route === '#/privacy') {
    return <PrivacyPolicyPage />;
  }

  if (route === '#/terms') {
    return <TermsOfServicePage />;
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#/" className="hover:opacity-80 transition-opacity">
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
              Start Free Trial
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
                  Start Free Trial
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
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          )}

          <p className="text-sm text-[#64748B]">14-day free trial. No credit card required.</p>
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
              <a href="#/" className="hover:opacity-80 transition-opacity">
                <img src="/assets/logo_header.png" alt="MoarMoney" className="h-6 w-auto" />
              </a>
              <p className="text-sm text-[#64748B] mt-2">Make moar. Leak less.</p>
              <p className="text-xs text-[#94A3B8] mt-1">A product of Nuvel Pte Ltd</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#/privacy" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#/terms" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:support@moarmoney.app" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/5">
            <p className="text-sm text-[#64748B]">© 2026 Nuvel Pte Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
