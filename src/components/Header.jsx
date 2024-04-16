import { GrLinkedin } from "react-icons/gr";

function Header() {
  return (
    <div className="w-full flex justify-around items-center px-7 pr-3 mb-10 ">
      <div className=" flex items-start justify- cursor-pointer  my-6  w-12 h-12">
        <a href="https://www.linkedin.com/" target="_blank"><GrLinkedin className="flex justify-center items-center text-indigo-600 absolute rounded-lg bg cursor-pointer w-12 h-12  text-3xl ml-6 " /></a>
      </div>
      <div className="flex justify-between text-sm font-semibold items-center  ">
        <div className="px-8 hover:text-blue-700"><a href="#experiencia-laboral">Experiencia Laboral</a></div>
        <div className="px-8 hover:text-blue-700"><a href="#historial-estudios">Historial de estudios</a></div>
        <div className="px-8 hover:text-blue-700"><a href="#complementarios">Complementarios</a></div>
        <div className="px-8 hover:text-blue-700"><a href="#skills">Skills</a></div>
        <div className="px-8 hover:text-blue-700"><a href="#idiomas">Idiomas</a></div>
        <div className="px-8 hover:text-blue-700"><a href="#certificaciones">Certificaciones</a></div>
      </div>
    </div>
  );
}

export default Header;
