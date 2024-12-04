import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Pro from '../assets/proj3.png'

const Projects = () => {
  return (
    <div className=" pt-16 pb-10 sm:pt-16 lg:pb-16  md:h-[92vh]  ">
      <div className="px-7 mx-auto grid sm:grid-cols-2 gap-6">
        <div className=" mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1  ">
          <a href="/" className=" group h-48 col-span-3 md:h-80 ">
            <img
              src=""
              alt=""
              className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg "
            />
          </a>
          <div className=" flex flex-col col-span-4 p-4 mx-auto my-auto ">
            <h2 className=" text-gray-200 font-bold text-xl leading-10  ">
              Project #1
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint
              doloremque suscipit soluta perferendis eius explicabo minus
              dolorem aperiam vitae, nemo aut ipsa id itaque debitis obcaecati
              officiis assumenda numquam?
            </p>
            <div className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4  ">
              <AiFillGithub className=" w-[55px] h-auto " />
              <AiFillGithub className=" w-[55px] h-auto " />
            </div>
          </div>
        </div>

        <div className=" mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1  ">
          <a href="/" className=" group h-48 col-span-3 md:h-80 ">
            <img
              src=""
              alt=""
              className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg "
            />
          </a>
          <div className=" flex flex-col col-span-4 p-4 mx-auto my-auto ">
            <h2 className=" text-gray-200 font-bold text-xl leading-10  ">
              Project #1
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint
              doloremque suscipit soluta perferendis eius explicabo minus
              dolorem aperiam vitae, nemo aut ipsa id itaque debitis obcaecati
              officiis assumenda numquam?
            </p>
            <div className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4  ">
              <AiFillGithub className=" w-[55px] h-auto " />
              <AiFillGithub className=" w-[55px] h-auto " />
            </div>
          </div>
        </div>

        <div className=" mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1  ">
          <a href="/" className=" group h-48 col-span-3 md:h-80 ">
            <img
              src={Pro}
              alt=""
              className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg "
            />
          </a>
          <div className=" flex flex-col col-span-4 p-4 mx-auto my-auto ">
            <h2 className=" text-gray-200 font-bold text-xl leading-10  ">
              Project #1
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint
              doloremque suscipit soluta perferendis eius explicabo minus
              dolorem aperiam vitae, nemo aut ipsa id itaque debitis obcaecati
              officiis assumenda numquam?
            </p>
            <div className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4  ">
              <AiFillGithub className=" w-[55px] h-auto " />
              <AiFillGithub className=" w-[55px] h-auto " />
            </div>
          </div>
        </div>

        <div className=" mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1  ">
          <a href="/" className=" group h-48 col-span-3 md:h-80 ">
            <img
              src=""
              alt=""
              className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg "
            />
          </a>
          <div className=" flex flex-col col-span-4 p-4 mx-auto my-auto ">
            <h2 className=" text-gray-200 font-bold text-xl leading-10  ">
              Project #1
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint
              doloremque suscipit soluta perferendis eius explicabo minus
              dolorem aperiam vitae, nemo aut ipsa id itaque debitis obcaecati
              officiis assumenda numquam?
            </p>
            <div className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4  ">
              <AiFillGithub className=" w-[55px] h-auto " />
              <AiFillGithub className=" w-[55px] h-auto " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
