import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Idiomas = () => {
  const percentageEspanol = 100;
  const percentageingles = 75;
  const percentagealeman = 10;

  return (
    <div className="px-10 w-full mt-20 mb-40">
      <h3 className="font-semibold text-3xl hover:text-blue-800 w-min pb-4">
        IDIOMAS
      </h3>
      <div className="flex flex-row justify-around items-center">
        <div className="w-20 flex flex-col justify-center items-center">
            <span className="my-3 text-2xl uppercase font-semibold">Español</span>
          <CircularProgressbar
            value={percentageEspanol}
            text={`${percentageEspanol}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(29, 78, 216)`,
              textColor: "#000",
              trailColor: "#b5b5b5",
            //   backgroundColor: "#ff0",
            })}
          />
        </div>

        <div className="w-20 flex flex-col justify-center items-center">
            <span className="my-3 text-2xl uppercase font-semibold">Ingles</span>
          <CircularProgressbar
            value={percentageingles}
            text={`${percentageingles}%`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(29, 78, 216)`,
              textColor: "#000",
              trailColor: "#b5b5b5",
            //   backgroundColor: "#ff0",
            })}
          />
        </div>

        <div className="w-20 flex flex-col justify-center items-center">
            <span className="my-3 text-2xl uppercase font-semibold">Aleman</span>
          <CircularProgressbar
            value={percentagealeman}
            text={`${percentagealeman}%`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(29, 78, 216)`,
              textColor: "#000",
              trailColor: "#b5b5b5",
            //   backgroundColor: "#ff0",
            })}
          />
        </div>


      </div>
    </div>
  );
};

export default Idiomas;
