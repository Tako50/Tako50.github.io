import React from 'react';
import profileImage from '/profile.png';
import mapiconImage from '/mapicon.png';
import AtCoderImage from '/AtCoder.png';
import GitHubImage from '/GitHub.png';

function Profile() {
  return (
    <section className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto my-8 px-4 sm:px-6 py-8 bg-white rounded-2xl shadow-md flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Profile</h2>
      <img
        src={profileImage}
        alt="松尾宏太のプロフィール画像"
        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full shadow mb-4"
      />
      <a
        href="https://maps.app.goo.gl/8mjvpY8Za7vgMgtCA"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 no-underline mt-3 hover:opacity-80"
      >
        <img
          src={mapiconImage}
          alt="Map Pin"
          className="w-6 h-6"
        />
        <p className="m-0 text-blue-600 text-center font-semibold text-sm sm:text-base">Hokkaido</p>
      </a>
      <a
        href="https://atcoder.jp/users/tako50"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 no-underline mt-3 hover:opacity-80"
      >
        <img
          src={AtCoderImage}
          alt="AtCoder"
          className="w-6 h-6"
        />
        <p className="m-0 text-blue-600 text-center font-semibold text-sm sm:text-base">AtCoder</p>
      </a>
      <a
        href="https://github.com/Tako50"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 no-underline mt-3 hover:opacity-80"
      >
        <img
          src={GitHubImage}
          alt="GitHub"
          className="w-6 h-6"
        />
        <p className="m-0 text-blue-600 text-center font-semibold text-sm sm:text-base">GitHub</p>
      </a>
    </section>
    
  );
}

export default Profile;
