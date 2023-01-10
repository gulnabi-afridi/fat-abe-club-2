import React from "react";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

function Welcome() {
  return (
    <div className="w-full">
      <div className=" w-full flex flex-col gap-10 justify-center items-center max-w-[1180px] m-auto py-20 md:px-0 px-4">
        {/* ===========> monkey neft */}
        <div className="w-[360px] md:w-[580px] flex justify-center items-center h-[360px] md:h-[580px] relative">
          <Image src="/monkey.png" fill></Image>
          {/* ========> shadow */}
          <div className="absolute w-full h-full top-0 bottom-0 welcomeNftShadow "></div>
        </div>
        <Slide direction="down" triggerOnce={true}> <p className="text-[40px] md:text-[52px] font-Net uppercase text-white">welcome!</p></Slide>
        <Slide direction="down" triggerOnce={true} delay={4}><p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
          Welcome to the Fat Ape Club, a tribe of 9,999 obese apes that partied
          too much and didn’t exercise enough.
        </p></Slide>
       <Slide direction="down" triggerOnce={true}><p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
          Years ago, the Fat Apes used to live together on a remote island in
          the Pacific Ocean. However, most of them were captured by poachers,
          who then sold the Fat Apes to multiple zoos around the world for
          profit. Last week, 10 Fat Apes escaped from those zoos after being
          held captive for more than 20 years. They are now on their way to free
          their colleagues, but their ultimate goal remains unclear…
        </p></Slide> 
        {/* ==========>HEROIC APES */}
       <Slide direction="left" triggerOnce={true}> <p className="text-[40px] md:text-[52px]  font-Net uppercase text-white">HEROIC APES</p></Slide>
        <Slide direction="left" triggerOnce={true}><p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
          The Heroic Apes are the 10 Fat Apes who escaped from their cages to
          free their colleagues. Each owner of those rare Heroic Apes NFTs will
          be rewarded with a <span className="text-white font-BicycleRegular">$10,000</span>  bonus. Once the Fat Apes are sold out, the
          owner of the Lamborghini Heroic Ape will win <br/> <span className="text-white font-BicycleRegular">a 2020 Lamborghini Huracan.</span> 
        </p></Slide>
      </div>
    </div>
  );
}

export default Welcome;
