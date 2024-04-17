import { useState } from "react";
import { targetData } from "../data/target";

const ModificarComponentes = () => {
  const [modificar, setModificar] = useState(false);

  const {
    nombre,
    apellido,
    cargo,
    redes,
    prefijo,
    telefono,
    email,
    direccion,
  } = targetData[0];

  return (
    <div className="w-full m-5">
    <h3>Selecciona el componente a modificar</h3>
    <select name="" id="">
        <option value="">Perfil Profesional</option>
        <option value="">Experiencia Laboral</option>
        <option value="">Historial de Estudios</option>
        <option value="">Complementarios</option>
        <option value="">Skills</option>
        <option value="">Idiomas</option>
        <option value="">Certificaciones</option>
    </select>
      <form className="flex flex-col">
        <input type="text" value={nombre} />
        <input type="text" value={nombre} />
        <input type="text" value={nombre} />
      </form>
      <div className="flex flex-row justify-end items-center">
        <div className="w-min bg-green-700 hover:bg-green-400 px-3 py-0.5 text-white font-semibold rounded-lg cursor-pointer mx-2">Agregar</div>
        <div className="w-min bg-blue-700 hover:bg-blue-400 px-3 py-0.5 text-white font-semibold rounded-lg cursor-pointer mx-2">Modificar</div>
        <div className="w-min bg-red-700 hover:bg-red-400 px-3 py-0.5 text-white font-semibold rounded-lg cursor-pointer mx-2">Eliminar</div>
      </div>
    </div>
  );
};

export default ModificarComponentes;
