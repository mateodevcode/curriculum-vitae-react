import { GrLinkedin } from "react-icons/gr";

function Header() {
  return (
    <div className=" flex itens-start justify-start cursor-pointer mr-20 mt-2 w-10 h-10 ">
      <GrLinkedin className="text-indigo-600 absolute rounded-lg bg hover:bg-gray-700 cursor-pointer w-10 h-10  p-1 text-3xl ml-10 mr-7" />
    </div>
  );
}

export default Header;
