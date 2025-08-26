import TypingText from './TypingText';

function Introduction() {
  return (
    <section className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto py-8 px-4 sm:px-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
        Introduction
      </h2>
      <TypingText />
      <h3 className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-semibold">
        北海道大学情報科学院に所属している松尾宏太です。大学では体育会サッカー部に所属していました。<br />
        現在はHCI分野の領域において、寝ながらでもVRデバイスを使いやすくするインタラクションに関する研究を行っています。
      </h3>
    </section>
  );
}

export default Introduction;
