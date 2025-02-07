import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Header from "./components/molecule/Header.tsx";
import './index.css'
import Footer from "./components/molecule/Footer.tsx";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
