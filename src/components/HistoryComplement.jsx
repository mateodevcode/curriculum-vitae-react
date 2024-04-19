import { useState } from "react";
import { historyComplementarios } from "../data/history.complementarios";
import TituloDesplegable from "./TituloDesplegable";
import BarraSeparadora from "./BarraSeparadora";

function HistoryComplement() {
  const [desplegar, setdesplegar] = useState(false);

  const onclick = () => {
    setdesplegar(!desplegar);
  };

  return (
    <div
      id="complementarios"
      className="flex flex-col justify-center items-start w-full lg:px-10 md:px-5 sm:px-2"
    >
      <TituloDesplegable
        nombre={"Complementarios"}
        onclick={onclick}
        desplegar={desplegar}
      />

      <div className={`flex flex-col ${desplegar == true ? "hidden" : "flex"}`}>
        {/* Historial Complementarios */}

        {historyComplementarios.map((exp) => (
          <div
            key={exp.id}
            className="historyExp flex flex-row justify-center items-start"
          >
            <BarraSeparadora />
            <div>
              <div className="contenido-history lg:px-5 md:px-3 sm:px-1">
                <p className="tiempo-history lg:text-sm md:text-sm sm:text-xs text-gray-600 dark:text-gray-200 font-semibold">
                  {exp.fecha}
                </p>
                <p className="empresa-history lg:text-lg md:text-base sm:text-xs text-gray-600 dark:text-gray-200 italic mt-1">
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

export default HistoryComplement;
