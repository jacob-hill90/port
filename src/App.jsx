import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Resume from "./components/resume/Resume";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.RESUME} element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
