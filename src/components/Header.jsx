import { GrLinkedin } from "react-icons/gr";

function Header() {
  return (
    <div className="w-full flex justify-around items-center px-7 pr-3">
      <div className=" flex items-start justify- cursor-pointer  my-6  w-12 h-12">
        <GrLinkedin className="flex justify-center items-center text-indigo-600 absolute rounded-lg bg hover:bg-gray-700 cursor-pointer w-12 h-12  text-3xl ml-6 " />
      </div>
      <div className="flex justify-between text-sm font-semibold items-center ">
        <div className="px-8 cursor-pointer hover:text-blue-700">Experiencia Laboral</div>
        <div className="px-8 cursor-pointer hover:text-blue-700">Historial de estudios</div>
        <div className="px-8 cursor-pointer hover:text-blue-700">Complementarios</div>
        <div className="px-8 cursor-pointer hover:text-blue-700">Skills</div>
        <div className="px-8 cursor-pointer hover:text-blue-700">Idiomas</div>
        <div className="px-8 cursor-pointer hover:text-blue-700">Certificaciones</div>
      </div>
    </div>
  );
}

export default Header;
