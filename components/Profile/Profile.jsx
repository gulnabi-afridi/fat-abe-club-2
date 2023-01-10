import React from "react";
import { Slide } from "react-awesome-reveal";

function Profile() {
  return (
    <div className="w-full bg-blue">
      <div className="w-full max-w-[1180px] h-[calc(100vh-110px)] m-auto flex flex-col justify-start items-center px-4 md:px-0 py-16 gap-10">
        <Slide direction="down" triggerOnce={true}>
          <p className="text-[40px] md:text-[56px] font-Net uppercase text-white">
            Profile
          </p>
        </Slide>
        {/* =============> install metamask button */}
        <Slide
          direction="down"
          triggerOnce={true}
          delay={30}
          className="w-full flex justify-center items-center"
        >
          <button className="hover:scale-x-110 transition-all duration-10000 flex justify-center items-center text-[20px] md:text-[26px] bg-black text-white font-Net uppercase py-3 w-full max-w-[340px] rounded-md spacing tracking-wide border-2 border-solid">
            install metamask
          </button>
        </Slide>
      </div>
    </div>
  );
}

export default Profile;
