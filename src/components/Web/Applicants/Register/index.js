import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [displaySkillForm, setDisplaySkillForm] = useState(false);
  const [resume, setResume] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordField, setPasswordField] = useState(null);
  const [confirmPasswordField, setConfirmPassowordField] = useState("");
  const [position, setPosition] = useState("");
  const [infoSource, setInfoSource] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [contractType, setContractType] = useState("");
  const [notficationEnabled, setNotificationEnabled] = useState(false);
  const [emailExistsField, setEmailExistsField] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("email", email);
  formData.append("password", passwordField);
  formData.append("position", position);
  formData.append("infoSource", infoSource);
  formData.append("speciality", speciality);
  formData.append("notficationEnabled", notficationEnabled);
  formData.append("contractType", contractType);
  formData.append("resume", resume);
console.log(formData)
    axios
      .post("https://healthflix-be.vercel.app/applicants/register", formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
      .then((res) => {
        if (res.request.status === 200) {
          navigate("/applicants/login");
        }
      })
      .catch((err) => {
        console.log(err.message);

        setEmailExistsField(true);
      });
  };
  return (
    <div>
      <div className="heading">
        <h1>Candidate Registration</h1>
      </div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    {emailExistsField && (
                      <p style={{ color: "red" }}>
                        Sorry, either email already exists with us. Please enter
                        another one
                      </p>
                    )}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="resume">
                        <Form.Label className="text-center">
                          Upload your resume here
                        </Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Upload your resume here"
                          onChange={(e) => {
                            setResume( e.target.files[0]);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Full name">
                        <Form.Label className="text-center">
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          required
                          placeholder="Enter Name"
                          onChange={(event) => {
                            setFullName(event.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Email">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          required
                          placeholder="Enter email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          placeholder="Password"
                          onChange={(e) => {
                            setPasswordField(e.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          required
                          onChange={(e) => {
                            setConfirmPassowordField(e.target.value);
                          }}
                        />
                        {passwordField && confirmPasswordField !== "" ? (
                          passwordField !== confirmPasswordField ? (
                            <p style={{ color: "red" }}>
                              The passwords do not match
                            </p>
                          ) : (
                            <p style={{ color: "green" }}>Passwords Match</p>
                          )
                        ) : null}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="text-center">
                          I am applying as :
                        </Form.Label>
                        <br />
                        <Form.Select
                          aria-label="Default select example"
                          className="p-1 m-2 rounded"
                          onChange={(e) => {
                            setPosition(e.target.value);
                          }}
                        >
                          <option>Select type ..</option>
                          <option value="Allied Professional">
                            Allied Professionals
                          </option>
                          <option value="Local">Local</option>
                          <option value="Per Diem">Per diem</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="text-center">
                          How did you hear about us :
                        </Form.Label>
                        <br />
                        <Form.Select
                          aria-label="Default select example"
                          className="p-1 m-2 rounded"
                          onChange={(e) => {
                            setInfoSource(e.target.value);
                          }}
                        >
                          <option>Select source..</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Total">Total</option>
                          <option value="Advanced">Advanced</option>
                        </Form.Select>
                      </Form.Group>
                      <br />
                      <h5>Your Skills Information</h5>
                      <br />
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="text-center">
                          Do you want to fill out your skills information?{" "}
                        </Form.Label>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Yes"
                          onClick={() => {
                            setDisplaySkillForm(!displaySkillForm);
                          }}
                        />
                      </Form.Group>
                      <br />
                      {displaySkillForm ? (
                        <>
                          <Form.Group className="mb-3" controlId="">
                            <Form.Label className="text-center">
                              Speciality
                            </Form.Label>
                            <br />
                            <Form.Select
                              aria-label="Default select example"
                              className="p-1 m-2 rounded"
                              onChange={(e) => {
                                setSpeciality(e.target.value);
                              }}
                            >
                              <option>Specaility</option>
                              <option value="Nurse">Nurse </option>
                              <option value="Advanced Practitioner">
                                Advanced Practitioners
                              </option>
                              <option value="">Mastram</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="">
                            <Form.Label className="text-center">
                              Contract Type
                            </Form.Label>
                            <br />
                            <Form.Select
                              aria-label="Default select example"
                              className="p-1 m-2 rounded"
                              onChange={(e) => {
                                setContractType(e.target.value);
                              }}
                            >
                              <option>Select..</option>
                              <option value="contract">Contract </option>
                              <option value="part time">Part Time</option>
                              <option value="permanent">Permanent</option>
                              <option value="traveller">Traveller</option>
                            </Form.Select>
                          </Form.Group>
                        </>
                      ) : null}
                      <h5>Job Alert Settings</h5>
                      <br />
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="text-center">
                          Do you wish to sign up for Job Alerts ?:
                        </Form.Label>
                        <br />
                        <Form.Select
                          aria-label="Default select example"
                          className="p-1 m-2 rounded"
                          onChange={(e) => {
                            if (e.target.value === "yes") {
                              setNotificationEnabled(true);
                            }
                          }}
                        >
                          <option>Select..</option>
                          <option value="yes">Yes </option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <Link
                          to={"/applicants/login"}
                          className="text-primary fw-bold"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
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
