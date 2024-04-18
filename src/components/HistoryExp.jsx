import { useState } from "react";
import { historyExperience } from "../data/history.experience";
import TituloDesplegable from "./TituloDesplegable";

function HistoryExp() {
  const [desplegar, setdesplegar] = useState(false);

  const onclick = () => {
    setdesplegar(!desplegar);
  };

  return (
    <div
      rel="preload"
      id="experiencia-laboral"
      className="flex font-display:optional flex-col justify-center items-start w-full lg:px-10 md:px-5 sm:px-2"
    >
      <TituloDesplegable
        
        nombre={"Experiencia Laboral"}
        onclick={onclick}
        desplegar={desplegar}
      />

      <div className={`flex flex-col ${desplegar == true ? "hidden" : "flex"}`}>
        {/* Historial de Experiencia Laboral */}

        {historyExperience.map((exp) => (
          <div
            key={exp.id}
            className="historyExp flex flex-row justify-center items-start"
          >
            <div className="flex flex-col justify-center items-center pl-1 mr-4">
              <div className="lg:w-4 lg:h-4 md:w-3 md:h-3 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
              <div className="bg-gray-400 lg:w-1 lg:h-72 md:w-1 md:h-72 sm:w-0.5 sm:h-64 -mt-2"></div>
            </div>
            <div>
              <div className="contenido-history lg:px-5 md:px-3 sm:px-1">
                <p className="tiempo-history lg:text-sm md:text-sm sm:text-xs text-gray-600 font-semibold">
                  {exp.fecha}
                </p>
                <p className="empresa-history lg:text-lg md:text-base sm:text-xs text-gray-600 italic mt-1">
                  {exp.empresa}
                </p>
                <h4 className="cargo-history lg:text-xl md:text-lg sm:text-base font-semibold py-1">
                  {exp.cargo}
                </h4>
                <p className="descripcion-history lg:text-base md:text-sm sm:text-xs">
                  {exp.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryExp;
