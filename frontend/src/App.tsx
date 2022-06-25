import Main from "./pages/Main";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <section>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/*" element={<Main />}></Route>
          </Routes>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
