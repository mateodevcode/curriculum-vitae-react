import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-col justify-start items-start px-5 ">
      <div className=" block  mt-12 ">
        <h3 className=" flex text-2xl items-start font-semibold py-2 hover:text-blue-700 px-10" >
          PERFIL PROFESIONAL 
        </h3>
      </div>
      <div>
        <p className="block descripcion-about  text-justify w-auto px-10 mt-8 text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi eius earum numquam culpa dolorum fugit eligendi, quasi quis obcaecati, natus laborum provident at, error sint molestias cupiditate optio mollitia? Lorem ipsum dolor sit amet consectetur, adipisicing elit. quasi quis obcaecati, natus laborum provident at, error sint molestias cupiditate optio mollitia? Lorem ipsum dolor sit amet consectetur, adipisicing elit.quasi quis obcaecati, natus laborum provident at, error sint molestias cupiditate option.
          
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
