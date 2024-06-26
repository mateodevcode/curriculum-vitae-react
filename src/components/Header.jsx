import { GrLinkedin } from "react-icons/gr";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import MenuHamburger from "./MenuHamburger";
import { BsMoonFill, BsSun } from "react-icons/bs";

function Header() {
  const [menu, setMenu] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const manejarDark = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }

  const manejarClicMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="w-full flex lg:justify-around md:justify-around sm:justify-between items-center h-20 lg:mb-20 md:mb-20 sm:mb-0">
        <div className="flex justify-center items-center cursor-pointer lg:ml-40 md:ml-40 sm:ml-0 lg:p-0 md:p-0 sm:p-4">
          <a href="https://www.linkedin.com/" target="_blank">
            <GrLinkedin className="text-indigo-600 rounded-lg w-12 h-12 text-3xl dark:text-white" />
          </a>
        </div>

        <div className="lg:flex md:flex sm:hidden flex-row justify-between text-sm font-semibold items-center">
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
        <div className="flex flex-row justify-center items-center" onClick={manejarDark} >
          {darkMode ? <BsSun className="text-xl mx-2 cursor-pointer hover:text-gray-500"/> : <BsMoonFill className="text-xl mx-2 cursor-pointer hover:text-gray-500"/>}
      </div>

        <div
          className="lg:hidden md:hidden sm:flex lg:p-0 md:p-0 sm:p-4"
          onClick={manejarClicMenu}
        >
          {menu ? (
            <CgMenu className="text-3xl cursor-pointer" />
          ) : (
            <CgClose className="text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      
      <MenuHamburger menu={menu} />
    </>
  );
}

export default Header;
