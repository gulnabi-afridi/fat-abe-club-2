import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Slide } from "react-awesome-reveal";

function Faq() {
  return (
    <div className="w-full">
      <div className="max-w-[1180px] w-full flex flex-col gap-6 justify-start items-center m-auto py-18 px-4 md:px-0">
        <Slide direction="down" triggerOnce={true}>
          <p className="w-full text-center text-[40px] md:text-[110px] font-Net uppercase text-white">
            faqs
          </p>
        </Slide>
        {/* ==================== */}
        {FaqData.map((item, index) => {
          return (
          <Slide direction="left" triggerOnce={true}>

            <Accordion
              sx={{
                "&.MuiPaper-root": {
                  background: "#58805a",
                  borderRadius: "30px",
                  p: 1,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="uppercase text-[18px] md:text-[26px] font-Net text-white w-full h-full flex justify-start items-center">
                  {item.ques}
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className=" text-white text-[24px] md:text-[30px] font-BicycleThin w-full h-full flex justify-start items-center">
                  {item.ans}
                </p>
              </AccordionDetails>
            </Accordion>
          </Slide>
          );
        })}
      </div>
    </div>
  );
}

const FaqData = [
  {
    ques: "   How much is a fat nft?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "Where can i view my fat ape nfts?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "will there be a presale?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: " when will we be able to mint fast apes?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "what can i do with my fate ape?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "are there secondary sale royalties?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "do i won the fat ape after minting it?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
];

export default Faq;
