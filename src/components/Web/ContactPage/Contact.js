import "./index.css";
import { Row, Col, Container } from "react-bootstrap";

 function Contact() {
  return (
    <div className="contact-us-page">
      <div className="heading">
        <h1>Contact Us</h1>
      </div>

      <Container>
        <Row>
          <Col md={6} sm={12}>
            <div className="address">
              <h5>Address</h5>
              <br /> Head Office: 6900 Dallas Parkway Suite 300 Plano, Texas
              Phoenix: 3101 Central Plaza | 3101-3111 N Central Avenue | Phoenix
              | Arizona <br />
              Call: +1-866-672-8432 US International Nursing
              <br />
              Tel: +1-833-612-1963
              <br />
              Email : <a href="mailto: abc@example.com" className="email">abc@example.com</a>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="loaction"
                  className="gmap_iframe"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Swarg ashram delhi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="heading">
        <h1>Meet the leadership Team</h1>
      </div>
      <div className="team">
        <div className="team-member">
          <img src="https://random.imagecdn.app/500/150" alt="abc"></img>
          <h5>Tanish Anand</h5>
          <h6>Team Member in ABACUS ltd and Chairman</h6>
        </div>
        <div className="team-member">
          <img src="https://random.imagecdn.app/500/150" alt="abc"></img>
          <h5>Tanish Anand</h5>
          <h6>Team Member in ABACUS ltd and Chairman</h6>
        </div>
        <div className="team-member">
          <img src="https://random.imagecdn.app/500/150" alt="abc"></img>
          <h5>Tanish Anand</h5>
          <h6>Team Member in ABACUS ltd and Chairman</h6>
        </div>
        <div className="team-member">
          <img src="https://random.imagecdn.app/500/150" alt="abc"></img>
          <h5>Tanish Anand</h5>
          <h6>Team Member in ABACUS ltd and Chairman</h6>
        </div>
        <div className="team-member">
          <img src="https://random.imagecdn.app/500/150" alt="abc"></img>
          <h5>Tanish Anand</h5>
          <h6>Team Member in ABACUS ltd and Chairman</h6>
        </div>
        <div className="team-member">
          <img src="https://random.imagecdn.app/500/150" alt="abc"></img>
          <h5>Tanish Anand</h5>
          <h6>Team Member in ABACUS ltd and Chairman</h6>
        </div>
      </div>
    </div>
  );
}

export default Contact;

