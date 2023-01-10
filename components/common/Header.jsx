import React, { useState } from "react";
import Image from "next/image";
import { MdPerson } from "react-icons/md";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useRouter } from "next/router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [Clicked, Set_Clicked] = useState(false);

  const Router = useRouter();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full min-h-[125px] flex justify-between items-center px-4 md:px-8 headerBg headerBoxShadow">
      {/* ===========> left portion */}
      <div
        onClick={() => Router.push("/")}
        className="flex justify-center items-center gap-3 md:gap-6 cursor-pointer"
      >
        {/* logo */}
        <div className="w-[60px] md:w-[80px] h-[50px] md:h-[70px] relative">
          <Image src="/logo.png" fill alt="seo text here"></Image>
        </div>
        <p className="text-white text-[25px] md:text-[34px] font-BicycleLight">
          Fat Ape Club
        </p>
      </div>
      {/* ==============> right portion */}
      <div className="flex justify-center items-center">
        {/* ======>join discord button */}
        <button
          onClick={() => {
            Set_Clicked(!Clicked);
          }}
          className={`md:flex hidden justify-center items-center text-[21px] bg-black text-white font-Net uppercase py-3 px-4 rounded-md spacing tracking-wide mr-12 hover:scale-x-110 transition-all duration-10000 ${Clicked&& `translate-y-[2px]`}`}
        >
          join discord
        </button>
        {/* ========> profile */}
        <MdPerson
          onClick={() => Router.push("/profile")}
          className="text-[44px] text-white mr-2 md:mr-4 cursor-pointer"
        />
        {/* ==========> Humburger */}
        <Hamburger
          className=" text-white"
          color="white"
          rounded
          size={34}
          toggled={isOpen}
          toggle={setIsOpen}
        />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="drawer"
        >
          <div className="flex flex-col justify-center items-start ">
            {/* =========>top bar */}
            <div className="w-full flex justify-center items-center py-10 px-2">
              {/* ======>join discord button */}
              <button className={`mr-12 flex justify-center items-center text-[21px] bg-black text-white font-Net uppercase py-3 px-4 rounded-md spacing tracking-wide hover:scale-x-110 transition-all duration-10000 ${Clicked && `translate-y-[1px]`}`}>
                join discord
              </button>
              {/* ========>profile account */}
              <MdPerson
                onClick={() => {
                  Router.push("/profile");
                  setIsOpen(false);
                }}
                className="text-[44px] text-white mr-4 cursor-pointer"
              />
              {/* cross icon */}
              <RxCross2
                onClick={toggleDrawer}
                className="text-white text-[44px] cursor-pointer"
              />
            </div>
            {/* ===========> Navigation links */}
            <div className="w-full h-full flex flex-col gap-8 justify-center items-center py-12 ">
              {navLink.map((nav, index) => {
                return (
                  <Link
                    onClick={() => {
                      Router.push(nav.path);
                      setIsOpen(false);
                    }}
                    href={nav.path}
                    className="text-white font-Net text-[28px] uppercase tracking-wide hover:scale-x-110 transition-all duration-10000"
                  >
                    {nav.name}
                  </Link>
                );
              })}
            </div>
            {/* ===========> social icons */}
            <div className="w-full flex gap-4 justify-center items-center mt-8 ">
              {socialLinks.map((nav, index) => {
                return <Link key={index} href="/" className="hover:scale-x-110 transition-all duration-10000">{nav.name}</Link>;
              })}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

const navLink = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "faq",
    path: "/",
  },
  {
    name: "breeding",
    path: "breeding",
  },
  {
    name: "ladies club",
    path: "ladiesclub",
  },
];

const socialLinks = [
  {
    name: <FaDiscord className="text-[66px] text-white" />,
  },
  {
    name: <ImTwitter className="text-[66px] text-white" />,
  },
  {
    name: <AiOutlineInstagram className="text-[66px] text-white" />,
  },
  {
    name: <BsFacebook className="text-[66px] text-white" />,
  },
];

export default Header;
