import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./index.css";
export default function UserDocuments() {
  return (
    <div className="user-documents-page">
      <Container className="user-documents">
        <Row>
          <h4>Cover Letter</h4>
        </Row>
        <Row>
          <Col className="table-head">Document Name</Col>
          <Col className="table-head">Uploaded</Col>
          <Col className="table-head">Actions</Col>
        </Row>
      </Container>
      <Container className="user-documents">
        <Row>
          <h4>CV Documents</h4>
        </Row>
        <Row>
          <Col className="table-head">Document Name</Col>
          <Col className="table-head">Uploaded</Col>
          <Col className="table-head">Actions</Col>
        </Row>
      </Container>
      <Container className="add-documents">
        <Row>
          <h4>Add Documents</h4>
          
        </Row>
        <hr/>
      
          <Form>
          
            <Form.Group>
            <Row>
              <Col>
                <Form.Label>Select Document Type</Form.Label>
              </Col>
              <Col>
                {" "}
                <Form.Select>
                  <option value={"cv"}>CV Document</option>
                  <option>{"cover-letter"}</option>
                </Form.Select>
              </Col>
              </Row>
            </Form.Group>
            <Form.Group>
            <Row>
              <Col>
                <Form.Label>Enter Document Name</Form.Label>
              </Col>
              <Col>
                {" "}
             <Form.Control type="text"></Form.Control>
              </Col>
              </Row>
            </Form.Group>
            <Form.Group>
            <Row>
              <Col>
                <Form.Label>Upload Document</Form.Label>
              </Col>
              <Col>
                {" "}
             <Form.Control type="file"></Form.Control>
              </Col>
              </Row>
            </Form.Group>
            <hr/>
            <Row>

            <Col sm={12}>
            <Button type="submit" className='w-100' variant="info">Add document</Button>
            </Col>
            </Row>
          </Form>

      </Container>
    </div>
  );
}
