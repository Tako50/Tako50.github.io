import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // App.jsx の id に合わせて変更
  const menuItems = [
    { id: "profile", label: "Profile" },
    { id: "news", label: "News" },
    { id: "introduction", label: "Introduction" },
    { id: "works", label: "Works" },
    { id: "skills", label: "Skills" },
    { id: "history", label: "History" },
    { id: "meals", label: "Meals" },
  ];

  // スムーズスクロール用
// ヘッダー高さ分の余白を考慮してスクロール
const handleClick = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -80; // ヘッダー高さ＋余裕のピクセル数
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  setIsOpen(false); // モバイルメニューを閉じる
};


  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 gap-x-6">
        {/* ロゴ */}
        <div className="text-xl font-bold text-blue-700">
          Matsuo Kota
        </div>

        {/* PC用ナビ */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* モバイル用ハンバーガー */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-start">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
