import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { taskOne, taskTwo } from "../../assets/index";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title des="Internship Tasks" />
    
      <div className="flex justify-center">
      <div className="w-1/2 p-6">
        
        <a href="https://github.com/sohang05/Data-Analyst-Internship/tree/main/Exploratory%20Data%20Analysis%20Using%20SQL" target="_blank">
        <Card
          title="Hotel Reservation Analysis"
          des="Analyzed hotel reservation data using SQL to uncover booking patterns, customer behavior, and trends for improved revenue management."
          src={taskOne}
        />
        </a>
      </div>
      <div className="w-1/2 p-6">
        <a href="https://github.com/sohang05/Data-Analyst-Internship/tree/main/Data%20Visualization%20Using%20Power%20Bi" target="_blank">
        <Card
          title="Indian Agricultural Analysis"
          des="Analyzed state and regional variations in agricultural production, yield, and area cultivated for various crops in India using SQL and Power BI."
          src={taskTwo}
        />
        </a>
      </div>
    </div>
    </section>
  );
}

export default Features