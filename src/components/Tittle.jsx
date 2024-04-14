import React from "react";
import perfil from "../img/perfil.png";
import { GrLinkedin } from "react-icons/gr";
import AboutMe from "./AboutMe";

function Tittle() {
  return (
    <div className=" flex flex-col h-36">
      <div>
        <div className=" w-52 h-52 absolute mt-12 ml-24 text-transparent border-solid border-2 border-violet-600">
          PHOTO
        </div>
        <div className="  w-52 h-52 absolute  ml-24 mt-12 text-transparent ">
          <div>
            <img
              className="rounded-full border-blue-900 border-solid border-2 w-52 h-52"
              src={perfil}
              alt="photo"
            />
          </div>
        </div>
        <div className="cursor-pointer ml-10">
          <GrLinkedin className="text-indigo-600 absolute rounded-lg hover:bg-gray-700 cursor-pointer w-10 h-10  p-1 text-3xl ml-14 pt-1 mt-1" />
        </div>
        <div className=" w-80 h-32 absolute -z-20 m-10 mt-0 rounded-xl bg-gray-950">
          {" "}
          {/*-z-20 es para superpones contenedores*/}
        </div>
      </div>
      <div className="w-full flex justify-center h-44 mt-20 p-8 pl-0 bg-blue-900 text-cyan-50 ">
        <div className=" text-gray-100 text-4xl justify-start start ">
          <div className="flex flex-col ml-52 w-52">
            <p className="font-extrabold">REINEIRO</p>
            <p className="pl-12 font-extrabold">MONTERROSA</p>
          </div>
        </div>
      </div>
      <AboutMe />
    </div>
  );
}

export default Tittle;
