import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { targetData } from "../data/target";

const DatosTarget = () => {
  const { prefijo, telefono, email, direccion, redes } = targetData[0];

  return (
    <>
      <div className="t-phone flex flex-col justify-center items-left border-gray-700 border-b-2 mt-4 text-xs pb-2">
        <p className=" absolute pl-3 text-xl ">
          <HiOutlineDevicePhoneMobile />
        </p>
        <div className="pl-12">
          <h3>Phone</h3>
          <p>
            {prefijo}
            {telefono}
          </p>
        </div>
      </div>

      <div className="t-email flex flex-col justify-center items-left border-gray-700 border-b-2 text-xs py-2">
        <p className=" absolute pl-3 text-xl ">
          <MdOutlineMailOutline />
        </p>
        <div className="pl-12">
          <h3>Email</h3>
          <p>{email}</p>
        </div>
      </div>
      <div className="t-direccion flex flex-col justify-center items-left border-gray-700 border-b-2 text-xs py-2">
        <p className=" absolute  pl-3 text-xl ">
          <IoLocationOutline />
        </p>
        <div className="pl-12">
          <h3>Direccion</h3>
          <p>{direccion}</p>
        </div>
      </div>
      <div className="t-birthday flex flex-col justify-center items-left mb-4 text-xs pt-2">
        <p className=" absolute pl-3 text-xl ">
          <VscGithub />
        </p>
        <div className="pl-12">
          <h3>Github</h3>
          <p className="cursor-pointer">{redes.github}</p>
        </div>
      </div>
    </>
  );
};

export default DatosTarget;
