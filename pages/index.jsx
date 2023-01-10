import React from "react";
import Image from "next/image";
import Home from "../components/Home/Home";
import NftCollection from "../components/NftsCollection/NftCollection";
import Welcome from "../components/Welcome/Welcome";
import Roadmap from "../components/Roadmap/Roadmap";
import DevelopmentRoadmap from "../components/DevelopmentRoadmap/DevelopmentRoadmap";
import Faq from "../components/Faq/Faq";
import Team from "../components/Team/Team";
import LadiesClub from "../components/LadiesClub/LadiesClub";


function index() {
  return (
    <>
      <Home />
      <NftCollection />
      <Welcome/>
      <Roadmap/>
      <DevelopmentRoadmap/>
      <Faq/>
      <Team/>
    </>
  );
}

export default index;
