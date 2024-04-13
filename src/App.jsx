import HistoryDeploy from "./components/HistoryDeploy";
import Skills from "./components/Skills";
import Target from "./components/Target";
import Tittle from "./components/Tittle";

function App() {
  return (
    <div className="flex flex-col justify-start items-center px-80">
      <div className="w-full">
        <Tittle />
        <Target />
        <HistoryDeploy />
        <Skills />
      </div>
    </div>
  );
}
export default App;
