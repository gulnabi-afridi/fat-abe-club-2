import React from "react";
import {FaDiscord} from "react-icons/fa";
import {ImTwitter} from "react-icons/im";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";


function Footer() {
  return (
    <div className="w-full min-h-[700px] flex flex-col justify-center items-center gap-5 bg-green px-4 md:px-0">
      {/* =======> Logo */}
      <div className="w-[90px] md:w-[180px] h-[100px] md:h-[140px] relative">
        <Image src="/logo.png" fill alt="seo text here"></Image>
      </div>
      {/* ===========> name */}
      <p className="text-white text-[30px] md:text-[42px] font-BicycleLight">Fat Ape Club</p>
      <p className="text-white text-[20px] md:text-[26px]  font-BicycleThin">
        All Rights Reserved 2021
      </p>
      <p className="text-white text-[20px] md:text-[26px] font-BicycleThin">
        Terms and conditions
      </p>
      <p className="w-[100%] break-words text-center text-white text-[20px] md:text-[26px]  font-BicycleThin">
        0xF3114DD5c5b50a573E66596563D15A630ED359b4
      </p>
      {/* social links */}
      <div className="w-full flex gap-4 justify-center items-center mt-8 ">
        {socialLinks.map((nav, index) => {
          return <Link href="/">{nav.name}</Link>;
        })}
      </div>
    </div>
  );
}

const socialLinks = [
  {
    name: <FaDiscord className="text-[50px] md:text-[66px] text-white" />,
  },
  {
    name: <ImTwitter className="text-[50px] md:text-[66px] text-white" />,
  },
  {
    name: <AiOutlineInstagram className="text-[50px] md:text-[66px] text-white" />,
  },
  {
    name: <BsFacebook className="text-[50px] md:text-[66px] text-white" />,
  },
];

export default Footer;
