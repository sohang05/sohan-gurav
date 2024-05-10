import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Experience from "./Experience";

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [certificationsData, setCertificationsData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="MY RESUME" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setCertificationsData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setCertificationsData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setCertificationsData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          
          <li
            onClick={() =>
            setEducationData(false) &
            setSkillData(false) &
            setExperienceData(false) &
            setCertificationsData(true)
         }
          className={`${
          certificationsData
          ? "border-designColor rounded-lg"
          : "border-transparent"
         } resumeLi`}
      >
      Certifications
      </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {certificationsData && <Certifications />}
      {experienceData && <Experience />}
 
    </section>
  );
}

export default Resume