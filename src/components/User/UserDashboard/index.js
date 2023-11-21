import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserHome() {
  const navigate = useNavigate()
  const [data, setData] = useState({});
  const [userAppplications, setUserApplications] = useState([]);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://healthflix-be.vercel.app/applicants/user")
      .then((res) => {
        setData(data && res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://healthflix-be.vercel.app/applicants/getApplications")
      .then((res) => {
        setUserApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const viewJobDetails = (id) => {
    navigate("/job-details", {
      state: {
        id,
      },
    });
  };
  return (
    <div className="user-home">
      <Container className="user-home-section">
        {" "}
        <Row className="user-home-section-row section-head">
          <h4>{"My Details : "}</h4>
        </Row>
        <Row >
          <Col className="table-head">Full Name</Col>
          <Col className="table-head">Email Address</Col>
          <Col className="table-head">Position</Col>
        </Row>
        <Row className="table-item-row">
          <Col>{data && data.fullName}</Col>
          <Col>{data && data.email}</Col>
          <Col>{data && data.position}</Col>
        </Row>
      </Container>
      <Container className="user-home-section">
        <Row className="user-home-section-row">
          <h4> My Applications : </h4>
        </Row>
        <Row>
          <Col className="table-head">Job Position</Col>
          <Col className="table-head">Job location</Col>
          <Col className="table-head">Actions</Col>
        </Row>

        {userAppplications.map((item, index) => {
          return (
            <Row key={index} className="table-item-row">
              <Col>{item.job && item.job.position}</Col>
              <Col>{item.job && item.job.location}</Col>
              <Col>
                <Button size="sm" className="m-2 w-100" variant="outline-secondary">
                  View application details
                </Button>
                <Button
                  size="sm"
                  className="m-2 w-100"
                  variant="outline-info"
                  onClick={() => {
                    viewJobDetails(item.job && item.job._id);
                  }}
                >
                  View job details
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>

      <Container className="user-home-section">
        <Row className="user-home-section-row">
          <h4>Suggested Jobs : </h4>
        </Row>
        <Row>
          <Col className="table-head">Job Position</Col>
          <Col className="table-head">Job location</Col>
          <Col className="table-head">Salary</Col>
          <Col className="table-head">Actions</Col>
        </Row>
      </Container>
      <Container className="user-home-buttons">
        <Row>
          <Col>
            <Button variant="info" href="/applicants/shortlisted-jobs">
              Go to shortlist
            </Button>
          </Col>
          <Col>
            <Button
              variant="dark"
              href="/user/applications"
              onClick={() => {
                localStorage.setItem("userNavItemKey", "link-4");
              }}
            >
              View your applications
            </Button>
          </Col>
          <Col>
            <Button variant="success" href="/">
              Go Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
