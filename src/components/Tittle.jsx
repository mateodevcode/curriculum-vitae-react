import React from "react";

function Tittle() {
  return (
    <div className=" flex flex-col h-40">
      <div>
        <div className=" w-48 h-48 absolute ml-96 mt-12 text-transparent border-solid border-2 border-violet-600">
          PHOTO
        </div>
        <div className=" bg-blue-800 w-48 h-48 absolute rounded-full ml-96 mt-12 text-transparent ">
          PHOTO
        </div>
        <div className=" w-80 h-20 absolute -z-20 ml-80 mt-0  bg-gray-950 text-transparent"> {/*-z-20 es para superpones contenedores*/}
          PHOTO
        </div>
      </div>
      <div className="w-full flex justify-center h-40 my-20 p-6 pl-0 bg-blue-900 text-cyan-50 ">
        <div className=" text-gray-100 text-4xl justify-start start ">
          <div className="flex flex-col ml-16 w-52">
            <p className="font-extrabold">REINEIRO</p>
            <p className="pl-12 font-extrabold">MONTERROSA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tittle;
