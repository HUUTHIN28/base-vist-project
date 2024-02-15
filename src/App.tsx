import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutRoot from "./layout/layoutRoot";
import LayoutHome from "./pages/home/layout";
import LayoutAbout from "./pages/about/layout";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutRoot />}>
              <Route path="home" element={<LayoutHome />} />
              <Route path="about" element={<LayoutAbout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
