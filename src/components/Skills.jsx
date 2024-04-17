import { useState } from "react";
import { skillsLeguajes } from "../data/skills.lenguajes";
import { useForm } from "react-hook-form";
import { crearSkills } from "../utils/config";

function Skills() {
  const [editar, setEditar] = useState(false);
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(crearSkills(data));
    console.log(crearSkills({ nombre: 'Java', img: 'java.png' }));
  }

  const onclick = () => {
    setEditar(!editar);
  };

  return (
    <>
      <div
        id="skills"
        className="w-full lg:px-10 md:px-5 sm:px-2 lg:mt-20 lg:mb-40 md:mt-20 md:mb-40 sm:mt-10 sm:mb-20"
      >
        <h3 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl hover:text-blue-700 w-min pb-4">
          SKILLS
        </h3>
        <div className="w-full flex flex-wrap">
          {skillsLeguajes.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-row jus items-center border-blue-700 hover:text-white hover:bg-gray-950 border-2 lg:rounded-xl md:rounded-xl sm:rounded-lg w-max lg:px-3 md:px-3 sm:px-2 lg:py-1 md:py-1 sm:py-0 m-1.5 font-semibold cursor-pointer hover:shadow-xl hover:shadow-blue-900 lg:text-base md:text-base sm:text-sm"
            >
              <img
                src={skill.img}
                alt={skill.alt}
                className="lg:w-5 md:w-5 sm:w-3.5 mr-2"
              />
              <span>{skill.nombre}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-end items-center">
        <div
          className="w-min bg-blue-700 hover:bg-blue-400 px-3 py-0.5 text-white font-semibold rounded-lg cursor-pointer"
          onClick={onclick}
        >
          Editar
        </div>
      </div>
      {/* Modificar componente */}

      <div
        className={`w-full m-5 flex-col justify-center items-start ${
          editar ? "hidden" : "flex"
        }`}
      >

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input {...register("nombre")} className="bg-blue-500/30 m-2 p-1 border-black border-2 rounded-md hover:border-blue-800" />
          <input type="file" {...register("imagen")} className="m-2" />
          <input type="submit" className="w-min bg-blue-700 hover:bg-blue-400 px-3 py-0.5 text-white font-semibold rounded-lg cursor-pointer mx-2" />
        </form>
        <div className="flex flex-row justify-end items-center my-2">
          <div className="w-min bg-green-700 hover:bg-green-400 px-3 py-0.5 text-white font-semibold rounded-lg cursor-pointer mx-2">
            Agregar
          </div>
          <div className="w-min bg-blue-700 hover:bg-blue-400 px-3 py-0.5 text-white font-semibold rounded-lg cursor-pointer mx-2">
            Modificar
          </div>
          <div className="w-min bg-red-700 hover:bg-red-400 px-3 py-0.5 text-white font-semibold rounded-lg cursor-pointer mx-2">
            Eliminar
          </div>
        </div>
      </div>

      {/* Modificar componente */}
    </>
  );
}

export default Skills;
