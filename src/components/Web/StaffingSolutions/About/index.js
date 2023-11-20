import { Container, Row, Col, Image } from "react-bootstrap";
import "./index.css";
import SocialLinks from "../../../commonComp/SocialLinks";

export default function AboutUs() {
  return (
    <div>
      <div className="heading">
        <h1> Staffing Solutions</h1>
      </div>
        <Container>
        <Row className="about-us-sections">
          <h4>Your Global Partner</h4>
          <p>
            Greenstaff Medical is a global healthcare staffing agency with
            strong recruitment capabilities worldwide. Our network of branches
            is in the US, Canada, UK, South Africa, India, Ireland, Australia,
            China and Philippines. Greenstaff Medical US is a leading provider
            of healthcare staffing services in the United States since 2017. Our
            mission is to deliver high-quality healthcare professionals across
            the country, when you need it, where you need it. Because we know
            the care you provide to your patients is your primary interest, we
            guarantee the best staffing service is made available to you 24/7.
            Our services include Nursing, Allied, Travel, Local Per Diem, Direct
            Hire, Local Staffing, and International Recruitment services. Work
            with a team with extensive global and local expertise in the
            industry. Whether it's a short or long-term solution you are looking
            for, no matter how big or small, Greenstaff Medical delivers.
          </p>
        </Row>
        

        <Row className="about-us-sections">
          <Col md={8} sm={8}>
            <h4>Benifits we offer</h4>
            <h5>Over 60 areas of healthcare specialties</h5>
            <p>
              We have a variety and availability of highly specialized nurses
              and allied healthcare professionals working for us and are adding
              to this number daily including, but not limited to, ICU, Med-Surg,
              PICU, PACU, Cath Lab, L&D, and Psych.
            </p>
            <br />

            <h5>24/7 service</h5>
            <p>
              Our team of dedicated consultants is on hand 24/7 to advise our
              clients and support our healthcare professional staff through any
              of their queries.
            </p>

            <br></br>
            <h5>Project management team</h5>
            <p>
              We will support you with our team of global staffing experts to
              manage your needs from contact to contract. You will receive
              personalized and customized service from day 1.
            </p>
          </Col>
          <Col md={4} sm={4}>
            <Image
              className="about-us-sections-img"
              src="https://images.unsplash.com/photo-1687360441042-a3eb360f3db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              rounded
            />
          </Col>
        </Row>
        </Container>
        <Container>
        <Row className="about-us-sections">
          <Col className="about-card" sm={4} md={4}>
            <h5>Institutions we Provide</h5>
            <ul>
              <li>Travel Healthcare Staffing</li>
              <li>Per Diem Local Staffing</li>
              <li>International Recruitment</li>
              <li>MSP / RPO & In-House Outsourcing</li>
              <li>Interim Management</li>
              <li>Home Care</li>
              <li>Crisis & Pandemic Staffing</li>
            </ul>
          </Col>
          <Col md={2} sm={2}></Col>
          <Col className="about-card" md={4} sm={4}>
            <h5>Our Services</h5>
            <ul>
              <li>Travel Healthcare Staffing</li>
              <li>Per Diem Local Staffing</li>
              <li>International Recruitment</li>
              <li>MSP / RPO & In-House Outsourcing</li>
              <li>Interim Management</li>
              <li>Home Care</li>
              <li>Crisis & Pandemic Staffing</li>
            </ul>
          </Col>
        </Row>
        </Container>
        <SocialLinks/>
        <Container>
        <Row className="about-us-sections">
          <Col md={4} sm={4}>
            <Image
              className="about-us-sections-img"
              src="https://images.unsplash.com/photo-1629709303904-06d564f237d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              rounded
            />
          </Col>
          <Col md={8} sm={8}>
            <h5>International Nursing Program</h5>
            <p>
              Our program is designed to assist and support our international
              nurses every step of the way through visa processing, relocation,
              quick start, and placement bonuses.
            </p>
            <h5>One-stop staffing & recruitment</h5>
            <p>
              We provide Travel & Domestic, International, Perm and Per Diem
              services, no matter how big or small your needs, across the United
              States. We can mobilize our team to deliver your staffing
              vacancies with ease and urgency.
            </p>
            <h5>Candidate quality checks</h5>
            <p>
              This includes a review of application and resume, skills passing
              scores of specialty assessment and testing, reference and work
              history, review of and verification of license(s) and
              certification(s) as well as any other required Joint Commission
              standards.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
