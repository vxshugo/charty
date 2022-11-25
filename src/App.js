import TopNav from "./component/topNav";
import PreLoader from "./component/preLoader";
import Hero from "./component/hero";
import Mission from "./component/mission";
import About from "./component/about";
import Case from "./component/case";


function App() {
  return (
    <div className="App">
        <PreLoader/>
        <TopNav/>
        <Hero/>
        <Mission/>
        <About/>
        <Case/>
    </div>
  );
}

export default App;
