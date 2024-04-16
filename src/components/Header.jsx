import { GrLinkedin } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";


function Header() {
  return (
    <div className="w-full flex-col sm:flex md:flex-row lg:flex-row justify-around items-center px-7 pr-3 mb-10  ">
      <div className=" flex items-start justify-start cursor-pointer  my-6  w-12 h-12">
        <GrLinkedin className="flex justify-center items-center text-indigo-600 absolute rounded-lg bg cursor-pointer w-12 h-12  text-3xl ml-6 " />
      </div>
      <div className="flex sm:flex-row md:flex-row lg:flex-row invisible md:visible lg:visible text-sm font-semibold items-center  ">
        <div className="px-0 sm:px-4 md:px8 lg:px-8   hover:text-blue-700">
          <a href="#experiencia-laboral">Experiencia Laboral</a>
        </div>
        <div className="px-0 sm:px-4 md:px8 lg:px-8 hover:text-blue-700">
          <a href="#historial-estudios">Historial de estudios</a>
        </div>
        <div className="px-0 sm:px-4 md:px8 lg:px-8 hover:text-blue-700">
          <a href="#complementarios">Complementarios</a>
        </div>
        <div className="px-0 sm:px-4 md:px8 lg:px-8 hover:text-blue-700">
          <a href="#skills">Skills</a>
        </div>
        <div className="px-0 sm:px-4 md:px8 lg:px-8 hover:text-blue-700">
          <a href="#idiomas">Idiomas</a>
        </div>
        <div className="px-0 sm:px-1 md:px6 lg:px-8 hover:text-blue-700">
          <a href="#certificaciones">Certificaciones</a>
        </div>
      </div>
      <TiThMenu className="text-4xl absolute visible md:invisible lg:invisible" />
    </div>
  );
}

export default Header;
