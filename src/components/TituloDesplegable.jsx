import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

const TituloDesplegable = ({nombre, onclick, desplegar}) => {

  return (
    <div
      className={`flex flex-row justify-start items-center cursor-pointer lg:py-4 md:py-3 sm:py-2`}
      onClick={onclick}
    >
      <BiSolidRightArrow
        className={`lg:text-2xl md:text-xl sm:text-base lg:mr-3 md:mr-3 sm:mr-2 text-gray-600 dark:text-gray-100 ${
          desplegar == true ? "flex" : "hidden"
        }`}
      />
      <BiSolidDownArrow
        className={`lg:text-2xl md:text-xl sm:text-base lg:mr-3 md:mr-3 sm:mr-2 text-gray-600 dark:text-gray-100 ${
          desplegar == true ? "hidden" : "flex"
        }`}
      />
      <h3 className="title-history lg:text-3xl md:text-2xl sm:text-xl font-semibold lg:py-2 md:py-2 sm:py-1 hover:text-blue-700 uppercase">
        {nombre}
      </h3>
    </div>
  );
};

export default TituloDesplegable;
