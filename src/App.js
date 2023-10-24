import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
