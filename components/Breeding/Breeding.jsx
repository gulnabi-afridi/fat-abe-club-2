import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Slide } from "react-awesome-reveal";

function index() {
  const Router = useRouter();

  return (
    <div className="w-full bg-blue">
      <div className="w-full max-w-[1180px] min-h-[calc(100vh-110px)] m-auto flex flex-col justify-start items-center gap-10 py-20 px-4 md:px-0">
        <Slide direction="down" triggerOnce={true}>
          <p className="text-[40px] md:text-[56px] font-Net uppercase text-white">
            BREED APES
          </p>
        </Slide>
        <Slide direction="down" triggerOnce={true} delay={20}>
          <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
            Once the mating is done, you will automatically see your unrevealed
            Baby Fat Ape appear in your wallet, but it will take{" "}
            <span className="text-white font-BicycleRegular">4 weeks</span> for
            the babies to reveal. There is also a{" "}
            <span className="text-white font-BicycleRegular">
              8 weeks cooldown{" "}
            </span>{" "}
            for the parents, which means that the Fat Apes can only breed once
            every 8 weeks.
          </p>
        </Slide>
        <Slide direction="down" triggerOnce={true} delay={30}>
          <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
            Breeding rare Fat Apes increases your odds of getting a{" "}
            <span className="text-white font-BicycleRegular">rare baby </span>{" "}
            as well.
          </p>
        </Slide>
        <Slide direction="down" triggerOnce={true} delay={40}>
          <p className="text-[24px] md:text-[28px] text-center font-BicycleRugular text-white">
            Before buying any ape to breed, you should always lookup if he's
            ready to breed.
          </p>
        </Slide>
        {/* =============> Lookup an ape button*/}
        <Slide direction="down" triggerOnce={true} delay={50} className="w-full h-full flex justify-center items-center">
          <button
            onClick={() => Router.push("/look-up")}
            className="hover:scale-x-110 transition-all duration-10000 flex justify-center items-center text-[20px] md:text-[26px] bg-black text-white font-Net uppercase py-3 w-full max-w-[310px] rounded-md spacing tracking-wide border-2 border-solid"
          >
            Lookup an ape
          </button>
        </Slide>
        {/* ==========>padre + dame */}
        <div className="w-full h-[1000px] md:h-[500px] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-14 md:gap-20 px-0 md:px-10">
          {/* ========> padre */}
          <Slide direction="down" triggerOnce={true} delay={60} className="w-full h-full">
            <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
              <p className="text-[26px] md:text-[32px] text-white font-Net uppercase">
                padre
              </p>
              <Link
                href="/"
                className="w-full h-full bg-black border-4 border-solid border-green rounded-[70px] flex justify-center items-center"
              >
                <p className="text-white text-[60px]">+</p>
              </Link>
            </div>
          </Slide>
          {/* ================Dame> */}
          <Slide direction="down" triggerOnce={true} delay={90} className="w-full h-full">

          <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
            <p className="text-[26px] md:text-[32px] text-white font-Net">
              DAME
            </p>
            <Link
              href="/"
              className="w-full h-full bg-black border-4 border-solid border-green rounded-[70px] flex justify-center items-center"
            >
              <p className="text-white text-[60px]">+</p>
            </Link>
          </div>
          </Slide>
        </div>
        {/* ===============> install metamask button */}
        <Slide direction="down" triggerOnce={true} delay={120}>

        <button className="flex justify-center items-center text-[20px] md:text-[26px] bg-black text-white font-Net uppercase py-3 w-full max-w-[330px] rounded-md spacing tracking-wide border-2 border-solid">
          install metamask
        </button>
        </Slide>
      </div>
    </div>
  );
}

export default index;
