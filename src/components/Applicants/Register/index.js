import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div >
      <div className="heading">
        <h1>Candidate Registration</h1>
      </div>
      <Container >
        <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Upload your resume here
                        </Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Upload your resume here"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="text-center">
                          I am applying as :
                        </Form.Label>
                        <br />
                        <Form.Select
                          aria-label="Default select example"
                          className="p-1 m-2 rounded"
                        >
                          <option>Select type ..</option>
                          <option value="1">Allied Professionals</option>
                          <option value="2">Local</option>
                          <option value="3">Per diem</option>
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
                        >
                          <option>Select source..</option>
                          <option value="1">LinkedIn</option>
                          <option value="2">Total</option>
                          <option value="3">Advanced</option>
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
