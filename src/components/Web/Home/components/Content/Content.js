import "./Content.css";
import { Button } from "react-bootstrap";
import { Row, Col, Image, Container } from "react-bootstrap";

export default function Content() {
  return (
    <Container className="content-container">
      <Row className="section-1">
        <h1>Healthflix loves</h1>
        <p>
          Thank you for improving patient care, always. We appreciate your hard
          work and dedication, especially during these challenging times. Take
          care of yourself, and know that we are grateful for you. See all our
          monthly competitions, Vlogs , Nurse Hero’s and so much more.
          
        </p>
        <Button variant="secondary">
          Find Out More
        </Button>
        

       
      </Row>
      <Row className="section-2">
      
      <Col md={4} xs={6}>
        <Image className="section-image"
          src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80"
          rounded
        ></Image>
      </Col>
      <Col md={8} xs={6}>
      <h2>Compliance</h2>
        <p>
          Healthflix Medical US Travel and Per Diem divisions have earned The
          Gold Seal of Approval from The Joint Commission. We pride ourselves on
          our ability to efficiently and successfully onboard our candidates in
          a timely manner and have them ready to start their assignments on
          time. You will be contacted in less than an hour from the time your
          offer letter is signed and then the process begins! We understand the
          onboarding process with an agency can sometimes be overwhelming and
          stressful to comply with all the requirements, but our
          responsibilities to patients, clients and agency staff are very
          important to us. Therefore, Healthflix Medical Staffing has
          experienced compliance consultants that will support and guide you to
          ensure your registration is seamless, as our consultants are working
          strenuously to place you for work once your registration is completed.
        </p>
        <Button variant="info" size="lg">
          Find Out More
        </Button>
      </Col>
      
      </Row>
    </Container>
  );
}
