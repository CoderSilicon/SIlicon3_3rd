import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const LastGreet = () => {
  const [typeEffectL] = useTypewriter({
    words: [
      "Thank you for visiting!", // English
      "धन्यवाद, आपने विजिट किया!", // Hindi
      "ধন্যবাদ, আপনি পরিদর্শন করেছেন!", // Bengali
      "ଧନ୍ୟବାଦ, ଆପଣ ପରିଦର୍ଶନ କରିଛନ୍ତି!", // Odia
      "ధన్యవాదాలు, మీరు సందర్శించారు!", // Telugu
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="my-16 py-16 md:py-24 min-h-[200px]">
      <div className="max-w-screen-lg mx-auto text-center text-white">
        <p className="lg:text-3xl text-2xl font-semibold mb-6 text-[#38B2AC] poppins-regular">
          {typeEffectL}
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mb-4">
          We're glad you stopped by! Stay connected.
        </p>
      </div>
    </div>
  );
};

export default LastGreet;
