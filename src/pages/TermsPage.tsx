import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-[#64748B] mb-12">
              Last Updated: March 6, 2026
            </p>

            <p className="text-[#94A3B8] leading-relaxed mb-12">
              These Terms of Service ("Terms") govern your use of the MoarMoney mobile application and services. By using MoarMoney, you agree to these Terms.
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">1.</span> Acceptance
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  By creating an account or using MoarMoney, you confirm that you are at least 18 years old and agree to be bound by these Terms and our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">2.</span> Description of Service
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  MoarMoney is a voice-first CRM application that helps sales professionals capture, organize, and follow up on client interactions. Features include voice recording with AI-powered transcription and extraction, deal tracking, follow-up reminders, and commission tracking.
                </p>
                <p className="text-[#94A3B8] leading-relaxed">
                  The Service uses artificial intelligence to process recordings and extract information. While we strive for accuracy, AI-generated content may contain errors and should be verified by you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">3.</span> Your Account
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  You are responsible for maintaining the security of your account credentials and for all activities under your account. You agree to provide accurate information and notify us immediately of any unauthorized access.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">4.</span> Your Content
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  You retain ownership of all content you create in MoarMoney, including voice recordings, deal information, and notes ("User Content").
                </p>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  By using the Service, you grant us a license to process, store, and display your content to provide the Service, and to use anonymized and aggregated data to improve our services and AI capabilities.
                </p>
                <p className="text-[#94A3B8] leading-relaxed">
                  You are responsible for ensuring you have the right to record and store any information you capture, and for compliance with applicable laws regarding client data.
                </p>
              </section>

              {/* Section 5 - Green Highlight */}
              <div className="legal-highlight-green">
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">5.</span> Your Clients' Data
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  We recognize that your client information is sensitive and central to your business. <strong className="text-white">Your clients' data is private to you and will never be shared with other users, sold to third parties, or used for advertising purposes.</strong>
                </p>
              </div>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">6.</span> Acceptable Use
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  You agree to use MoarMoney only for lawful purposes. You shall not:
                </p>
                <ul className="space-y-2 text-[#94A3B8] list-disc list-inside">
                  <li>Use the Service for illegal activities</li>
                  <li>Attempt to access other users' accounts or data</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Reverse engineer or copy the Service</li>
                  <li>Use automated systems to access the Service without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">7.</span> Intellectual Property
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  MoarMoney and its contents (excluding User Content) are owned by us and protected by intellectual property laws. "MoarMoney" and our logo are trademarks.
                </p>
                <p className="text-[#94A3B8] leading-relaxed">
                  If you provide feedback or suggestions, you grant us the right to use them without restriction or compensation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">8.</span> Third-Party Services
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  MoarMoney integrates with third-party services for transcription, AI processing, and cloud infrastructure. Your use of these services through MoarMoney is subject to their respective terms. We are not responsible for third-party services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">9.</span> Fees
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  Some features may require payment. We will clearly indicate pricing before you access paid features. We may change pricing at any time; changes will not affect existing subscriptions until renewal.
                </p>
              </section>

              {/* Section 10 - Amber Warning Box */}
              <div className="legal-highlight-amber">
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="text-amber-500 font-semibold">10.</span> Beta Services
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed mb-4">
                  <strong className="text-amber-400">Important:</strong> If you use beta features, you acknowledge they may be incomplete or contain bugs, may be modified or discontinued without notice, and are provided without warranty.
                </p>
                <p className="text-[#CBD5E1] leading-relaxed">
                  You should not rely solely on beta features for critical operations.
                </p>
              </div>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">11.</span> Disclaimers
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not warrant that the Service will be uninterrupted, error-free, or that AI-generated content will be accurate. You are responsible for verifying information before taking action.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">12.</span> Limitation of Liability
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
                </p>
                <p className="text-[#94A3B8] leading-relaxed">
                  OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR S$100, WHICHEVER IS GREATER.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">13.</span> Indemnification
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  You agree to indemnify and hold harmless MoarMoney and its officers, directors, employees, and agents from any claims arising from your use of the Service, your User Content, or your violation of these Terms or any law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">14.</span> Termination
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  You may terminate your account at any time by contacting us. We may suspend or terminate your access if you violate these Terms, pose a security risk, or if required by law.
                </p>
                <p className="text-[#94A3B8] leading-relaxed">
                  Upon termination, your right to use the Service ends. You may request your data within 30 days of termination.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">15.</span> Changes
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  We may modify these Terms at any time. We will notify you of material changes through the app or by email. Continued use after changes take effect constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">16.</span> Governing Law
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  These Terms are governed by the laws of Singapore. Any disputes shall be resolved in the courts of Singapore.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">17.</span> General
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  These Terms constitute the entire agreement between you and MoarMoney. If any provision is unenforceable, the remaining provisions remain in effect. Our failure to enforce any right does not waive that right.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  <span className="legal-section-number">18.</span> Contact
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">
                  For questions about these Terms: <a href="mailto:support@moarmoney.app" className="text-emerald-500 hover:underline">support@moarmoney.app</a>
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
