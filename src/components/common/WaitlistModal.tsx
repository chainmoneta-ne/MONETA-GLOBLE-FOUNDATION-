import React, { useState } from 'react';
import { X, Bell, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle?: string;
  defaultCategory?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  programTitle = 'Moneta Funding & Grant System',
  defaultCategory = 'Developer Grants',
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please enter your full name or organization name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existingEntries = JSON.parse(localStorage.getItem('moneta_waitlist') || '[]');
        existingEntries.push({
          name: name.trim(),
          email: email.trim(),
          category,
          programTitle,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('moneta_waitlist', JSON.stringify(existingEntries));
      } catch (err) {
        // Safe fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleClose = () => {
    setSubmitted(false);
    setError(null);
    setEmail('');
    setName('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      <div
        className="bg-[#15171A] border border-[#202328] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#050505] text-white p-6 sm:p-7 relative border-b border-[#202328]">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-[#15171A] hover:bg-[#202328] flex items-center justify-center text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#A7ADB5]"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#15171A] text-[#FFFFFF] text-[10px] font-mono uppercase tracking-widest mb-2 border border-[#202328]">
            <Bell className="w-3 h-3" />
            <span>Launch Notification Registry</span>
          </div>

          <h3 id="waitlist-title" className="text-xl sm:text-2xl font-bold font-display text-white pr-8">
            Notify Me When Applications Open
          </h3>
          <p className="text-xs text-[#A7ADB5] mt-1">
            Program: <span className="text-white font-medium">{programTitle}</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#202328] border border-[#A7ADB5]/30 flex items-center justify-center text-[#FFFFFF] mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Registration Confirmed
              </h4>
              <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. You will receive an official notification at <strong className="text-white">{email}</strong> as soon as the grant window opens.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-[#202328] border border-[#A7ADB5]/40 text-[#FFFFFF] text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                  Full Name or Organization *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alice Chen or Distributed Systems Lab"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alice@institution.org"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                  Category of Work
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white focus:outline-none focus:border-[#A7ADB5]"
                >
                  <option value="Developer Grants">Developer Grants (Infrastructure, Wallets, Tooling)</option>
                  <option value="Research Fellowships">Research Fellowships (Cryptography, Consensus)</option>
                  <option value="Academy Courses">Moneta Academy (Developer & Validator Training)</option>
                  <option value="Security Audits">Security & Bug Bounty Program</option>
                  <option value="Community Hubs">Regional Builder Chapter Funding</option>
                  <option value="Public Goods">Open-Source Public Goods</option>
                </select>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#A7ADB5] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#FFFFFF] flex-shrink-0" />
                <span>Strictly zero telemetry. Your email is only used for official notification.</span>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#202328]">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-lg bg-[#202328] hover:bg-[#15171A] text-[#A7ADB5] text-xs font-semibold transition-all border border-[#202328]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Registering...' : 'Register for Notification'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
