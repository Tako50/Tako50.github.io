import React, { useState, useEffect } from 'react';

function TypingText() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Matsuo Kota.";

  useEffect(() => {
    let index = 0;
    setText(""); // 初期化

    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText.length < fullText.length) {
          return prevText + fullText[prevText.length];
        }
        return prevText;
      });
      index += 1;
      if (index === fullText.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 drop-shadow-sm">
      {text}
      <span className="inline-block w-1 h-[1em] bg-teal-600 dark:bg-teal-400 ml-1 align-middle animate-pulse"></span>
    </h1>
  );
}

export default TypingText;
