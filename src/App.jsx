import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginInd from './pages/auth/Login.jsx';
import {Toaster} from 'react-hot-toast';


import ProfileInd from './pages/ProfileInd.jsx';
import JoinCampaign from './pages/JoinCampaign.jsx';
import ForgetPassword from './pages/auth/ForgetPassword.jsx';
import SignUpInd from './pages/auth/Signup.jsx';
import Login from './pages/auth/Login.jsx';
import Dashboard from './pages/Home.jsx';
import NavbarInd from './components/Navbar.jsx';
import Navbar from './components/Navbar.jsx';
import Blog from './pages/Blog.jsx';
import Footer from './components/Footer.jsx'
import CreateBlog from './pages/organization/CreateBlog.jsx'

import Campaign from './pages/JoinCampaign.jsx'

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Toaster/>
      <Routes>
          <Route path='/profileind' element={<ProfileInd/>}/>


          <Route path='/blog' element={<Blog/>}/>
          <Route path='/reset-password' element={<ForgetPassword/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<SignUpInd/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/campaigns' element={<Campaign/>}/>
          <Route path='/create-blog' element={<CreateBlog/>}/>
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App;
