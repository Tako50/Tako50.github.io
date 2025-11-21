import React from 'react';
import TypingText from './TypingText';

function Introduction() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-6 sm:px-8 clean-card animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-slate-100">
          Introduction
        </h2>

        <div className="mb-8 min-h-[60px]">
          <TypingText />
        </div>

        <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
            北海道大学情報科学院に所属している松尾宏太です。<br className="hidden sm:block" />
            大学では体育会サッカー部に所属していました。<br /><br />
            現在は <span className="text-teal-600 dark:text-teal-400 font-semibold">HCI分野</span> の領域において、<br className="hidden sm:block" />
            寝ながらでもVRデバイスを使いやすくするインタラクションに関する研究を行っています。
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
