import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import ReferralProgramme from "./components/Referral Program";
import Login from "./components/Applicants/Login";
import Register from "./components/Applicants/Register/index";
import SubmitStaffingReq from "./components/StaffingSolutions/Submit";
import AboutUs from "./components/StaffingSolutions/About/index";
import Benifits from "./components/Applicants/Benifits";
import WorkforceSolutions from "./components/Applicants/WorkforceSolutions";
import Jobs from "./components/Applicants/Jobs";
import AdminHome from "./components/Admin";


function App() {
  return (
    <div className="App">
    
    <Navigation/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/referral-program" element={<ReferralProgramme/>}/>
    <Route path="/applicants/login" element={<Login/>}/>
    <Route path="/applicants/register" element={<Register/>}/>
    <Route path="/applicants/benifits-and-perks" element={<Benifits/>}/>
    <Route path = '/applicants/workforce-solutions' element={<WorkforceSolutions/>}/>
    <Route path="/applicants/jobs" element={<Jobs/>}/>
    <Route path="/staffingSolutions/submit" element={<SubmitStaffingReq/>}/>
    <Route path='/staffingSolutions/about-us' element={<AboutUs/>}/> 
    <Route path="/admin" element={<AdminHome/>}/>   
    </Routes>
    <Footer/>
  
    
    
    </div>
  );
}

export default App;