import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { idiomas } from "../data/idiomas";

const Idiomas = () => {

  return (
    <div
      id="idiomas"
      className="w-full lg:px-10 md:px-5 sm:px-2 lg:mt-20 lg:mb-32 md:mt-20 md:mb-32 sm:mt-10 sm:mb-16"
    >
      <h3 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl hover:text-blue-700 w-min pb-4">
        IDIOMAS
      </h3>

      <div className="flex flex-row justify-around items-start">
        {/* Idiomas */}

        {idiomas.map((idioma) => (
          <div
            key={idioma.idioma}
            className="w-56 flex flex-col justify-center items-center "
          >
            <span className="my-3 lg:text-2xl md:text-2xl sm:text-base uppercase font-semibold">
              {idioma.idioma}
            </span>
            <div className="lg:w-20 md:w-20 sm:w-14">
              <CircularProgressbar
                value={idioma.porcentaje}
                text={`${idioma.porcentaje}%`}
                styles={buildStyles({
                  rotation: 0,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(29, 78, 216)`,
                  textColor: '#1d4ed8',
                  trailColor: "#b5b5b5",
                    // backgroundColor: "#ff0",
                })}
              />
            </div>
            <span className="my-3 lg:text-2xl md:text-2xl sm:text-xs font-semibold text-gray-400 dark:text-gray-100">
              {idioma.nivel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Idiomas;
