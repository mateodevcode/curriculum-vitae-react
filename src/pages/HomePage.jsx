import Certificaciones from "../components/Certificaciones";
import Footer from "../components/Footer";
import HistoryDeploy from "../components/HistoryDeploy";
import Idiomas from "../components/Idiomas";
import Skills from "../components/Skills";
import Target from "../components/Target";
import Header from "../components/Header";
// import ModificarComponentes from "../components/ModificarComponentes";

function HomePage() {
  return (
    <div id="homepage" className="dark:bg-gray-950 dark:text-white">
    <Header />
      <div className={`flex flex-col justify-start items-center lg:px-64 md:px-20 sm:px-0`}>

      {/* <ModificarComponentes /> */}

        <div className="w-full">
          <Target />
          <HistoryDeploy />
          <Skills />
          <Idiomas />
          <Certificaciones />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
