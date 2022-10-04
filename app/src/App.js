import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}>Home</Route>
      <Route path='about' element={<About />}>About</Route>
     </Routes>
    </div>
  );
}

export default App;
