function AboutMe() {
  return (
    <div className="flex flex-col justify-start items-start lg:px-0 md:px-10 sm:px-2 lg:ml-16 md:ml-4 sm:ml-0">
      <div className="block lg:mt-40 md:mt-32 sm:mt-10">
        <h3 className="flex lg:text-2xl md:text-xl sm:text-lg items-start font-semibold pt-2 hover:text-blue-700 uppercase">
          Perfil Profesional
        </h3>
      </div>
      <div>
        <p className="block descripcion-about text-justify w-auto mt-8 lg:text-xl md:text-lg sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi
          eius earum numquam culpa dolorum fugit eligendi, quasi quis obcaecati,
          natus laborum provident at, error sint molestias cupiditate optio
          mollitia? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          quasi quis obcaecati, natus laborum provident at, error sint molestias
          cupiditate optio mollitia? Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
