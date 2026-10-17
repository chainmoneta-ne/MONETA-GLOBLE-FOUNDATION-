import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  X,
  ArrowRight
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/foundationData';
import { NewsArticle } from '../types';

export const NewsPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Announcements', 'Research', 'Grants', 'Community', 'Security', 'Governance'];

  const filteredArticles = NEWS_ARTICLES.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            FOUNDATION DISPATCHES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            News &amp; Announcements
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Official announcements, program milestones, research fellowship breakthroughs, security disclosures, and community dispatches from MONETA GLOBAL FOUNDATION.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#FFFFFF] text-[#050505] font-bold'
                  : 'bg-[#15171A] text-[#A7ADB5] hover:text-white border border-[#202328]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setReadingArticle(article)}
              className="bg-[#15171A] p-7 rounded-xl border border-[#202328] hover:border-[#A7ADB5] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A7ADB5] mb-3">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-display mb-2 group-hover:text-[#A7ADB5] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#202328] flex items-center justify-between text-xs text-[#A7ADB5]">
                <span className="font-mono text-[11px]">{article.readTime}</span>
                <span className="text-white group-hover:text-[#A7ADB5] font-semibold inline-flex items-center gap-1">
                  Read Dispatch <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reading Modal */}
      {readingArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-[#15171A] border border-[#202328] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8 border-b border-[#202328] relative">
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-[#202328] hover:bg-[#050505] flex items-center justify-center text-[#A7ADB5] hover:text-white transition-colors"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB5] mb-2">
                <span>{readingArticle.category}</span>
                <span>&bull;</span>
                <span>{readingArticle.date}</span>
                <span>&bull;</span>
                <span>{readingArticle.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-display text-white pr-8">
                {readingArticle.title}
              </h2>
              <div className="text-xs font-mono text-[#A7ADB5] mt-2">
                Author: {readingArticle.author}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-white font-medium leading-relaxed">
                {readingArticle.excerpt}
              </p>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                MONETA GLOBAL FOUNDATION continues to publish verified dispatches documenting our fiduciary operations, academic fellowship milestones, and technical contributions to decentralized open-source infrastructure.
              </p>
              <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs text-[#A7ADB5] space-y-1">
                <span className="font-mono text-white block uppercase">Official Institutional Publication</span>
                <p>Authenticated by the Foundation Secretariat. Unrestricted public redistribution permitted under Creative Commons CC-BY-4.0.</p>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-[#050505] border-t border-[#202328] flex justify-end">
              <button
                onClick={() => setReadingArticle(null)}
                className="px-5 py-2 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
              >
                Close Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
