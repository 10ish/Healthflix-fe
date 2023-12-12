import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import Cookies from 'Cookie-js'
function AdminNavigation() {
  const {setAdminIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("https://healthflix-be.vercel.app/admin/logout")
      .then((res) => {
        if(res.status===200){
          Cookies.remove('adminToken')
          setAdminIsLoggedIn(false)
          navigate("/admin");
        }
       
         
      
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar
        expand="lg"
        bg="dark"
        className="bg-body-tertiary site-nav"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/admin/home">
            Healthflix
            <br />
            MEDICAL | US
            <br />
            <span style={{ fontSize: "60%" }}> Admin</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/admin/applicants">Applicants</Nav.Link>
              <Nav.Link href="/admin/applications">Job Applications</Nav.Link>

              <Nav.Link href="/admin/jobs">Jobs</Nav.Link>

              <Nav.Link href="/admin/staffingRequests">Staffing Requests</Nav.Link>

              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Item href="/applicants/register">
                  Add new admin
                </NavDropdown.Item>
                <NavDropdown.Item href="/applicants/register">
                  Account Settings
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default AdminNavigation;
