import React from "react";

function Target() {
  return (
    <div className="t-main flex flex-col justify-center items-center bg-gray-950 border-black border-2 rounded-xl mx-10 my-10 w-80 h-auto p-16 pb-2 text-gray-100 ">
      <div className="t-name mb-3 text-xl">Reineiro Monterrosa </div>
      <div className="t-descripcion text-xs bg-gray-800 rounded-md p-1">
        Software developer
      </div>
      <div className="t-box flex  m-4">
        <div className="t-face  bg-gray-800 rounded-md mx-1 text-transparent w-7 h-7" >
          face
        </div>
        <div className="t-twitter  bg-gray-800 rounded-md mx-1 text-transparent w-7 h-7">
          twit
        </div>
        <div className="t-instagram  bg-gray-800 rounded-md mx-1 text-transparent w-7 h-7 ">
          inst
        </div>
        <div className="t-instagram  bg-gray-800 rounded-md mx-1 text-transparent w-7 h-7">
          link
        </div>
      </div>
      <div className="t-box-2 items-start bg-gray-800 rounded-md w-60">
        <div className="t-phone flex flex-col justify-center items-left  border-gray-700 border-b-2 mt-4 text-xs pb-2">
          <p className=" absolute pl-3 text-xl ">📱</p>
          <div className="pl-12">
            <h3>Phone</h3>
            <p>3043819339</p>
          </div>
        </div>
        <div className="t-email flex flex-col justify-center items-left border-gray-700 border-b-2 text-xs py-2">
          <p className=" absolute pl-3 text-xl ">📧</p>
          <div className="pl-12">
            <h3>Email</h3>
            <p>reydavidquiroz@gmail.com</p>
          </div>
        </div>
        <div className="t-direccion flex flex-col justify-center items-left border-gray-700 border-b-2 text-xs py-2">
          <p className=" absolute  pl-3 text-xl ">📍</p>
          <div className="pl-12">
            <h3>Direccion</h3>
            <p>TV 35 29a-49sur</p>
          </div>
        </div>
        <div className="t-birthday flex flex-col justify-center items-left mb-4 text-xs pt-2">
          <p className=" absolute pl-3 text-xl ">🎂</p>
          <div className="pl-12">
            <h3>Birthday</h3>
            <p>28/02/1997</p>
          </div>
        </div>
      </div>
      <div className="t-linkedin bg-blue-600 rounded-md text-sm text-gray-100 p-1 mt-6 mb-4">
        Descargar CV
      </div>
    </div>
  );
}

export default Target;
