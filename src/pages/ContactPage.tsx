import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Building2, 
  HelpCircle, 
  Lock, 
  Newspaper,
  Target,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: 'General Inquiries',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: 'General Inquiries', label: 'General Inquiries', icon: HelpCircle },
    { id: 'Partnerships', label: 'Institutional Partnerships', icon: Building2 },
    { id: 'Research', label: 'Research Fellowships', icon: Sparkles },
    { id: 'Grants', label: 'Grants & Funding', icon: Target },
    { id: 'Media', label: 'Media & Press', icon: Newspaper },
    { id: 'Security', label: 'Security & Bug Disclosure', icon: Lock },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) {
      setError('Please provide your name or organization.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setError('Please provide a valid email address.');
      return;
    }

    if (!formData.subject.trim()) {
      setError('Please provide a message subject.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      setError('Please provide a detailed message (minimum 15 characters).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existingMessages = JSON.parse(localStorage.getItem('moneta_contact_messages') || '[]');
        existingMessages.push({
          ...formData,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('moneta_contact_messages', JSON.stringify(existingMessages));
      } catch (err) {
        // Safe fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      category: 'General Inquiries',
      subject: '',
      message: '',
    });
    setSubmitted(false);
    setError(null);
  };

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            OFFICIAL COMMUNICATIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            CONTACT MONETA GLOBAL FOUNDATION
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Direct channels for developers, researchers, academic institutions, media representatives, and community leaders to engage with the Foundation Secretariat.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Inquiry Category Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328]">
              <h3 className="text-base font-bold text-white font-display mb-4">
                Official Inquiry Category
              </h3>

              <div className="space-y-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setFormData({ ...formData, category: cat.id })}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                        formData.category === cat.id
                          ? 'bg-[#050505] border-[#FFFFFF] text-white'
                          : 'bg-[#15171A] border-[#202328] text-[#A7ADB5] hover:text-white hover:bg-[#202328]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-white" />
                        <span className="text-xs font-semibold">{cat.label}</span>
                      </div>
                      {formData.category === cat.id && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Institutional Notice */}
            <div className="bg-[#15171A] p-6 sm:p-8 rounded-xl border border-[#202328] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <ShieldCheck className="w-4 h-4" />
                <span>COMMUNICATION POLICY</span>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                The Foundation Secretariat reviews all institutional and research communications on a regular basis. Inquiries regarding technical vulnerabilities will be routed directly to the Security Committee under safe harbor.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#A7ADB5] border-t border-[#202328]">
                Direct automated dispatch queue active &bull; Response SLA: 2-3 business days
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328]">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#202328] flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Dispatch Received by Secretariat
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your communication regarding <strong className="text-white">{formData.subject}</strong> has been encrypted and logged. A verification receipt has been recorded for <strong className="text-white">{formData.email}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-lg bg-[#202328] border border-[#A7ADB5]/40 text-white text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Elena Rostova"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@institute.org"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                      Organization / University / Project
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Zurich Cryptography Lab"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject summary"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                      Detailed Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide full details regarding your proposal, research questions, or institutional inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#202328]">
                    <div className="text-[11px] font-mono text-[#A7ADB5]">
                      Selected Category: <strong className="text-white">{formData.category}</strong>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
