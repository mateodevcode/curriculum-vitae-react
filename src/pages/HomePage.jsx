import Certificaciones from "../components/Certificaciones";
import Footer from "../components/Footer";
import HistoryDeploy from "../components/HistoryDeploy";
import Idiomas from "../components/Idiomas";
import Skills from "../components/Skills";
import Target from "../components/Target";
import Tittle from "../components/Tittle";
import Header from "../components/Header"


function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-start items-center px-80">
        <div className="w-full">
          <Header />
          <Tittle />
          <Target />
          <HistoryDeploy />
          <Skills />
          <Idiomas />
          <Certificaciones />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
