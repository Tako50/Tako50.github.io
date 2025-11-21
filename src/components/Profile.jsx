import React from 'react';
import profileImage from '/profile.png';
import mapiconImage from '/mapicon.png';
import AtCoderImage from '/AtCoder.png';
import GitHubImage from '/GitHub.png';

function Profile() {
  return (
    <section className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto px-6 py-8 clean-card flex flex-col items-center animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-slate-100">Profile</h2>
      <div className="relative group">
        <img
          src={profileImage}
          alt="松尾宏太のプロフィール画像"
          className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-slate-100 dark:border-slate-700 shadow-sm"
        />
      </div>

      <div className="mt-6 space-y-4 w-full flex flex-col items-center">
        <a
          href="https://maps.app.goo.gl/8mjvpY8Za7vgMgtCA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400"
        >
          <img
            src={mapiconImage}
            alt="Map Pin"
            className="w-5 h-5 opacity-80 dark:invert"
          />
          <span className="font-medium">Hokkaido</span>
        </a>
        <a
          href="https://atcoder.jp/users/tako50"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400"
        >
          <img
            src={AtCoderImage}
            alt="AtCoder"
            className="w-5 h-5 opacity-80 dark:invert"
          />
          <span className="font-medium">AtCoder</span>
        </a>
        <a
          href="https://github.com/Tako50"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400"
        >
          <img
            src={GitHubImage}
            alt="GitHub"
            className="w-5 h-5 opacity-80 dark:invert"
          />
          <span className="font-medium">GitHub</span>
        </a>
      </div>
    </section>

  );
}

export default Profile;
