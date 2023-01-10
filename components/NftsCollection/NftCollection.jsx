import React, { useEffect, useState } from "react";
import Image from "next/image";

function NftCollection() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollX2, setScrollX2] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollX(window.scrollY);
      setScrollX2(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-full overflow-hidden relative z-20">
      <div className="w-full h-full flex flex-col gap-12 pt-[160px] pb-[80px] -mt-[90px] -rotate-6">
        {/* ===========> top bar */}
        <div
          className="fitContent flex justify-start items-start gap-4"
          style={{ transform: `translateX(${scrollX - 1200}px)` }}
        >
          {/* ================>nft */}
          {FirstNfyBar.map((nft, index) => {
            return (
              <div key={index} className="w-[300px] h-[320px] relative">
                <Image
                  src={nft.name}
                  fill
                  className="rounded-[60px] border-[3px] border-solid border-white"
                ></Image>
              </div>
            );
          })}
        </div>
        {/* ===================== bottom bar */}
        <div
          className="fitContent flex justify-start items-start gap-4"
          style={{ transform: `translateX(${-scrollX - 1200}px)` }}
        >
          {/* ================>nft */}
          {SecNfyBar.map((nft, index) => {
            return (
              <div key={index} className="w-[300px] h-[320px] relative">
                <Image
                  src={nft.name}
                  fill
                  className="rounded-[60px] border-[3px] border-solid border-white"
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const FirstNfyBar = [
  {
    name: "/Assets/Nfts/nft1.jpg",
  },
  {
    name: "/Assets/Nfts/nft2.jpg",
  },
  {
    name: "/Assets/Nfts/nft3.jpg",
  },
  {
    name: "/Assets/Nfts/nft4.jpg",
  },
  {
    name: "/Assets/Nfts/nft5.jpg",
  },
  {
    name: "/Assets/Nfts/nft6.jpg",
  },
  {
    name: "/Assets/Nfts/nft7.jpg",
  },
  {
    name: "/Assets/Nfts/nft8.jpg",
  },
  {
    name: "/Assets/Nfts/nft9.jpg",
  },
  {
    name: "/Assets/Nfts/nft10.jpg",
  },
  {
    name: "/Assets/Nfts/nft11.jpg",
  },
  {
    name: "/Assets/Nfts/nft12.jpg",
  },
  {
    name: "/Assets/Nfts/nft13.jpg",
  },
];
const SecNfyBar = [
  {
    name: "/Assets/Nfts/nft14.jpg",
  },
  {
    name: "/Assets/Nfts/nft15.jpg",
  },
  {
    name: "/Assets/Nfts/nft16.jpg",
  },
  {
    name: "/Assets/Nfts/nft17.jpg",
  },
  {
    name: "/Assets/Nfts/nft18.jpg",
  },
  {
    name: "/Assets/Nfts/nft19.jpg",
  },
  {
    name: "/Assets/Nfts/nft20.jpg",
  },
  {
    name: "/Assets/Nfts/nft21.jpg",
  },
  {
    name: "/Assets/Nfts/nft22.jpg",
  },
  {
    name: "/Assets/Nfts/nft3.jpg",
  },
  {
    name: "/Assets/Nfts/nft7.jpg",
  },
  {
    name: "/Assets/Nfts/nft2.jpg",
  },
  {
    name: "/Assets/Nfts/nft13.jpg",
  },
];
export default NftCollection;
