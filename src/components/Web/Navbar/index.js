import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./index.css";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      className="bg-body-tertiary site-nav"
      variant="dark"
    >
      <Container>
        
          <Navbar.Brand href="/">
            Healthflix
            <br />
            MEDICAL | US
          </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Applicants" id="basic-nav-dropdown">
              <NavDropdown.Item href="/applicants/login">
            Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/applicants/register">
                Register
              
              </NavDropdown.Item>
              <NavDropdown.Item href="/applicants/benifits-and-perks">Benifits and Perks</NavDropdown.Item>
              <NavDropdown.Item href="/applicants/jobs">Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/applicants/shortlisted-jobs">Shortlisted Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/applicants/workforce-solutions">Workforce Solutions</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Staffing Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/staffingSolutions/submit">
                
                  Submit a staffing request
              
              </NavDropdown.Item>
              <NavDropdown.Item href="/staffingSolutions/about-us">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Be a part of voice of nursing
              </NavDropdown.Item>
            </NavDropdown>
          
              <Nav.Link href="/referral-program">Referral Programme</Nav.Link>
          
            <Nav.Link href="https://github.com" target="__blank">
              International
            </Nav.Link>

            
              <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
