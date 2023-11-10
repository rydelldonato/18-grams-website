import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import HoursAndLocation from "./components/hoursAndLocation/hoursAndLocation";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Menus from "./components/menus/menus";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoursandlocation" element={<HoursAndLocation />} />
          <Route path="/menus" element={<Menus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
