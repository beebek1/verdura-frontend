import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';


import Profile from './pages/organization/profile.jsx';
import ForgetPassword from './pages/auth/ForgetPassword.jsx';
import SignUpInd from './pages/auth/Signup.jsx';
import Login from './pages/auth/Login.jsx';
import Dashboard from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Footer from './components/Footer.jsx';
import CreateBlog from './pages/organization/CreateBlog.jsx';
import Climate from './pages/climate.jsx';

import Campaign from './pages/individual/JoinCampaign.jsx'


function AppWrapper(){

  const location = useLocation();
  const hideComponents = location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/reset-password'

  return (
      <>
      {!hideComponents && <Navbar/>}
        <Routes>
          
            <Route path='/profileind' element={<Profile/>}/>
            <Route path='/blogs' element={<Blog/>}/>
            <Route path='/blogs/:blogId' element={<BlogDetails/>}/>
            <Route path='/reset-password' element={<ForgetPassword/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<SignUpInd/>}/>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/campaigns' element={<Campaign/>}/>
            <Route path='/create-blog' element={<CreateBlog/>}/>
            <Route path='/climate' element={<Climate/>}/>

        </Routes>
      {!hideComponents && <Footer/>}
      </>
  );
}


//main function app
function App() {

  return (
    <Router>
      <Toaster/>
      <AppWrapper />
    </Router>
  )
}

export default App;
