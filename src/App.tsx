import "bootstrap/dist/css/bootstrap.min.css";
import Glavniy from "./ui/homeNav/Glavniy";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sams from "./ui/samsunng/Sams";
import Lg from "./ui/lg/Lg";
import Bos from "./ui/bosch/Bos";


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
              <Route path="/" element={<Glavniy />} />
              <Route path="/samsong" element={<Sams />} />
              <Route path="/lg" element={<Lg />} />
              <Route path="/bos" element={<Bos />} />
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
