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
    }, 150); // 150ミリ秒ごとに1文字を追加

    return () => clearInterval(interval); // クリーンアップ
  }, []); // 空の依存配列で初回レンダリング時のみ実行

  return <h1>{text}</h1>;
}

export default TypingText;
