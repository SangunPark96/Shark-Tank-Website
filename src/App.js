
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Index from './Components/Index';
import Show from './Pages/Show';
import FourOFour from './Pages/FourOFour';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pitches/pages" element={<Index />} />
        <Route path="/pitches/:id" element={<Show />} />
        <Route path="*" element={<FourOFour/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
