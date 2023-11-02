import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import HoursAndLocation from "./components/hoursAndLocation/hoursAndLocation";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/hoursandlocation" element={<HoursAndLocation/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
