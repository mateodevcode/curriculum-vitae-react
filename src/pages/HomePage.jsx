import Certificaciones from "../components/Certificaciones";
import Footer from "../components/Footer";
import HistoryDeploy from "../components/HistoryDeploy";
import Idiomas from "../components/Idiomas";
import Skills from "../components/Skills";
import Target from "../components/Target";
import Tittle from "../components/Tittle";
import Header from "../components/Header";

function HomePage() {
  return (
    <div id="homepage">
    <Header />
      <div className={`flex flex-col justify-start items-center lg:px-64 md:px-20 sm:px-0`}>
        <div className="w-full">
          <Tittle />
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
