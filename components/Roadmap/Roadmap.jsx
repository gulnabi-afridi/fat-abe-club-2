import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Fade, Slide } from "react-awesome-reveal";

function Roadmap() {
  return (
    <div className="w-full flex">
      <div className="max-w-[1180px] w-full flex flex-col justify-start items-center m-auto py-18 px-4 lg:px-0">
          <Slide direction="down" triggerOnce={true}><p className="w-full text-center text-[40px] md:text-[110px] font-Net uppercase text-white">
            Roadmap
          </p>
          </Slide>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col px-4 py-4">
                <Slide direction="down" triggerOnce={true}>

                <p className="text-[25px] md:text-[28px] font-Net uppercase text-white">
                  0% - WELCOME TO THE CLUB!
                </p>
                </Slide>
                <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
                  Take a seat, join other fellow apes on Discord, and sip a
                  glass of champagne. We will be raffling 5 Fat Apes once we
                  reach 20,000 members on Discord.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className="flex flex-col px-4 py-4">
                <Slide direction="down" triggerOnce={true}>
                <p className="text-[25px] md:text-[28px] font-Net uppercase text-white">
                  25% - ENTRÉE DE CAVIAR
                </p>

                </Slide>
                <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
                  Fat Ape holders will be rewarded for thanking them of being
                  part of the community. 10% of the second-market royalties will
                  be dedicated to a special fund to ensure the Fat Ape Club’s
                  longevity through marketing campaigns and floor sweeps.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col px-4 py-4">
                <Slide direction="down" triggerOnce={true}>
                <p className="text-[25px] md:text-[28px] font-Net uppercase text-white">
                  50% - DRIPPY
                </p>

                </Slide>
                <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
                  Launch of the Fat Ape merch collection, with the option of
                  having your Fat Ape NFT printed on the merch.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col px-4 py-4">
                <Slide direction="down" triggerOnce={true}>

                <p className="text-[25px] md:text-[28px] font-Net uppercase text-white">
                  75% - TO THE MOON!
                </p>
                </Slide>
                <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
                  A total of 10 Fat Apes, including one Heroic Ape, will be
                  raffled among all the Fat Ape holders.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col px-4 py-4">
                <Slide direction="down" triggerOnce={true}>
                <p className="text-[25px] md:text-[28px] font-Net uppercase text-white">
                  100% - BREEDING
                </p>

                </Slide>
                <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
                  100% - BREEDING Our team will start implementing breeding
                  functions in the upcoming weeks after the launch, which will
                  allow Fat Apes holders to receive tokens and burn them to
                  create new, stronger apes. In order to benefit from these
                  breeding functions, you must own at least 2 Fat Apes.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default Roadmap;
