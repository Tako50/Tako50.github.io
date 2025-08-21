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
    <h1 className="
      text-xl sm:text-3xl md:text-4xl 
      font-extrabold text-blue-700 
      tracking-wide text-center 
      mb-4 break-words 
      px-2 max-w-xs sm:max-w-md md:max-w-lg mx-auto
    ">
      {text}
    </h1>
  );
}

export default TypingText;
