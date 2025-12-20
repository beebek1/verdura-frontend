import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';

function AppWrapper() {
  const location = useLocation();

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


function App() {
  return (
    <Router>
      <div>
        <AppWrapper />
      </div>
    </Router>
  );
}

export default App;
