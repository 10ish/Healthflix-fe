import { Container, Row, Col, Image } from "react-bootstrap";
import './About.css'
export default function About(){
    return(
        <div className="dark">
        <Container className="about-section">
          <Row>
            <Col xs={6} md={6}>
              <h1>About Healthflix Medical</h1>
              <h3>Right Staff Right Now</h3>
              <p>
                Healthflix Medical US is a specialist healthcare staffing agency
                who has been providing high-quality talent across the US since
                2017 offering a blend of ad hoc, contract and permanent
                employment options to our clients and candidates alike. We have
                a number of specialist nurses readily available nationwide
                including ICU, Medical Surgical, Labor and Delivery Nurses, ER
                Nurses and Psychiatric Nurses to name a few. We are also skilled
                in bringing International Registered Nurses to the US and can
                cater to most of our client’s requirements, no matter how big or
                small. Our team's extensive experience within nurse staffing
                across the United States, combined with our industry knowledge
                means we understand the dynamic nature of our clients. We are
                accredited by The Joint Commission, NCAGE, SAM Certified and
                Small Business Accredited.
              </p>
            </Col>
            <Col xs={6} md={6}>
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                fluid
                rounded
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
}