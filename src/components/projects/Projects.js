import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href="https://github.com/sohang05/Portfolio-Projects/tree/main/Customer%20Segmentation" target="_blank">
        <ProjectsCard
          title="Customer Segmentation Using SQL"
          des="Utilized SQL to identify high-value customers segments, leading to improved customer retention and lifetime value."
          src={projectOne}
          
        />
        </a>
        <a href="https://github.com/sohang05/Portfolio-Projects/tree/main/Diwali%20Sales%20Analysis" target="_blank">
        <ProjectsCard
          title="Python Diwali Sales Analysis"
          des="Analyzed Diwali sales data using Python to identify trends, customer behavior, and key performance indicators."
          src={projectTwo}
        />
        </a>
        <a href="https://github.com/sohang05/Portfolio-Projects/tree/main/Retail%20Supply%20Chain%20And%20Sales%20Analysis" target="_blank">
        <ProjectsCard
          title="Retail Supply Chain & Sales Analysis"
          des="Developed an interactive Power Bi dashboard to monitor and analyze retail supply chain performance and sales metrics."
          src={projectThree}
        />
        </a>
        <a href="https://github.com/sohang05/Portfolio-Projects/tree/main/Used%20Car%20Analysis%20Using%20Python" target="_blank">
        <ProjectsCard
          title="E-bay Used Cars Analysis"
          des="Analyzed trends in the used car market, identifying popular brands, models, and feature, and understanding consumer preferences."
          src={projectFour}
        />
        </a>
        <a href="https://github.com/sohang05/Portfolio-Projects/tree/main/Audible%20Sales%20Dashboard" target="_blank">
        <ProjectsCard
          title="Audible Sales Tableau Dashboard"
          des="Improved understanding of customer prefernces and audiobook trends, leading to better content recommendations and customer engagement."
          src={projectFive}
        /></a>
        <a href="https://www.novypro.com/profile_projects/sohangurav" target="_blank"> 
        <ProjectsCard
          title="Data Visualization"
          des="Developed insightful and interactive dashboards using Power Bi and Tableau.
          This link contains all the dashboards that I have created on different topics."
          src={projectSix}
        />
        </a>
      </div>
    </section>
  );
}

export default Projects