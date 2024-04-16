import HistoryAcademy from "./HistoryAcademy"
import HistoryComplement from "./HistoryComplement"
import HistoryExp from "./HistoryExp"

function HistoryDeploy() {
  return (
    <div className="flex flex-col justify-center items-center lg:mt-20 md:mt-20 sm:mt-10">
        <HistoryExp />
        <HistoryAcademy />
        <HistoryComplement />
    </div>
  )
}

export default HistoryDeploy