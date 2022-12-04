import TopNav from "../../component/topNav";
import Case from "../../component/case";
import Hero from "../../component/hero";
import Mission from "../../component/mission";
import About from "../../component/about";
import Footer from "../../component/footer";

const Home = () => {
  return(
      <div>
          <TopNav/>
          <Hero/>
          <About/>
          <Case/>
          <Footer/>
      </div>
  )
}

export default Home;