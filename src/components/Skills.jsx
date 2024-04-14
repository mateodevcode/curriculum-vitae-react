import javascript from '../img/js.png';
import react from '../img/react.png';
import html from '../img/html.png';


function Skills() {
  return (
    <div className="px-10 w-full mt-20 mb-40">
      <h3 className="font-semibold text-3xl hover:text-blue-800 w-min pb-4">SKILLS</h3>

      <div className="w-full flex flex-wrap">
        <div className="flex flex-row jus items-center border-blue-700 hover:text-white hover:bg-gray-950 border-2 rounded-xl w-max px-3 py-1 m-1.5 font-semibold cursor-pointer">
            <img src={javascript} alt="Javascript" className='w-5 mr-2' />
            <span>Javascript</span>
        </div>

        <div className="flex flex-row jus items-center border-blue-700 hover:text-white hover:bg-gray-950 border-2 rounded-xl w-max px-3 py-1 m-1.5 font-semibold cursor-pointer">
            <img src={react} alt="react" className='w-5 mr-2' />
            <span>React</span>
        </div>

        <div className="flex flex-row jus items-center border-blue-700 hover:text-white hover:bg-gray-950 border-2 rounded-xl w-max px-3 py-1 m-1.5 font-semibold cursor-pointer">
            <img src={html} alt="react" className='w-5 mr-2' />
            <span>Html</span>
        </div>




      </div>
    </div>
  );
}

export default Skills;
