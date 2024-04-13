import HistoryAcademy from "./HistoryAcademy"
import HistoryComplement from "./HistoryComplement"
import HistoryExp from "./HistoryExp"

function HistoryDeploy() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
        <HistoryExp />
        <HistoryAcademy />
        <HistoryComplement />
    </div>
  )
}

export default HistoryDeploy