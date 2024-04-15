import { skillsLeguajes } from "../data/skills.lenguajes";


function Skills() {
  return (
    <div id="skills" className="px-10 w-full mt-20 mb-40">
      <h3 className="font-semibold text-3xl hover:text-blue-800 w-min pb-4">SKILLS</h3>
      <div className="w-full flex flex-wrap">
        {skillsLeguajes.map((skill) => (
            <div key={skill.id} className="flex flex-row jus items-center border-blue-700 hover:text-white hover:bg-gray-950 border-2 rounded-xl w-max px-3 py-1 m-1.5 font-semibold cursor-pointer hover:shadow-xl hover:shadow-blue-900">
                <img src={skill.img} alt={skill.alt} className='w-5 mr-2' />
                <span>{skill.nombre}</span>
            </div>
            
        ))}

      </div>
    </div>
  );
}

export default Skills;
