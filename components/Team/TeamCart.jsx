import React from "react";
import Image from "next/image";

function TeamCart({ teamArray }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 px-10 md:px-4 xl:px-0">
      {/* member image */}
      <div className="w-full h-[300px] sm:h-[520px] md:h-[320px] lg:h-[260px] relative ">
        <Image
          src={teamArray.image}
          fill
          alt="seo text here"
          className="border-4 border-solid border-green rounded-[70px]"
        ></Image>
      </div>
      {/* member name */}
      <p className="text-white h-auto sm:h-[80px] xl:h-auto text-center font-Net text-[28px] md:text-[34px]">
        {teamArray.name}
      </p>
      {/* status */}
      <p className="text-[24px] h-auto sm:h-[40px] xl:h-auto xl:text-[28px] text-center font-BicycleThin text-darkWhite">
        {teamArray.status}
      </p>
    </div>
  );
}

export default TeamCart;
