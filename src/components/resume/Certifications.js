import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="KPMG Data Analyst Virtual Internship"
            result="I delved into the world of data analytics with KPMG's virtual internship certification, offered by Forage. Gained hands-on experience in analyzing data and unlocking insights in a dynamic virtual environment."
            
          />
          <ResumeCard
            title="Data Analytics Essential by Cisco"
            result="Understood the fundamentals of data analytics with Cisco's essential course, equipping with crucial skills in data collection, analysis, and interpretation for informed decision-making in today's digital landscape."
          />
         
        </div>
      </div>
 {/* part Two */}

      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="PwC's Power Bi Virtual Case Experience"
            result="Experienced an interactive and hands-on virtual case study using Power BI, designed by PwC to sharpen the data visualization and analysis skills. "
          />
          <ResumeCard
            title="Learning Python"
            result="Successfully completed the comprehensive Learning Python course by Infosys Springboard, gaining proficiency in programming concepts,and practical Python applications. Eager to leverage acquired skills in a challenging role to develop innovative and efficient software solutions."
            
          />
        
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
