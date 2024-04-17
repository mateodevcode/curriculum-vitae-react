const MenuHamburger = ({menu}) => {

  return (
    <div className={`flex flex-col justify-between items-start text-xl font-semibold  ${menu ? "hidden" : "flex"} my-5 py-5 bg-blue-500/10`}>
      <div className="mx-8 my-2 hover:text-blue-700">
        <a href="#experiencia-laboral">Experiencia Laboral</a>
      </div>
      <div className="mx-8 my-2 hover:text-blue-700">
        <a href="#historial-estudios">Historial de estudios</a>
      </div>
      <div className="mx-8 my-2 hover:text-blue-700">
        <a href="#complementarios">Complementarios</a>
      </div>
      <div className="mx-8 my-2 hover:text-blue-700">
        <a href="#skills">Skills</a>
      </div>
      <div className="mx-8 my-2 hover:text-blue-700">
        <a href="#idiomas">Idiomas</a>
      </div>
      <div className="mx-8 my-2 hover:text-blue-700">
        <a href="#certificaciones">Certificaciones</a>
      </div>
    </div>
  );
};

export default MenuHamburger;
