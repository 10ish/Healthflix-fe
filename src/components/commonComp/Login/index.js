import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import Cookies from 'js-cookie'
export default function Login({ type }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const { setUserIsLoggedIn, setAdminIsLoggedIn} = useContext(AuthContext);
  
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let loginUrl = "https://healthflix-be.vercel.app/applicants/login";
    if (type === "admin") {
      loginUrl = "https://healthflix-be.vercel.app/admin/login";
    }

    try {
      const res = await axios.post(loginUrl, {
        login,
        password
      });
      
      if (res.request.status === 200) {
        if(type==='admin'){
          Cookies.set('adminToken', res.data.token)
          setAdminIsLoggedIn(true);
      
          navigate("/admin/home");
        }
        else{
          setUserIsLoggedIn(true);
    Cookies.set('token', res.data.token)
          navigate("/user");
          
        }
        
      }
    } catch (err) {
      console.log(err)
      setErrorText(err.response.data.message);
    }
  };
  return (
    <div>
      <div className="heading">
        <h1>{type === "admin" ? "Admin" : "Canidate"} Login</h1>
      </div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <p className=" mb-5">Please enter your login and password!</p>
                  <p className="mb-3" style={{ color: "red" }}>
                    {errorText}
                  </p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      {type === "admin" ? (
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Username
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter email"
                            onChange={(event) => {
                              setLogin(event.target.value);
                            }}
                          />
                        </Form.Group>
                      ) : (
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(event) => {
                              setLogin(event.target.value);
                            }}
                          />
                        </Form.Group>
                      )}

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    {type === "admin" ? null : (
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account?{" "}
                          <Link
                            to={"/applicants/register"}
                            className="text-primary fw-bold"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
