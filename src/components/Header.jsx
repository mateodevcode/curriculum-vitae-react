import { GrLinkedin } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";


function Header() {
  return (
    <div className="w-full flex justify-around items-center px-7 pr-3 mb-10 bg-slate-500">
      <div className="flex justify-center items-center cursor-pointer my-6 w-12 h-12">
        <a href="https://www.linkedin.com/" target="_blank">
          <GrLinkedin className="text-indigo-600 absolute rounded-lg bg cursor-pointer w-12 h-12  text-3xl ml-6" />
        </a>
      </div>

      <div className="flex justify-between text-sm font-semibold items-center">
        <div className="mx-8 hover:text-blue-700">
          <a href="#experiencia-laboral">Experiencia Laboral</a>
        </div>
        <div className="mx-8 hover:text-blue-700">
          <a href="#historial-estudios">Historial de estudios</a>
        </div>
        <div className="mx-8 hover:text-blue-700">
          <a href="#complementarios">Complementarios</a>
        </div>
        <div className="mx-8 hover:text-blue-700">
          <a href="#skills">Skills</a>
        </div>
        <div className="mx-8 hover:text-blue-700">
          <a href="#idiomas">Idiomas</a>
        </div>
        <div className="mx-8 hover:text-blue-700">
          <a href="#certificaciones">Certificaciones</a>
        </div>
      </div>
      <TiThMenu className="text-4xl absolute visible md:invisible lg:invisible" />
    </div>
  );
}

export default Header;
