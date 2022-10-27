import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Programs from "./pages/Programs/Programs";
import Muaythai from "./pages/MartialArts/Muaythai";
import Shaolin from "./pages/MartialArts/Shaolin";
import Taichi from "./pages/MartialArts/Taichi";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Programs" element={<Programs />} />
                    <Route path="/" element={<Muaythai />} />
                    <Route path="/" element={<Shaolin />} />
                    <Route path="/" element={<Taichi />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
