import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { targetData } from "../data/target";

const IconRedesTarget = () => {
  const { redes } = targetData[0];
  const estilos =
    "t-face flex flex-row items-center justify-center hover:bg-blue-800 bg-gray-800 rounded-md mx-1 text-xl w-7 h-7";

  return (
    <>
      <a href={redes.facebook} className={`${estilos}`}>
        <BsFacebook />
      </a>
      <a href={redes.twitter} className={`${estilos}`}>
        <BsTwitterX />
      </a>
      <a href={redes.instagram} className={`${estilos}`}>
        <BsInstagram />
      </a>
    </>
  );
};

export default IconRedesTarget;
