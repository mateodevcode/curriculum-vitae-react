import { GrLinkedin } from "react-icons/gr";

function Header() {
  return (
    <div className=" flex items-start justify- cursor-pointer mr-20 my-6 w-12 h-12">
      <GrLinkedin className="flex justify-center items-center text-indigo-600 absolute rounded-lg bg hover:bg-gray-700 cursor-pointer w-12 h-12  text-3xl ml-10 " />
    </div>
  );
}

export default Header;
