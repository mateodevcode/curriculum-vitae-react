import { useState } from "react";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

function HistoryExp() {
  const [desplegar, setdesplegar] = useState(false);

  const onclick = () => {
    setdesplegar(!desplegar);
  };

  return (
    <div id="experiencia-laboral" className="flex flex-col justify-center items-start w-full lg:px-10 md:px-5 sm:px-2">
      <div
        className={`flex flex-row justify-start items-center cursor-pointer lg:py-4 md:py-3 sm:py-2`}
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
          Experiencia Laboral
        </h3>
      </div>
      <div className={`flex flex-col ${desplegar == true ? "hidden" : "flex"}`}>
        {/* Historial de Experiencia Laboral */}

        <div className="historyExp flex flex-row justify-center items-start">
          <div className="flex flex-col justify-center items-center pl-1 mr-4">
            <div className="lg:w-4 lg:h-4 md:w-3 md:h-3 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
            <div className="bg-gray-400 lg:w-1 lg:h-72 md:w-1 md:h-72 sm:w-0.5 sm:h-64 -mt-2"></div>
          </div>
          <div>
            <div className="contenido-history lg:px-5 md:px-3 sm:px-1">
              <p className="tiempo-history lg:text-sm md:text-sm sm:text-xs text-gray-600 font-semibold">
                Jan 2022- Present
              </p>
              <p className="empresa-history lg:text-lg md:text-base sm:text-xs text-gray-600 italic mt-1">
                Company Name l 123 Anywhere St., Any City
              </p>
              <h4 className="cargo-history lg:text-xl md:text-lg sm:text-base font-semibold py-1">
                Desarrollador Frontend
              </h4>
              <p className="descripcion-history lg:text-base md:text-sm sm:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                molestiae totam fugit id reprehenderit provident doloribus ab
                soluta perspiciatis earum suscipit dicta, est ipsum ipsa,
                tempore repellendus deserunt, praesentium debitis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Labore autem quod
                dolore natus at suscipit consequuntur rem facere ab. Maiores
                vitae earum eaque natus iusto atque dolorum voluptate a
                adipisci.
              </p>
            </div>
          </div>
        </div>

        <div className="historyExp flex flex-row justify-center items-start">
          <div className="flex flex-col justify-center items-center pl-1 mr-4">
            <div className="lg:w-4 lg:h-4 md:w-3 md:h-3 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
            <div className="bg-gray-400 lg:w-1 lg:h-72 md:w-1 md:h-72 sm:w-0.5 sm:h-64 -mt-2"></div>
          </div>
          <div>
            <div className="contenido-history lg:px-5 md:px-3 sm:px-1">
              <p className="tiempo-history lg:text-sm md:text-sm sm:text-xs text-gray-600 font-semibold">
                Jan 2022- Present
              </p>
              <p className="empresa-history lg:text-lg md:text-base sm:text-xs text-gray-600 italic mt-1">
                Company Name l 123 Anywhere St., Any City
              </p>
              <h4 className="cargo-history lg:text-xl md:text-lg sm:text-base font-semibold py-1">
                Desarrollador Frontend
              </h4>
              <p className="descripcion-history lg:text-base md:text-sm sm:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                molestiae totam fugit id reprehenderit provident doloribus ab
                soluta perspiciatis earum suscipit dicta, est ipsum ipsa,
                tempore repellendus deserunt, praesentium debitis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Labore autem quod
                dolore natus at suscipit consequuntur rem facere ab. Maiores
                vitae earum eaque natus iusto atque dolorum voluptate a
                adipisci.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default HistoryExp;
