import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

import './index.css'
import { PageProject } from "./pages/PageProject";
import { Home } from "./pages/Home";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
