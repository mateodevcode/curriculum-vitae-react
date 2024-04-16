import { BsPersonCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import reneiro from "../img/perfil.png";
import mateo from "../img/mateo.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-950 w-ful h-full text-white">
      <div className="flex flex-wrap flex-row justify-around items-start my-40 w-full">
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row justify-center items-center hover:text-blue-600 text-xl font-semibold mb-2">
            <BsPersonCircle className="mx-2 text-2xl" />
            <span>Colaboradores</span>
          </div>
          <div className="flex flex-row justify-center items-center my-2">
            <img src={mateo} alt="" className="w-10 rounded-full" />
            <a
              href="https://github.com/mateodevcode"
              target="_blank"
              className="italic hover:text-gray-400 font-semibold mx-4"
            >
              Mateo Lizcano
            </a>
          </div>

          <div className="flex flex-row justify-center items-center my-2">
            <img src={reneiro} alt="" className="w-10 rounded-full" />
            <a
              href="https://github.com/mateodevcode"
              target="_blank"
              className="italic hover:text-gray-400 font-semibold mx-4"
            >
              Reneiro Monterrosa
            </a>
          </div>

        </div>

        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row justify-center items-center hover:text-blue-600 text-xl font-semibold mb-2">
            <span>Newsletter</span>
            <IoNewspaperOutline className="mx-2" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row justify-center items-center hover:text-blue-600 text-xl font-semibold mb-2">
            <span>Contacto</span>
            <SiAmazonsimpleemailservice className="mx-2" />
          </div>
          <a
            href="https://github.com/mateodevcode"
            target="_blank"
            className="italic hover:text-gray-400"
          >
            mateodevcode@gmail.com
          </a>
          <a
            href="https://github.com/ReyMQ28"
            target="_blank"
            className="italic hover:text-gray-400"
          >
            reydavidquiroz@gmail.com
          </a>
        </div>

        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row justify-center items-center hover:text-blue-600 text-xl font-semibold mb-2">
            <span>GitHub</span>
            <FaGithub className="mx-2" />
          </div>
          <a
            href="https://github.com/mateodevcode"
            target="_blank"
            className="italic hover:text-gray-400"
          >
            Mateo dev
          </a>
          <a
            href="https://github.com/ReyMQ28"
            target="_blank"
            className="italic hover:text-gray-400"
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
