import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

function DevelopmentRoadmap() {
  return (
    <div className="w-full ">
      <div className="max-w-[1180px] w-full flex flex-col justify-start items-center m-auto py-20 px-4 md:px-0">
        <Slide direction="down" triggerOnce={true}>
          <p className="w-full text-center text-[40px] md:text-[110px] font-Net uppercase text-white">
            DEVELOPMENT ROADMAP
          </p>
        </Slide>
        {/* ===========> marketing compaigns */}
        <Slide direction="left" triggerOnce={true} delay={10}>
          {DevelopmentRoadmapData.map((roadmap, index) => {
            return (
              <div key={index} className="w-full flex flex-col md:flex-row gap-12 justify-start items-center py-14 border-b-[1px] border-solid border-white">
                <p className="w-full md:w-[20%] text-center md:text-start text-[28px] md:text-[30px] font-Net uppercase text-white">
                  {roadmap.name}
                </p>

                <p className="w-full md:w-[80%] text-[24px] text-center md:text-end md:text-[28px] font-BicycleThin text-darkWhite">
                  {roadmap.description}
                </p>
              </div>
            );
          })}
        </Slide>
        {/* ============> */}
        <Slide triggerOnce={true} delay={10}>
          <div ke className="w-full flex flex-col md:flex-row gap-12 justify-start items-center py-14 border-b-[1px] border-solid border-white">
            <p className="w-full md:w-[20%] text-center md:text-start text-[28px] md:text-[30px] font-Net uppercase text-white">
              DIAMOND <br /> HANDS
            </p>
            <p className="w-full md:w-[80%] text-[24px] text-center md:text-end md:text-[28px] font-BicycleThin text-darkWhite">
              We will reward Fat Ape holders for helping the project grow and
              the community thrive.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
}

const DevelopmentRoadmapData = [
  {
    name: "MARKETING CAMPAIGNS",
    description: `After investing over ${(
      <span className="font-BicycleRegular text-[26px] md:text-[32px] text-white">
        $100,000
      </span>
    )} in marketing campaigns for our launch sale, we will continue injecting money in influencer marketing campaigns to keep the momentum going around the Fat Ape Club. We want to make sure your Fat Apes thrives through time, and we believe the best way to do this is by planning multiple advertising campaigns, even after the initial sale is over.`,
  },
  {
    name: `DIAMOND HANDS`,
    description: `We will reward ${(
      <span className="font-BicycleRegular text-[26px] md:text-[32px] text-white">
        Fat Ape holders
      </span>
    )} for helping the project grow and the community thrive.`,
  },
  {
    name: "BREEDING FUNCTIONS",
    description:
      "Once the mint is complete, we will start developing Phase 2 of the project, in which we will introduce breeding functions for your Fat Apes.",
  },
  {
    name: "COMMUNITY EMPOWERMENT",
    description:
      "A Discord manager will handle the Discord server once the project sells out. He will make sure the holders’ opinions are listened to and taken accounted of.",
  },
];
export default DevelopmentRoadmap;
