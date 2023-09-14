import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./index.css";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      className="bg-body-tertiary nav"
      variant="dark"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">
            Healthflix
            <br />
            MEDICAL | US
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Applicants" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <Link to="/applicants/login">Login </Link>{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <Link to="/applicants/register">Register</Link>
                {""}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='applicants/benifits-and-perks'>Benifits and Perks</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"><Link to='applicants/jobs'>Jobs</Link></NavDropdown.Item>
              <NavDropdown.Item href="#123"><Link to={'applicants/jobs'}>Hot Jobs</Link></NavDropdown.Item>
              <NavDropdown.Item href="#123"><Link to='applicants/workforce-solutions'>Workforce Solutions</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Staffing Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <Link to="staffingSolutions/submit">
                  Submit a staffing request
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#a">
                <Link to="staffingSolutions/about-us">About Us</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Be a part of voice of nursing
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/referral-program">
              <Nav.Link href="#home">Referral Programme</Nav.Link>
            </Link>

            <Nav.Link href="https://github.com" target="__blank">
              International
            </Nav.Link>

            <Link to="/contact">
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
