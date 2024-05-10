import React from "react";
import { motion } from "framer-motion";
import { sslcPic, pucPic, degreePic} from "../../assets/index";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E MECHANICAL ENGINEER"
            subTitle="KLS Vishwanathrao Deshpande Institute of Technology"
            result={
              <div>
                <span>DURATION : (2018 - 2022)</span>
                <br />
                <span>RESULT : CGPA - 8.62/10</span>
                <br />
                <span>PLACE : Haliyal, Karnataka</span>
              </div>
            }
          />
          <ResumeCard
            title="PUC/XII"
            subTitle="Govindram Seksaria Science College" 
            result={
              <div>
                <span>DURATION : (2017 - 2018)</span>
                <br />
                <span>RESULT : 83.5%</span>
                <br />
                <span>PLACE : Belgaum, Karnataka</span>
              </div>
            }
          />
          <ResumeCard
            title="SSLC/X"
            subTitle="Mount Carmel CBSE School"
            result={
              <div>
                <span>DURATION : (2015 - 2016)</span>
                <br />
                <span>RESULT : CGPA - 10/10</span>
                <br />
                <span>PLACE : Ramnagar, Karnataka</span>
              </div>
            }
          />
        </div>
      </div>
      {/* part Two */}
      
  <div className="w-full lgl:w-1/2 flex flex-col justify-center items-center relative">
  <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015-2022</p>
          <h2 className="text-3xl md:text-4xl font-bold"></h2>
        </div>
    <img
        className="w-[600px] h-[280px] lgl:w-[600px] lgl:h-[280px] z-10"
        src={degreePic}
    />
    <br></br>
    <br></br>
    <br></br>
    
    <div className="absolute bottom-0 w-[600px] h-[280px] lgl:w-[600px] lgl:h-[280px]     bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>

    <img
        className="w-[600px] h-[280px] lgl:w-[600px] lgl:h-[280px] z-10"
        src={pucPic}
   />
   <br></br>
    <br></br>
    <br></br>

    <div className="absolute bottom-0 w-[600px] h-[280px] lgl:w-[600px] lgl:h-[280px] bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>

    <img
       className="w-[600px] h-[280px] lgl:w-[600px] lgl:h-[280px] z-10"
       src={sslcPic}
   />
    <div className="absolute bottom-0 w-[600px] h-[300px] lgl:w-[600px] lgl:h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>
   
  </div>
   </motion.div>
  );
};

export default Education;
