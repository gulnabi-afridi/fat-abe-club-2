import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Slide } from "react-awesome-reveal";

function LookUp() {
  const [fatId, Set_Fat_Id] = useState("");
  const [validation, Set_Validation] = useState(false);

  const updateFateId = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    Set_Fat_Id(value);
  };

  const Valdation_Handle = (e) => {
    e.preventDefault();
    if (fatId === "") {
      Set_Validation(true);
    }
  };

  console.log(fatId);
  console.log(fatId);
  return (
    <div className="w-full">
      <div className="w-full max-w-[1180px] min-h-[calc(100vh-110px)] m-auto flex flex-col justify-start items-center px-4 md:px-0 py-16 gap-10">
        <Slide direction="down" triggerOnce={true}>
          <p className="text-[40px] md:text-[56px] font-Net uppercase text-white">
            LOOKUP
          </p>
        </Slide>
        <Slide direction="down" triggerOnce={true} delay={20}>
          <p className="text-[24px] md:text-[28px] text-center font-BicycleRugular text-white">
            Before buying any ape to breed, you should always lookup if he's
            ready to breed.
          </p>
        </Slide>
        <Slide direction="down" triggerOnce={true} delay={30}>
          <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
            Breeding rare Fat Apes increases your odds of getting a{" "}
            <span className="text-white font-BicycleRegular">
              rare baby as well.
            </span>
          </p>
        </Slide>
        <Slide direction="down" triggerOnce={true} delay={40}>
          <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
            <span className="text-white font-BicycleRegular">Reveal:</span>{" "}
            &nbsp;&nbsp; 4 Weeks
          </p>
        </Slide>
        <Slide direction="down" triggerOnce={true} delay={50}>
          <p className="text-[24px] md:text-[28px] text-center font-BicycleThin text-darkWhite">
            <span className="text-white font-BicycleRegular">Cooldown: </span>{" "}
            &nbsp;&nbsp;8 Weeks
          </p>
        </Slide>
        {/* =============> form */}
        <form
          onSubmit={(e) => Valdation_Handle(e)}
          action=""
          className="w-full flex flex-col justify-center items-center gap-10"
        >
          <Slide direction="down" triggerOnce delay={60}>
            <TextField
              onChange={(e) => updateFateId(e)}
              id="fat-ape-id"
              value={fatId}
              label="Fat Ape ID"
              variant="outlined"
            />
          </Slide>
          <Slide
            direction="down"
            triggerOnce={true}
            delay={60}
            className="w-full h-full flex justify-center items-center"
          >
            <button
              type="submit"
              className="hover:scale-x-110 transition-all duration-10000 flex justify-center items-center text-[20px] md:text-[26px] bg-black text-white font-Net uppercase py-3 w-full max-w-[350px] rounded-md spacing tracking-wide border-2 border-solid"
            >
              lookup an ape
            </button>
          </Slide>
        </form>
        {validation && (
          <div className="fixed max-w-[500px] w-full flex gap-6 justify-center items-center text-white bg-black p-4 z-30">
            <AiOutlineExclamationCircle className="text-[#d54c4c] text-[24px]" />
            <p className="text-[#d54c4c] font-Net text-[16px] text-center md:text-[19px]">
              LOOKS LIKE METAMASK IS NOT INSTALLED
            </p>
            <RxCross2
              onClick={() => Set_Validation(false)}
              className="text-[#d54c4c] text-[24px] cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default LookUp;
