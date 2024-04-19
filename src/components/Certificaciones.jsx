import { useState } from "react";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

import hardware from "../img/hardware.jpg";
import { certificaciones } from "../data/certificaciones";

const Certificaciones = () => {
  const [desplegar, setdesplegar] = useState(true);

  const onclick = () => {
    setdesplegar(!desplegar);
  };

  return (
    <div
      id="certificaciones"
      className="flex flex-col justify-center items-center lg:mt-20 lg:mb-40 md:mt-20 md:mb-40 sm:mt-10 sm:mb-20"
    >
      <div className="flex flex-col justify-center items-start w-full lg:px-10 md:px-5 sm:px-2">
        <div
          className={`flex flex-row justify-start items-center cursor-pointer py-4`}
          onClick={onclick}
        >
          <BiSolidRightArrow
            className={`lg:text-2xl md:text-xl sm:text-base lg:mr-3 md:mr-3 sm:mr-2 text-gray-600 ${
              desplegar == true ? "flex" : "hidden"
            }`}
          />
          <BiSolidDownArrow
            className={`lg:text-2xl md:text-xl sm:text-base lg:mr-3 md:mr-3 sm:mr-2 text-gray-600 ${
              desplegar == true ? "hidden" : "flex"
            }`}
          />
          <h3 className="title-history lg:text-3xl md:text-2xl sm:text-xl font-semibold lg:py-2 md:py-2 sm:py-1 hover:text-blue-700 uppercase">
            Certificaciones
          </h3>
        </div>

        <div
          className={`flex flex-col ${desplegar == true ? "hidden" : "flex"}`}
        >
          {certificaciones.map((cert) => (
            <div
              key={cert.id}
              className="lg:my-4 md:my-4 sm:my-2 hover:scale-105"
            >
              <h3 className="lg:pl-10 md:pl-8 sm:pl-5 lg:text-3xl md:text-2xl sm:text-xl font-semibold hover:text-blue-700">
                {cert.nombre}
              </h3>
              <p className="lg:pl-10 md:pl-8 sm:pl-5 font-semibold italic text-gray-500 dark:text-gray-100">
                {cert.academia}
              </p>
              <a href={cert.url} target="_blank">
                <img src={hardware} alt="" className="" />
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Certificaciones;
