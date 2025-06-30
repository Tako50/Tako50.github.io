import React from 'react';
import profileImage from '/profile.png';
import mapiconImage from '/mapicon.png';
import AtCoderImage from '/AtCoder.png';

function Profile() {
  return (
    <section>
      <h2>Profile</h2>
      <img
        src={profileImage}
        alt="松尾宏太のプロフィール画像"
        width="200"
        height="200"
      />
      <a
        href="https://maps.app.goo.gl/8mjvpY8Za7vgMgtCA"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", marginTop: "10px" }}
      >
        <img
          src={mapiconImage}
          alt="Map Pin"
          width="24"
          height="24"
        />
        <p style={{ margin: 0, color: "blue", textAlign: "center" }}>Hokkaido</p>
      </a>
      <a
        href="https://atcoder.jp/users/tako50"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", marginTop: "10px" }}
      >
        <img
          src={AtCoderImage} 
          alt="AtCoder"
          width="24"
          height="24"
        />
        <p style={{ margin: 0, color: "blue", textAlign: "center" }}>AtCoder</p>
      </a>
    </section>
  );
}

export default Profile;
