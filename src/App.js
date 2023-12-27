import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar';
import Home from './Home';
import AddListing from './AddListing';
import Search from './Search';
import SignIn from './SignIn';
import Register from './Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/AddListing' element={<AddListing />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
