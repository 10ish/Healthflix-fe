import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChangePasswordForm from "./ChangePasswordForm";

export default function UpdateUserDetails() {
  const [data, setData] = useState({});
  const [displaySkillForm, setDisplaySkillForm] = useState(false);
  const [resume, setResume] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [position, setPosition] = useState("");
  const [infoSource, setInfoSource] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [contractType, setContractType] = useState("");

  useEffect(() => {
    axios
      .get("https://healthflix-be.vercel.app/applicants/user")
      .then((res) => {
        setData(res.data);
        setFullName(res.data.fullName || "");
        setEmail(res.data.email || "");
        setPosition(res.data.position || "");
        setInfoSource(res.data.infoSource || "");
        setSpeciality(res.data.speciality || "");
        setContractType(res.data.contractType || "");
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
   
  
 
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("resume", resume);
    formData.append("email", email);
    formData.append("contractType", contractType);
    formData.append("position", position);
    formData.append("infoSource", infoSource);
    formData.append("speciality", speciality);
  

    axios
      .post("https://healthflix-be.vercel.app/applicants/register", formData)
      .then((res) => {
        console.log(res);
        navigate("/registerSuccess");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <Col md={8} lg={8} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="resume">
                        <Form.Label className="text-center">
                          Upload your resume here
                        </Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Upload your resume here"
                          onChange={(e) => {
                            setResume({ resume: e.target.files[0] });
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Full name">
                        <Form.Label className="text-center">
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={fullName}
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
                          defaultValue={email}
                          required
                          placeholder="Enter email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </Form.Group>


                      <br />

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      ></Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="text-center">
                          I am applying as :
                        </Form.Label>
                        <br />
                        <Form.Select
                          defaultValue={position}
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
                          defaultValue={infoSource}
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
                              defaultValue={speciality}
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
                              defaultValue={contractType}
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


                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Update Account Details
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
     <ChangePasswordForm/>
    </div>
  );
}
                    