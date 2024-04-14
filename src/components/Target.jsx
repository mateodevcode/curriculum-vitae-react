import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuCake } from "react-icons/lu";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Target() {
  return (
    <div className="pl-10">
      <div className="t-main flex flex-col justify-start items-center bg-gray-950 border-black border-2 rounded-xl  mt-12 w-80 h-auto p-16 pb-2 text-gray-100 ">
        <div className="t-descripcion text-center text-lg bg-gray-800 rounded-md w-48 mt-5  ">
          Software developer
        </div>
        <div className="t-box flex items-center justify-center  m-4">
          <div className="t-face items-center justify-center cursor-pointer hover:bg-indigo-600  bg-gray-800 rounded-md mx-1 text-xl w-7 h-7">
            <p className="absolute pl-1 pt-1">
              <BsFacebook />
            </p>
          </div>
          <div className="t-twitter items-center justify-center cursor-pointer hover:bg-indigo-600 bg-gray-800 rounded-md mx-1 text-xl w-7 h-7">
            <p className="absolute pl-1 pt-1">
              <FaSquareXTwitter />
            </p>
          </div>
          <div className="t-instagram items-center justify-center cursor-pointer hover:bg-indigo-600 bg-gray-800 rounded-md mx-1 text-xl w-7 h-7 ">
            <p className="absolute pl-1 pt-1">
              <RiInstagramFill />
            </p>
          </div>
        </div>
        <div className="t-box-2 items-start bg-gray-800 rounded-md w-60">
          <div className="t-phone flex flex-col justify-center items-left  border-gray-700 border-b-2 mt-4 text-xs pb-2">
            <p className=" absolute pl-3 text-xl ">
              <HiOutlineDevicePhoneMobile />
            </p>
            <div className="pl-12">
              <h3>Phone</h3>
              <p>3043819339</p>
            </div>
          </div>
          <div className="t-email flex flex-col justify-center items-left border-gray-700 border-b-2 text-xs py-2">
            <p className=" absolute pl-3 text-xl ">
              <MdOutlineMailOutline />
            </p>
            <div className="pl-12">
              <h3>Email</h3>
              <p>reydavidquiroz@gmail.com</p>
            </div>
          </div>
          <div className="t-direccion flex flex-col justify-center items-left border-gray-700 border-b-2 text-xs py-2">
            <p className=" absolute  pl-3 text-xl ">
              <IoLocationOutline />
            </p>
            <div className="pl-12">
              <h3>Direccion</h3>
              <p>TV 35 29a-49sur</p>
            </div>
          </div>
          <div className="t-birthday flex flex-col justify-center items-left mb-4 text-xs pt-2">
            <p className=" absolute pl-3 text-xl ">
              <LuCake />
            </p>
            <div className="pl-12">
              <h3>Birthday</h3>
              <p>28/02/1997</p>
            </div>
          </div>
        </div>
        <div className="t-linkedin bg-blue-600 rounded-md text-sm cursor-pointer hover:bg-gray-700 text-gray-100 p-1 mt-6 mb-4">
          Descargar CV
        </div>
      </div>{" "}
    </div>
  );
}

export default Target;
