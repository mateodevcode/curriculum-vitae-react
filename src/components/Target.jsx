import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import AboutMe from "./AboutMe";
import html2pdf from "html2pdf.js";
import perfil from "../img/perfil.png";

function Target() {
  const descargarCV = () => {
    const element = document.getElementById("homepage");
    var opt = {
      margin: 0,
      filename: "curriculum-vitae.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: "in", format: "a3", orientation: "landscape" },
    };
    html2pdf().from(element).set(opt).save();
    html2pdf(element, opt);
  };

  return (
    <div className="w-full lg:mt-16 md:mt-16 sm:mt-8">
      <div className="w-full flex justify-center items-center h-36 bg-blue-800 text-cyan-50 lg:flex md:flex sm:hidden -z-10 -mb-56">
        <div className="text-gray-100 text-4xl pl-80">
          <p className="font-extrabold">REINEIRO</p>
          <p className="pl-20 font-extrabold">MONTERROSA</p>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center items-center h-auto lg:px-10 md:px-5 sm:px-3.5">
        <div className="t-main flex flex-col justify-start items-center bg-gray-950 rounded-2xl pt-12 w-80 h-auto sm:px-10 text-gray-100">
          <div className="h-52 flex flex-row justify-center items-center">
              <img
                className="rounded-full w-52 h-52"
                src={perfil}
                alt="photo"
              />
            
          </div>

          <div className="t-descripcion flex text-center justify-center items-center text-3xl font-extrabold bg-blue-800 rounded-md w-auto px-3 mt-8 py-3 uppercase lg:hidden md:hidden sm:flex">
            Reineiro Montorrosa
          </div>


          <div className="t-descripcion flex text-center justify-center items-center text-xl font-bold bg-gray-800 rounded-md w-auto px-3 mt-8 py-1">
            Software Developer
          </div>
          <div className="t-box flex items-center justify-center m-4">
            <div className="t-face items-center justify-center cursor-pointer hover:bg-blue-900 bg-gray-800 rounded-md mx-1 text-xl w-7 h-7">
              <p className="absolute pl-1 pt-1">
                <BsFacebook />
              </p>
            </div>
            <div className="t-twitter items-center justify-center cursor-pointer  hover:bg-blue-900 bg-gray-800 rounded-md mx-1 text-xl w-7 h-7">
              <p className="absolute pl-1 pt-1">
                <FaSquareXTwitter />
              </p>
            </div>
            <div className="t-instagram items-center justify-center cursor-pointer hover:bg-blue-900 bg-gray-800 rounded-md mx-1 text-xl w-7 h-7 ">
              <p className="absolute pl-1 pt-1">
                <RiInstagramFill />
              </p>
            </div>
          </div>
          <div className="t-box-2 items-start bg-gray-800 rounded-md w-60">
            <div className="t-phone flex flex-col justify-center items-left  border-gray-700 border-b-2 mt-4 text-xs pb-2">
              <p className=" absolute pl-3 text-xl ">
                <HiOutlineDevicePhoneMobile />
              </p>
              <div className="pl-12">
                <h3>Phone</h3>
                <p>3043819339</p>
              </div>
            </div>
            <div className="t-email flex flex-col justify-center items-left border-gray-700 border-b-2 text-xs py-2">
              <p className=" absolute pl-3 text-xl ">
                <MdOutlineMailOutline />
              </p>
              <div className="pl-12">
                <h3>Email</h3>
                <p>reydavidquiroz@gmail.com</p>
              </div>
            </div>
            <div className="t-direccion flex flex-col justify-center items-left border-gray-700 border-b-2 text-xs py-2">
              <p className=" absolute  pl-3 text-xl ">
                <IoLocationOutline />
              </p>
              <div className="pl-12">
                <h3>Direccion</h3>
                <p>TV 35 29a-49sur</p>
              </div>
            </div>
            <div className="t-birthday flex flex-col justify-center items-left mb-4 text-xs pt-2">
              <p className=" absolute pl-3 text-xl ">
                <VscGithub />
              </p>
              <div className="pl-12">
                <h3>Github</h3>
                <p className="cursor-pointer">https://github.com/ReyMQ28</p>
              </div>
            </div>
          </div>
          <div
            className="t-linkedin bg-blue-600 rounded-md text-sm cursor-pointer hover:bg-blue-400 text-gray-100 font-bold p-2 px-3 mt-6 mb-4"
            onClick={descargarCV}
          >
            Descargar
          </div>
        </div>
        <AboutMe />
      </div>
    </div>
  );
}

export default Target;
