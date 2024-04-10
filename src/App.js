import Food from "./components/Food.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plans from "./components/Plans.jsx";
import Rooms from "./components/Rooms.jsx";


function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plans/>
      <Rooms/>
      <Food/>
      <Footer/>
    </div>
  );
}

export default App;
