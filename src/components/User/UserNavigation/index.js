import Nav from "react-bootstrap/Nav";
import "./index.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
function UserNavigation() {
  const { setUserIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  axios.defaults.withCredentials= true
  const [userNavItemKey, setUserNavItemKey] = useState(
    localStorage.getItem("userNavItemKey") || "home"
  );
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("/user")) {
      setUserNavItemKey("defaultVal");
    }
  }, [location.pathname]);
  useEffect(() => {
    localStorage.setItem("userNavItemKey", userNavItemKey);
  }, [userNavItemKey]);


  const handleLogout = () => {
    axios
      .get("https://healthflix-be.vercel.app/applicants/logout")
      .then((res) => {console.log(res)
       Cookies.remove('token')
        setUserIsLoggedIn(false)
        localStorage.setItem("userNavItemKey", 'home');
      navigate('/')
      })
      .catch((err) => console.log(err));
  };
  return (
    <Nav
      justify
      variant="pills"
      activeKey={userNavItemKey}
      className="user-navigation"
      onSelect={(k) => {
        setUserNavItemKey(k);
        console.log(userNavItemKey);
      }}
    >
      <Nav.Item>
        <Nav.Link
          className="user-nav-link-container"
          eventKey={"home"}
          href="/user"
        >
          My Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-1"
          className="user-nav-link-container"
          href="/user/accountInformation"
        >
          Account Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          className="user-nav-link-container"
          href="/user/documents"
        >
          Documents
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          href="/user/jobAlertSettings"
          className="user-nav-link-container"
          eventKey={"link-3"}
        >
          Job Alert Settings
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/user/applications"
          eventKey="link-4"
          className="user-nav-link-container"
        >
          Applications
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="user-nav-link-container"
          eventKey="link-5"
          onClick={handleLogout}
        >
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default UserNavigation;
