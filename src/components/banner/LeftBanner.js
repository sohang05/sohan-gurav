import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaLinkedinIn,FaGithub, FaPython, FaDatabase} from "react-icons/fa";
import {SiPowerbi,SiMicrosoftexcel } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Mechanical Engineer","an aspiring Data Analyst."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full  flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sohan Gurav</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p style={{ textAlign: 'justify' }}
        className="text-base font-bodyFont leading-6 tracking-wide">
        Welcome to my data analyst portfolio, where curiosity meets analytics! As a recent graduate entering the dynamic world of data, I've assembled a collection of projects that reflect my enthusiasm, adaptability, and analytical prowess. From diving into datasets to uncover hidden patterns to crafting compelling visualizations that tell a story, each project demonstrates my commitment to turning raw data into actionable insights. With a solid foundation in statistics, programming, and data manipulation, I'm ready to contribute to projects that harness the power of data to drive innovation and solve real-world challenges.
        </p>
      </div>
      <div className="w-1/2 flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href="https://github.com/sohang05/Portfolio-Projects/tree/main" ><span className="bannerIcon">
            <FaGithub />
          </span></a>
          <a href="https://www.linkedin.com/in/sohan-gurav-b8789b1a5/" ><span className="bannerIcon">
            <FaLinkedinIn />
          </span></a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython/>
            </span>
            <span className="bannerIcon">
              <FaDatabase/>
            </span>
            <span className="bannerIcon">
              <SiPowerbi />
            </span>
            <span className="bannerIcon">
              <SiMicrosoftexcel/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner