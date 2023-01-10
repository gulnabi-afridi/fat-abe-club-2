import React from "react";
import TeamCart from "./TeamCart";
import { Fade, Slide } from "react-awesome-reveal";

function Team() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1180px] m-auto py-20 flex flex-col gap-8 mb-16">
        <Slide direction="down" triggerOnce={true}>
          <p className="w-full text-center text-[40px] md:text-[110px] font-Net uppercase text-white">
            Team
          </p>
        </Slide>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TeamData.map((member, index) => {
            return (
              <Slide cascade={true} triggerOnce={true}>
                <TeamCart key={index} teamArray={TeamData[index]} />;
              </Slide>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const TeamData = [
  {
    image: "/Assets/Team/member1.png",
    name: `@FAT APE KEYBOARD`,
    status: "Senior Programmer",
  },
  {
    image: "/Assets/Team/member2.png",
    name: `@FAT APE CHIEF`,
    status: "Marketing Genius",
  },
  {
    image: "/Assets/Team/member3.png",
    name: `@DJ FAT APE`,
    status: "Chief of Communications",
  },
  {
    image: "/Assets/Team/member4.png",
    name: `@FAT APE BARISTA`,
    status: "Art Director",
  },
];

export default Team;
