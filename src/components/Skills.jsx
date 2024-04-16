import { skillsLeguajes } from "../data/skills.lenguajes";


function Skills() {
  return (
    <div id="skills" className="w-full lg:px-10 md:px-5 sm:px-2 lg:mt-20 lg:mb-40 md:mt-20 md:mb-40 sm:mt-10 sm:mb-20">
      <h3 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl hover:text-blue-700 w-min pb-4">SKILLS</h3>
      <div className="w-full flex flex-wrap">
        {skillsLeguajes.map((skill) => (
            <div key={skill.id} className="flex flex-row jus items-center border-blue-700 hover:text-white hover:bg-gray-950 border-2 lg:rounded-xl md:rounded-xl sm:rounded-lg w-max lg:px-3 md:px-3 sm:px-2 lg:py-1 md:py-1 sm:py-0 m-1.5 font-semibold cursor-pointer hover:shadow-xl hover:shadow-blue-900 lg:text-base md:text-base sm:text-sm">
                <img src={skill.img} alt={skill.alt} className='lg:w-5 md:w-5 sm:w-3.5 mr-2' />
                <span>{skill.nombre}</span>
            </div>
            
        ))}

      </div>
    </div>
  );
}

export default Skills;
