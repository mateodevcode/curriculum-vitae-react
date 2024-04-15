import { useState } from "react";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

import hardware from "../img/hardware.jpg";

const Certificaciones = () => {
  const [desplegar, setdesplegar] = useState(true);

  const onclick = () => {
    setdesplegar(!desplegar);
  };

  return (
    <div id="certificaciones" className="flex flex-col justify-center items-center mt-20 mb-40">
      <div className="flex flex-col justify-center items-start w-full px-10">
        <div
          className={`flex flex-row justify-start items-center cursor-pointer py-4`}
          onClick={onclick}
        >
          <BiSolidRightArrow
            className={`text-2xl mr-3 text-gray-600 ${
              desplegar == true ? "flex" : "hidden"
            }`}
          />
          <BiSolidDownArrow
            className={`text-2xl mr-3 text-gray-600 ${
              desplegar == true ? "hidden" : "flex"
            }`}
          />
          <h3 className="title-history text-3xl font-semibold py-2 uppercase hover:text-blue-700">
            Certificaciones
          </h3>
        </div>
        
        <div className={`flex flex-col ${desplegar == true ? "hidden" : "flex"}`}>
            
            <div className="my-4 hover:scale-105">
                <h3 className="pl-10 text-3xl font-semibold hover:text-blue-700">Linux</h3>
                <p className="pl-10 font-semibold italic text-gray-500">Cisco Network Academy</p>
                <a href="https://www.credly.com/badges/e0c84987-46ab-42ad-b03e-f79190fee693/linked_in_profile" target="_blank">
                <img src={hardware} alt="" className="" />
                </a>
            </div>

            <div className="my-4 hover:scale-105">
                <h3 className="pl-10 text-3xl font-semibold hover:text-blue-700">Linux</h3>
                <p className="pl-10 font-semibold italic text-gray-500">Cisco Network Academy</p>
                <a href="https://www.credly.com/badges/e0c84987-46ab-42ad-b03e-f79190fee693/linked_in_profile" target="_blank">
                <img src={hardware} alt="" className="" />
                </a>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Certificaciones;
