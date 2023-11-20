import "./App.css";
import Home from "./components/Web/Home";
import Navigation from "./components/Web/Navbar";
import Footer from "./components/Web/Footer/Footer";
import Contact from "./components/Web/ContactPage/Contact";
import { Route, Routes } from "react-router-dom";
import ReferralProgramme from "./components/Web/ReferralProgram/index";
import Login from "./components/commonComp/Login";
import Register from "./components/Web/Applicants/Register/index";
import SubmitStaffingReq from "./components/Web/StaffingSolutions/Submit";
import AboutUs from "./components/Web/StaffingSolutions/About/index";
import Benifits from "./components/Web/Applicants/Benifits";
import WorkforceSolutions from "./components/Web/Applicants/WorkforceSolutions";
import Jobs from "./components/Web/Applicants/Jobs";
import AdminHome from "./components/Admin/index";
import NavbarSelect from "./components/Web/NavbarSelect";
import UserNavigation from "./components/User/UserNavigation";
import AdminNavigation from "./components/Admin/components/Navigation";
import ResultPage from "./components/commonComp/ResultPage";
import AdminControlsPage from "./components/Admin/components/AdminControlsPage";
import ViewDetailsPage from "./components/Admin/components/DetailsPage";
import UserHome from "./components/User/UserDashboard";
import UserAccountInfo from "./components/User/UserDashboard/components/AccountInfo";
import UserDocuments from "./components/User/UserDashboard/components/Documents";
import UserApplications from "./components/User/UserDashboard/components/Applications";
import UserJobAlertSettings from "./components/User/UserDashboard/components/JobAlertSettings";

import ShortlistedJobs from "./components/Web/Applicants/ShortlistedJobs";
import axios from "axios";
import { AuthContext } from "./Context/AuthContext/AuthContext";
import { useContext } from "react";
import JobDetails from "./components/Web/JobDetails";

function App() {
  const { userIsLoggedIn, adminIsLoggedIn } = useContext(AuthContext);

  axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <NavbarSelect>
        <Navigation />
        {userIsLoggedIn && <UserNavigation />}
      </NavbarSelect>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/referral-program" element={<ReferralProgramme />} />
        <Route path="/job-details" element={<JobDetails />} />

        <Route path="/applicants">
          <Route path="benifits-and-perks" element={<Benifits />} />
          <Route path="workforce-solutions" element={<WorkforceSolutions />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="shortlisted-jobs" element={<ShortlistedJobs />} />

          <Route path="jobs" element={<Jobs />} />
        </Route>
        <Route
          path="registerSuccess"
          element={<ResultPage type={"submitApplicantSuccess"} />}
        />
        <Route
          path="register/failure"
          element={<ResultPage type={"submitApplicantFailure"} />}
        />
        <Route
          path="loginSuccess"
          element={<ResultPage type={"applicantLoginSuccess"} />}
        />
        <Route path="/staffingSolutions">
          <Route
            path="submit/success"
            element={<ResultPage type="submitStaffingReqSuccess" />}
          />
          <Route
            path="submit/failure"
            element={<ResultPage type="submitStaffingReqFailure" />}
          />

          <Route path="submit" element={<SubmitStaffingReq />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
        <Route path="/admin" element={adminIsLoggedIn && <AdminNavigation />}>
          <Route
            index
            element={adminIsLoggedIn ? <AdminHome /> : <Login type={"admin"} />}
          />
          <Route
            path="home"
            element={
              adminIsLoggedIn ? (
                <AdminHome />
              ) : (
                <ResultPage type={"adminUnauthorised"} />
              )
            }
          />

          <Route
            path="jobs"
            element={
              adminIsLoggedIn ? (
                <AdminControlsPage type={"job"} />
              ) : (
                <ResultPage type={"adminUnauthorised"} />
              )
            }
          />
          <Route
            path="staffingRequests"
            element={
              adminIsLoggedIn ? (
                <AdminControlsPage type={"staffingRequest"} />
              ) : (
                <ResultPage type={"adminUnauthorised"} />
              )
            }
          />
          <Route
            path="applications"
            element={
              adminIsLoggedIn ? (
                <AdminControlsPage type={"application"} />
              ) : (
                <ResultPage type={"adminUnauthorised"} />
              )
            }
          />
          <Route
            path="applicants"
            element={
              adminIsLoggedIn ? (
                <AdminControlsPage type={"applicant"} />
              ) : (
                <ResultPage type={"adminUnauthorised"} />
              )
            }
          />
          <Route path="viewDetailsPage" element={<ViewDetailsPage />} />
        </Route>
        <Route path="/user">
          <Route
            index
            element={
              userIsLoggedIn ? (
                <UserHome />
              ) : (
                <ResultPage type={"userUnauthorised"} />
              )
            }
          />
          <Route path="accountInformation" element={userIsLoggedIn?<UserAccountInfo />: <ResultPage type={"userUnauthorised"} />} />
          <Route path="documents" element={userIsLoggedIn?<UserDocuments />:  <ResultPage type={"userUnauthorised"} />} />
          <Route path="applications" element={userIsLoggedIn?<UserApplications />: <ResultPage type={"userUnauthorised"} />} />
          <Route path="jobAlertSettings" element={userIsLoggedIn?<UserJobAlertSettings />: <ResultPage type={"userUnauthorised"} />} />
        </Route>

        <Route path="*" element={<ResultPage type={"error"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
