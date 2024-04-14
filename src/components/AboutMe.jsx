import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-col justify-between items-center absolute w-80 h-auto  my-72 mx-96 ">
      <div className=" block  mt-12 ">
        <h3 className=" text-3xl text-center font-semibold " >
          ACERCA DE MI 
        </h3>
      </div>
      <div>
        <p className="block descripcion-about  text-justify mt-8 w-auto pr-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi eius earum numquam culpa dolorum fugit eligendi, quasi quis obcaecati, natus laborum provident at, error sint molestias cupiditate optio mollitia? Lorem ipsum dolor sit amet consectetur, adipisicing elit. quasi quis obcaecati, natus laborum provident at, error sint molestias cupiditate optio mollitia? Lorem ipsum dolor sit amet consectetur, adipisicing elit.quasi quis obcaecati, natus laborum provident at, error sint molestias cupiditate option.
          
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
