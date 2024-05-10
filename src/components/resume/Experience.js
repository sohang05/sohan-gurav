import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";


const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Analyst - Intern"
            subTitle="COMPANY - MENTORNESS"
            result={
              <div>
                <span>DURATION : (1/03/2024 - 31/03/2024)&nbsp;&nbsp;&nbsp;&nbsp;PLACE : Remote</span>
              </div>
            }
            des={
              <>
                <p>This was a one-month virtual internship program conducted by Mentorness. The internship
            provided exposure to industry- level data analytics tasks, aiding in the acquisition of
            necessary skills. Throughout the internship, I undertook three major tasks:</p>
              <ul>
                  {["▪ Article writing",
                    "▪ Conducting Exploratory Data Analysis using SQL and creating a PowerPoint presentation.",
                    "▪ Data visualization using Power Bi and preparing a PowerPoint presentation.",
                   ].map((point, index) => (
                     <li key={index}>{point}</li>
                  ))}
              </ul>
              </>
              }
          />
          <ResumeCard
            title="Supply Chain Management - Intern"
            subTitle="COMPANY - TATA HITACHI CONSTRUCTION AND MACHINERY PVT. LTD."
            result={
              <div>
                <span>DURATION : (Sept.2021 - Oct.2021)&nbsp;&nbsp;&nbsp;&nbsp;PLACE : Dharwad, Karnataka</span>
              </div>
            }
            des="During the internship period, I learned about the production process within the company. As part of the internship, I undertook a project focused on reducing the PPM score using the 7QC tools. Through this project, I gained insights into the various types of defects that occur during the production process and learned strategies to reduce these defects, ultimately improving production rates and quality. The outcomes of this project will enable the company to implement appropriate measures to enhance productivity.An internship is pursued as an integral component of college curriculum aimed at comprehending the production processes within an industry and acquiring essential skills and practical experience."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
