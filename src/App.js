import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar';
import Home from './Home';
import AddListing from './AddListing';
import Search from './Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/AddListing' element={<AddListing />} />
      </Routes>
    </Router>
  );
}

export default App;
