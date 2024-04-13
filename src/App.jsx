import HistoryDeploy from "./components/HistoryDeploy"
import Target from "./components/Target"


function App() {
  return (
    
    <div className="flex flex-col justify-start items-center px-80">
      <div className="border-black border-x-2">
      <Target/>
      <HistoryDeploy />
      </div>
    </div>
  )
}
export default App
