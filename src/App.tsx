import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

import './index.css'
import { PageProject } from "./pages/PageProject";

function App() {
    return (
        <Router>
            <div>
                {/* <Header/> */}
                <Routes>
                    <Route path="/" element={<PageProject/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
