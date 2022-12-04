import PreLoader from "./component/preLoader";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutChildren from "./pages/aboutChildren";


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
    },[])

  return (
    <div className="App">
        {loading ? (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/:id" element={<AboutChildren/>}/>
                </Routes>
            </Router>
        ): (
            <PreLoader/>
        )}
    </div>
  );
}

export default App;
