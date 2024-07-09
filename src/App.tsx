import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Giving from "./pages/Giving";
import About from "./pages/About";
import Ministry from "./pages/Ministry";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Events from "./pages/Events";
import PrayerForm from "./pages/PrayerForm";


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/house_of_praise/" element={<Home />} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/media" element={<Media/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/prayer" element={<PrayerForm/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
