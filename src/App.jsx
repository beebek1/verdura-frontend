import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import SignupIn from './pages/SignupIndi';
import CreateCampaign from './pages/CreateCampaign';  
import CreateBlog from './pages/CreateBlog';
import BlogList from './pages/BlogList';


function AppWrapper() {
  const location = useLocation();

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupin" element={<SignupIn />} />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/blogs" element={<BlogList />} />
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
