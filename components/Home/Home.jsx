import React, { useState } from "react";
import Image from "next/image";
import Header from "../common/Header";

function Home() {
  const [Clicked, Set_Clicked] = useState(false);

  return (
    <div className="w-full h-screen homeBgImage">
      <Header />
      {/* ==========monkey nft */}
      <div className="absolute bottom-0 left-[7%] md:left-[15%] lg:left-[33%]">
        <div className="w-[320px] md:w-[460px] md:h-[450px] h-[330px] relative">
          <Image src="/monkey.png" fill></Image>
          <button
            onClick={() => {
              Set_Clicked(!Clicked);
            }}
            className={`absolute bottom-[18%] md:bottom-[25%] left-[0%] sm:left-[13%] md:left-[25%] flex justify-center items-center text-[24px] bg-black text-white font-Net uppercase w-full max-w-[300px] py-4 rounded-md spacing tracking-wide hover:scale-x-110 transition-all duration-10000 ${Clicked&& `translate-y-[2px]`}`}
          >
            buy on opensea
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
