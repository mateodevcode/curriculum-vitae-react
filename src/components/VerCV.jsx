import { PDFViewer } from '@react-pdf/renderer';
import HomePage from '../pages/HomePage';

const VerCV = () => {
  return (
    <PDFViewer>
        <HomePage />
    </PDFViewer>
  )
}

export default VerCV