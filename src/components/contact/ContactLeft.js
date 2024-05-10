import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sohan Gurav</h3>
        <p className="text-lg font-normal text-gray-400">
          Aspiring Data Analyst
        </p>
        <p style={{textAlign:'justify'}} className="text-base text-gray-400 tracking-wide">
        Interested in discussing job opportunities or potential collaborations? Feel free to get in touch, and let's explore how my skills and enthusiasm in data analysis can benefit your team!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8105101743</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sohan02official@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/sohang05/Portfolio-Projects/tree/main" ><span className="bannerIcon">
            <FaGithub />
          </span></a>
          <a href="https://www.linkedin.com/in/sohan-gurav-b8789b1a5/" ><span className="bannerIcon">
            <FaLinkedinIn />
          </span></a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft