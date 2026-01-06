import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginInd from './pages/LoginInd.jsx';
import {Toaster} from 'react-hot-toast';
import OrgDashboard from './pages/OrgDashboard.jsx';
import ProfileInd from './pages/ProfileInd.jsx';
import JoinCampaign from './pages/JoinCampaign.jsx';
import IndDashboard from './pages/IndDashboard.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';



import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
//import Footers from './components/Footers';
import VerduraCampaign from "./pages/campaign";
import Footer from "./components/Footers";
function App() {

  return (
    <Router>
      <Toaster/>
      <Routes>
          <Route path='/' element={<LoginInd/>}/>
          <Route path='/orgdashboard' element={<OrgDashboard/>}/>
          <Route path='/profileind' element={<ProfileInd/>}/>
          <Route path='/joincampaign' element={<JoinCampaign/>}/>
          <Route path='/inddashboard' element={<IndDashboard/>}/>
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      </Routes>
    </Router>
  )
}

export default App;