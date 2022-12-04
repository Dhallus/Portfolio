import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Education = () => {
  return (
    <div
      name="education"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
           FULL STACK DEVELOPER
          </h2>
          <p className="text-white py-4 max-w-md">
             BARQ & BARTER, making your business succeed is my mission. <hr></hr>
             <br />
             Greetings, my name is Duane Walker. With the
            experience I have aquired at Robertson College my goal is to help launch your business to it's final destination.
            As a Full Stack Developer (Education: 2022-2022) let my diploma go to work for you from the front to the back end.
           
          </p>

          <div>
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
