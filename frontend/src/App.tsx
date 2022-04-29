import Lent from "./pages/Lent";
import Main from "./pages/Main";
import Return from "./pages/Return";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/lent" element={<Lent />}></Route>
        <Route path="/return" element={<Return />}></Route>
        <Route path="/*" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
