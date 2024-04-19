import { BsPersonCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import reneiro from "../img/perfil.png";
import mateo from "../img/mateo.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-950 w-ful h-full text-white dark:bg-red-600/50 dark:text-gray-100">
      <div className="flex flex-wrap flex-row justify-around items-start mt-40 mb-20 w-full">

        <div className="flex flex-col justify-center items-start mb-16">
          <div className="flex flex-row justify-center items-center hover:text-blue-600 mb-2">
            <BsPersonCircle className="text-2xl" />
            <span className="lg:text-xl md:text-xl sm:text-base font-semibold mx-2">Colaboradores</span>
          </div>
          <div className="flex flex-row justify-center items-center my-2">
            <img src={mateo} alt="" className="lg:w-10 md:w-10 sm:w-7 rounded-full" />
            <a
              href="https://github.com/mateodevcode"
              target="_blank"
              className="italic hover:text-gray-400 font-semibold mx-4 lg:text-base md:text-base sm:text-sm"
            >
              Mateo Lizcano
            </a>
          </div>

          <div className="flex flex-row justify-center items-center my-2">
            <img src={reneiro} alt="" className="lg:w-10 md:w-10 sm:w-7 rounded-full" />
            <a
              href="https://github.com/mateodevcode"
              target="_blank"
              className="italic hover:text-gray-400 font-semibold mx-4 lg:text-base md:text-base sm:text-sm"
            >
              Reneiro Monterrosa
            </a>
          </div>

        </div>

        <div className="flex flex-col justify-center items-start mb-16">
          <div className="flex flex-row justify-center items-center hover:text-blue-700 mb-2">
            <span className="lg:text-xl md:text-xl sm:text-base font-semibold">Newsletters</span>
            <IoNewspaperOutline className="mx-2 text-2xl" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start mb-16">
          <div className="flex flex-row justify-center items-center hover:text-blue-700 mb-2">
            <span className="lg:text-xl md:text-xl sm:text-base font-semibold">Contacto</span>
            <SiAmazonsimpleemailservice className="mx-2 text-2xl" />
          </div>
          <a
            href="https://github.com/mateodevcode"
            target="_blank"
            className="italic hover:text-gray-400 font-semibold lg:text-base md:text-base sm:text-sm"
          >
            mateodevcode@gmail.com
          </a>
          <a
            href="https://github.com/ReyMQ28"
            target="_blank"
            className="italic hover:text-gray-400 font-semibold lg:text-base md:text-base sm:text-sm"
          >
            reydavidquiroz@gmail.com
          </a>
        </div>

        <div className="flex flex-col justify-center items-start mb-16">
          <div className="flex flex-row justify-center items-center hover:text-blue-700 mb-2">
            <span className="lg:text-xl md:text-xl sm:text-base font-semibold">GitHub</span>
            <FaGithub className="mx-2 text-2xl" />
          </div>
          <a
            href="https://github.com/mateodevcode"
            target="_blank"
            className="italic hover:text-gray-400 font-semibold lg:text-base md:text-base sm:text-sm"
          >
            Mateo dev
          </a>
          <a
            href="https://github.com/ReyMQ28"
            target="_blank"
            className="italic hover:text-gray-400 font-semibold lg:text-base md:text-base sm:text-sm"
          >
            Reneiro Monterrosa
          </a>
        </div>
      </div>
      <p className="pb-10">Todos los derechos reservados © 2024.</p>
    </div>
  );
};

export default Footer;
