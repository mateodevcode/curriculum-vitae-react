import HistoryDeploy from "./components/HistoryDeploy";
import Skills from "./components/Skills";
import Target from "./components/Target";

function App() {
  return (
    <div className="flex flex-col justify-start items-center px-80">
      <div className="border-black border-x-2 w-full">
        <Target />
        <HistoryDeploy />
        <Skills />
      </div>
    </div>
  );
}
export default App;
