import "./index.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function ReferralProgramme() {
  return (
    <div className="referral-page">
      <div className="heading">
        <h1>Referral Programme</h1>
      </div>
      <Container>
        <Row className="ref-section">
          <Col md={4} sm={6}>
            <Image
              src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
              className="ref-section-img"
              rounded
            />
          </Col>
          <Col md={8} sm={6}>
            <p>
              Are you a Healthflix Medical Healthcare Professional?
              Congratulations! We are happy to have you and to work alongside
              you. We wish you the best journey possible. If you are enjoying
              your time so far with us, why not share the same experience with
              someone you know and earn extra at the same time. Join our
              referral rewards program and earn from $150 to $1,000 for every
              successful hire. Our referral program is the easiest to earn and
              the fastest payout in the industry by far. Curious?{" "}
            </p>
            <Button variant="secondary">Here is how to start</Button>{" "}
            <Button variant="dark">I am ready to refer</Button>
          </Col>
        </Row>
        <Row className="ref-section">
          <Col md={8} sm={6}>
            <h2>Would You Like to Partner with Us?</h2>
            <br/>

            <p>
              Do you know a great healthcare professional? Refer them to us! If
              you are:
              <br />
              <ul>
                <li>An independent external recruiter</li>
                <li>A Recruitment and staffing agency</li>
                <li>An external healthcare professional </li>
              </ul>
              <p>
                Call us at our hotline +1-866-672-8432 for local referrals or US
                International Nursing Tel: +1-833-612-1963 for international
                referrals.
              </p>
              <p>
              You can also email us at <a href="mailto:anandtanish2@gmail.com">anandtanish2@gmail.com</a> or request a callback below. Terms and conditions apply.
              </p>
              <Button variant="dark">I am ready to refer</Button>
            </p>
          </Col>
          <Col md={4} sm={6}>
            <Image className="ref-section-img" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3& ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
