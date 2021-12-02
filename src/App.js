import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages'
import Business from './Pages/Business';
import Mortgage from './Pages/MortgagePage';
import Education from './Pages/Education';
import Infotech from './Pages/Infotech';
import OurTeam from './Pages/OurTeam';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/infotech" element={<Infotech />} />
        <Route path="/business" element={<Business/>} />
        <Route path="/mortgage" element={<Mortgage/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/ourteam" element={<OurTeam />} />
      </Routes>
    </Router>
  );
}

export default App;
