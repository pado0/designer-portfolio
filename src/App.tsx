import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

import './index.css'
import { Home } from "./pages/Home";
import { CaseStudy1 } from "./pages/CaseStudy1";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/casestudy1" element={<CaseStudy1/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
