import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Gradient orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="gradient-orb gradient-orb-green-subtle w-[600px] h-[600px] top-[10%] -right-[20%] opacity-30" />
        <div className="gradient-orb gradient-orb-green-subtle w-[500px] h-[500px] bottom-[20%] -left-[15%] opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="text-xl lg:text-2xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
              Moar<span className="text-emerald-500">Money</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="legal-container">
            {/* Back link */}
            <Link to="/" className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-[#64748B] mb-12">
              Last Updated: March 6, 2026
            </p>

            <p className="text-[#94A3B8] leading-relaxed mb-8">
              MoarMoney is built for sales professionals who take client relationships seriously. We understand that your client information is central to your livelihood. This Privacy Policy explains how we handle your data with the care it deserves.
            </p>

            <p className="text-[#94A3B8] leading-relaxed mb-12">
              By using MoarMoney, you consent to the practices described in this policy.
            </p>

            {/* Section 1 - Highlighted */}
            <div className="legal-highlight-green mb-8">
              <h2 className="text-xl font-bold text-white mb-6">
                <span className="legal-section-number">1.</span> Our Commitment to Protecting Your Client Data
              </h2>
              <p className="text-[#CBD5E1] leading-relaxed mb-4">
                We know your client relationships are sensitive and valuable. That's why we make these commitments:
              </p>
              <ul className="space-y-3 text-[#CBD5E1]">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong className="text-white">Your clients' information will never be shared with other MoarMoney users</strong> — not now, not ever. Even as we introduce new features, your client data remains yours alone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong className="text-white">Your clients' information will never be sold to third parties.</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong className="text-white">Your clients' information will never be used for advertising.</strong></span>
                </li>
              </ul>
              <p className="text-[#CBD5E1] leading-relaxed mt-4">
                When we improve our services, we use only anonymized data that cannot identify you or your clients.
              </p>
              <p className="text-[#CBD5E1] leading-relaxed mt-4">
                <strong className="text-white">Your data belongs to you.</strong> MoarMoney is your personal tool — your data is tied to your account, not to any agency or company. If you change agencies, your pipeline stays with you.
              </p>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">2.</span> How We Use Your Information
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  We use information to provide and improve MoarMoney:
                </p>
                <div className="space-y-3 text-[#94A3B8]">
                  <p><strong className="text-white">To Deliver the Service:</strong> We process voice recordings to create deal cards, sync your data across devices, send follow-up reminders, and enable the features you use daily.</p>
                  <p><strong className="text-white">To Improve the Experience:</strong> We analyze usage patterns to build better features, improve AI accuracy for Singapore accents and names, and make MoarMoney more useful for you.</p>
                  <p><strong className="text-white">To Keep You Informed:</strong> We send service updates, respond to support requests, and occasionally share news about new features.</p>
                  <p><strong className="text-white">To Keep Things Secure:</strong> We protect against unauthorized access and comply with legal requirements.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">3.</span> Data Storage and Sync
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  Your data is securely stored and synced so you never lose your work:
                </p>
                <ul className="space-y-2 text-[#94A3B8] list-disc list-inside">
                  <li>Your information syncs automatically across devices — sign in on a new phone and your pipeline is there.</li>
                  <li>If you lose or change your phone, your data is safe and recoverable through your account.</li>
                  <li>We use industry-standard encryption to protect your data in transit and at rest.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">4.</span> Information We Work With
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  To provide MoarMoney, we work with the following information:
                </p>
                <div className="space-y-3 text-[#94A3B8]">
                  <p><strong className="text-white">Account Details:</strong> Your email, name, and phone number (if provided) to manage your account and communicate with you.</p>
                  <p><strong className="text-white">Voice Recordings:</strong> Audio you record is processed to extract deal information, then immediately deleted from our servers. We do not store your voice recordings.</p>
                  <p><strong className="text-white">Deal Information:</strong> The business information you create and organize within the app to manage your pipeline and follow-ups.</p>
                  <p><strong className="text-white">Usage Information:</strong> How you interact with the app, which helps us improve features and fix issues.</p>
                  <p><strong className="text-white">Device Information:</strong> Technical details like device type and app version to ensure compatibility and provide support.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">5.</span> How We Share Information
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  <strong className="text-white">We do not sell your data.</strong>
                </p>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  We share information only when necessary:
                </p>
                <div className="space-y-3 text-[#94A3B8]">
                  <p><strong className="text-white">Service Providers:</strong> We use trusted partners for transcription, AI processing, and secure cloud storage. These providers are contractually bound to protect your data and use it only to deliver their services to us.</p>
                  <p><strong className="text-white">With Your Permission:</strong> If you choose to use features that involve connecting with partner services or other professionals, we will ask for your explicit consent first.</p>
                  <p><strong className="text-white">Aggregated Insights:</strong> We may share anonymized statistics that cannot identify you or your clients.</p>
                  <p><strong className="text-white">Legal Compliance:</strong> We may disclose information if required by law or to protect rights and safety.</p>
                  <p><strong className="text-white">Business Changes:</strong> If MoarMoney is acquired, your data may transfer to the new owner.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">6.</span> Data Retention
                </h2>
                <div className="space-y-3 text-[#94A3B8]">
                  <p><strong className="text-white">Voice Recordings:</strong> Deleted immediately after processing.</p>
                  <p><strong className="text-white">Your Data:</strong> Retained while your account is active. If you delete your account, we keep your data for 90 days to allow recovery, then permanently delete it.</p>
                  <p><strong className="text-white">Usage Analytics:</strong> Retained for up to 24 months to improve the service.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">7.</span> Your Rights
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  You can:
                </p>
                <ul className="space-y-2 text-[#94A3B8] list-disc list-inside">
                  <li><strong className="text-white">Access your data:</strong> Request a copy of what we hold.</li>
                  <li><strong className="text-white">Correct your data:</strong> Fix any inaccuracies.</li>
                  <li><strong className="text-white">Delete your data:</strong> Request permanent deletion.</li>
                  <li><strong className="text-white">Withdraw consent:</strong> Opt out of data collection (this may affect some features).</li>
                  <li><strong className="text-white">Export your data:</strong> Get your information in a portable format.</li>
                </ul>
                <p className="text-[#94A3B8] leading-relaxed mt-4">
                  To exercise these rights, email <a href="mailto:support@moarmoney.app" className="text-emerald-500 hover:underline">support@moarmoney.app</a>. We respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">8.</span> International Transfers
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  Some service providers operate outside Singapore. We ensure appropriate protections are in place when data is transferred internationally.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">9.</span> Children
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  MoarMoney is not for individuals under 18. We do not knowingly collect data from children.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">10.</span> Changes
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  We may update this policy and will notify you of material changes through the app or email. Continued use after changes means you accept the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">11.</span> Contact
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  Questions? Email us at <a href="mailto:support@moarmoney.app" className="text-emerald-500 hover:underline">support@moarmoney.app</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs text-[#475569]">
              © 2026 MoarMoney. Built in Singapore 🇸🇬
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
