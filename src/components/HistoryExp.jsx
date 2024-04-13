import { useState } from "react";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

function HistoryExp() {
  const [desplegar, setdesplegar] = useState(false);

  const onclick = () => {
    setdesplegar(!desplegar);
  };

  return (
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
        <h3 className="title-history text-3xl font-semibold py-2 hover:text-blue-700">
          EXPERIENCIA LABORAL
        </h3>
      </div>
      <div className={`flex flex-col ${desplegar == true ? "hidden" : "flex"}`}>
        {/* Historial de Experiencia Laboral */}

        <div className="historyExp flex flex-row justify-center items-start">
          <div className="flex flex-col justify-center items-center pl-1 mr-4">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="bg-gray-400 w-1 h-72 -mt-2"></div>
          </div>
          <div>
            <div className="contenido-history px-5">
              <p className="tiempo-history text-sm text-gray-600 font-semibold">
                Jan 2022- Present
              </p>
              <p className="empresa-history text-lg text-gray-600 italic mt-1">
                Company Name l 123 Anywhere St., Any City
              </p>
              <h4 className="cargo-history text-xl font-semibold py-1">
                Desarrollador Frontend
              </h4>
              <p className="descripcion-history">
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
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="bg-gray-400 w-1 h-72 -mt-2"></div>
          </div>
          <div>
            <div className="contenido-history px-5">
              <p className="tiempo-history text-sm text-gray-600 font-semibold">
                Jan 2022- Present
              </p>
              <p className="empresa-history text-lg text-gray-600 italic mt-1">
                Company Name l 123 Anywhere St., Any City
              </p>
              <h4 className="cargo-history text-xl font-semibold py-1">
                Desarrollador Frontend
              </h4>
              <p className="descripcion-history">
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
