import TopNav from "./component/topNav";
import PreLoader from "./component/preLoader";
import Hero from "./component/hero";
import Mission from "./component/mission";
import About from "./component/about";
import Case from "./component/case";
import {useEffect, useState} from "react";


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
    },[])

  return (
    <div className="App">
        {loading ? (
            <div>
                <TopNav/>
                <Hero/>
                <Mission/>
                <About/>
                <Case/>
            </div>
        ): (
            <PreLoader/>
        )}
    </div>
  );
}

export default App;
