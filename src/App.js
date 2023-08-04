import "./App.css";
import AboutUs from "./components/AboutUs";
import JuniorOB from "./components/JuniorOB";
import NavBar from "./components/NavBar";
import SeniorOB from "./components/SeniorOB";
import TitleCard from "./components/TitleCard";
import VisionMission from "./components/VisionMission";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <TitleCard />
      <AboutUs />
      <VisionMission />
      <SeniorOB />
      <JuniorOB />
      <Footer />
    </>
  );
}

export default App;
