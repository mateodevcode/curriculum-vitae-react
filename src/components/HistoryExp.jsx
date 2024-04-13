import { BiSolidRightArrow } from "react-icons/bi";

function HistoryExp() {
  return (
    <div className="historyExp flex flex-row justify-center items-start px-10 -mt-2">
      <div className="flex flex-col justify-center items-center mr-4">
        <div className="w-5 h-5 bg-indigo-950 rounded-full">
        </div>
        <div className="bg-indigo-950 w-1 h-96 -mt-2"></div>
      </div>
      <div>
        <div className="flex flex-row justify-start items-center cursor-pointer">
          <BiSolidRightArrow className="text-2xl mr-2 text-gray-600"/>
          <h3 className="title-history text-3xl font-semibold py-2">
            EXPERIENCIA LABORAL
          </h3>
        </div>
        <div className="contenido-history px-12">
          <p className="tiempo-history text-lg text-gray-600">
            Jan 2022- Present
          </p>
          <p className="empresa-history text-lg text-gray-600">
            Company Name l 123 Anywhere St., Any City
          </p>
          <h4 className="cargo-history text-xl font-semibold py-1">
            Desarrollador Frontend
          </h4>
          <p className="descripcion-history">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            molestiae totam fugit id reprehenderit provident doloribus ab soluta
            perspiciatis earum suscipit dicta, est ipsum ipsa, tempore
            repellendus deserunt, praesentium debitis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Labore autem quod dolore natus at
            suscipit consequuntur rem facere ab. Maiores vitae earum eaque natus
            iusto atque dolorum voluptate a adipisci.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HistoryExp;
