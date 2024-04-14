import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VerCV from "./components/VerCV";

function App() {
  return (
    <>
      <BrowserRouter basename="curriculum-vitae-react">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prueba" element={<VerCV />} />
        </Routes>
      </BrowserRouter>    
    </>
  );
}
export default App;
