import React from "react";
import chatapplication from "../assets/portfolio/chatapplication.jpg";
import bank from "../assets/portfolio/bank.png";
import restaurant from "../assets/portfolio/restaurant.jpg";
import blockchain from "../assets/portfolio/blockchain.jpg";
import fitness from "../assets/portfolio/fitness.jpg";
import ecommerce from "../assets/portfolio/ecommerce.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: chatapplication,
    },
    {
      id: 2,
      src: blockchain,
    },
    {
      id: 3,
      src: restaurant,
    },
    {
      id: 4,
      src: fitness,
    },
    {
      id: 5,
      src: bank,
    },
    {
      id: 6,
      src: ecommerce,
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Projects coming soon to Barq & Barter</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-100 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Coming Soon
                </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
