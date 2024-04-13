import HistoryDeploy from "./components/HistoryDeploy";
import Target from "./components/Target";
import Tittle from "./components/Tittle";

function App() {
  return (
    <div className="flex flex-col justify-start items-center ">
      <div className="w-full">
        <Tittle />
        <Target />
        <HistoryDeploy />
      </div>
    </div>
  );
}
export default App;
