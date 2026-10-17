import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { BackButton } from '../components/common/BackButton';

export const NotFoundPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#050505] text-[#FFFFFF] font-sans">
      <div className="max-w-xl w-full text-center">
        {/* Universal Back Button */}
        <div className="flex justify-center mb-6">
          <BackButton customTarget="home" label="Back to Home" />
        </div>

        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] shadow-2xl relative overflow-hidden">
          <div className="w-14 h-14 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center mx-auto mb-6 text-white">
            <Compass className="w-7 h-7" />
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2 font-display">
            Error 404 &bull; Page Not Found
          </span>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] font-display mb-4">
            PAGE NOT FOUND
          </h1>

          <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Please check the URL or return to the main pages of the Foundation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#050505] hover:bg-[#202328] text-white text-xs font-bold uppercase tracking-wider transition-all border border-[#202328] flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Page</span>
            </button>

            <button
              onClick={() => navigateTo('home')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home</span>
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-[#202328] grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
            <button
              onClick={() => navigateTo('about')}
              className="p-2 rounded hover:bg-[#050505] text-xs font-mono text-[#A7ADB5] hover:text-white transition-colors"
            >
              &rarr; About
            </button>
            <button
              onClick={() => navigateTo('programs')}
              className="p-2 rounded hover:bg-[#050505] text-xs font-mono text-[#A7ADB5] hover:text-white transition-colors"
            >
              &rarr; Programs
            </button>
            <button
              onClick={() => navigateTo('grants')}
              className="p-2 rounded hover:bg-[#050505] text-xs font-mono text-[#A7ADB5] hover:text-white transition-colors"
            >
              &rarr; Grants
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="p-2 rounded hover:bg-[#050505] text-xs font-mono text-[#A7ADB5] hover:text-white transition-colors"
            >
              &rarr; Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
