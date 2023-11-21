import { useState, useEffect } from "react";
import axios from "axios";
import { ErrorOutlineOutlined } from "@mui/icons-material";
import "./index.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function UserApplications() {
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState({ type: "", message: "" });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://healthflix-be.vercel.app/applicants/getApplications")
      .then((res) => {
        console.log(res.data);
        setApplications(res.data);
      })
      .catch((err) => {
        setPage({ type: "error", message: err.response.data.message });
      });
  }, []);

  const viewJobDetails = (id) => {
    navigate("/job-details", {
      state: {
        id,
      },
    });
  };
  if (page.type === "error") {
    return (
      <Container className="applications-error-page">
        <ErrorOutlineOutlined className="error-icon" fontSize="x-large" />
        <h1> {page.message} </h1>
        <Row className="error-button-row">
          <Col>
            {" "}
            <Button variant="outline-info" href="/applicants/jobs">
              View Jobs
            </Button>
          </Col>
          <Col>
            <Button variant="outline-dark" href="/applicants/shortlisted-jobs">
              Go to shortlist
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-secondary"
              onClick={() => {
                window.history.go(-1);
              }}
            >
              Go back
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <div className="user-applications-page">
      <Container className="applications-section">
        <Row className="mb-5">
          <h4>My Applications</h4>
        </Row>
        <Row>
          <Col className="table-head">Job Position</Col>
          <Col className="table-head">Job Description</Col>
          <Col className="table-head">Job location</Col>
          <Col className="table-head">Job Salary</Col>
          <Col className="table-head">Actions</Col>
        </Row>

        {applications &&
          applications.map((item, index) => {
            return (
              <Row key={index} className="table-item-row">
                <Col>{item.job && item.job.position}</Col>
                <Col>{item.job && item.job.description}</Col>
                <Col>{item.job && item.job.location}</Col>
                <Col>{item.job && item.job.salary}</Col>

                <Col>
                  <Button
                    size="sm"
                    className="m-2 w-100"
                    variant="outline-info"
                  >
                    Application Details
                  </Button>
                  <Button
                    size="sm"
                    className="m-2 w-100"
                    variant="outline-secondary"
                    onClick={() => {
                      viewJobDetails(item.job && item.job._id);
                    }}
                  >
                    Job Details
                  </Button>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}
