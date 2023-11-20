import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AddLocationOutlined,
  CheckCircleOutline,
  DescriptionOutlined,
  MonetizationOnOutlined,
  Person4Outlined,
  GradeOutlined,
  WorkOutlineOutlined,
  CardGiftcardOutlined,
  AttachMoneyOutlined,
  MoneyOffCsredOutlined,
} from "@mui/icons-material";
import axios from "axios";
import "./index.css";

import ApplyJobModal from "./components/Modal";

export default function JobDetails() {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  const location = useLocation();
  const id = location.state.id;
  const localStorageKey = `isShortlisted_key${id}`;
  const [shortlisted, setShortlisted] = useState(
    localStorage.getItem(localStorageKey) === "true"
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    localStorage.setItem(localStorageKey, shortlisted);
  }, [shortlisted, localStorageKey]);
  useEffect(() => {}, [id]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/jobs/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleGoBack = () => {
    window.history.go(-1);
  };
  const handleToggle = () => {
    setShortlisted(!shortlisted);
    const shortlistedJobsIds =
      JSON.parse(localStorage.getItem("shortlistedJobs")) || [];
    if (shortlisted) {
      const updatedJobs = shortlistedJobsIds.filter((jobId) => jobId !== id);
      localStorage.setItem("shortlistedJobs", JSON.stringify(updatedJobs));
    } else {
      shortlistedJobsIds.push(id);
      localStorage.setItem(
        "shortlistedJobs",
        JSON.stringify(shortlistedJobsIds)
      );
    }
  };
  if (id) {
    return (
      <div className="job-details-page">
        <div className="heading">
          <h1>Job : {data.position}</h1>
        </div>
        <Container className="job-details-card">
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                {" "}
                <AddLocationOutlined style={{ color: "#FB5B5A" }} />
                {"  "} Location :
              </h6>
            </Col>

            <Col>
              <p>{data.location}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                <DescriptionOutlined style={{ color: "#5E3B4D" }} /> Description
                :
              </h6>
            </Col>

            <Col>
              <p>{data.description}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                <CheckCircleOutline style={{ color: "#2F576E" }} /> Requirements
                :
              </h6>
            </Col>

            <Col>
              <p>{data.requirements}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                <MonetizationOnOutlined style={{ color: "#5C5470" }} /> Salary :
              </h6>
            </Col>

            <Col>
              <p>{data.salary}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                <Person4Outlined style={{ color: "#BC4873" }} /> Position :
              </h6>
            </Col>

            <Col>
              <p> {data.position}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                <GradeOutlined style={{ color: "#D49B54" }} /> Speciality :
              </h6>
            </Col>

            <Col>
              <p>{data.speciality}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                <WorkOutlineOutlined style={{ color: "#219897" }} /> Job Type :
              </h6>
            </Col>

            <Col>
              <p>{data.jobType}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                <CardGiftcardOutlined style={{ color: "#A12568" }} /> Benifits :
              </h6>
            </Col>

            <Col>
              <p>{data.benifits}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row">
            <Col>
              {" "}
              <h6>
                {data.salaryNegotiable ? (
                  <AttachMoneyOutlined style={{ color: "green" }} />
                ) : (
                  <MoneyOffCsredOutlined style={{ color: "red" }} />
                )}
                Salary Negotiable :
              </h6>
            </Col>

            <Col>
              <p>{data.salaryNegotiable ? "Yes" : "False"}</p>
            </Col>
          </Row>
          <Row className="job-details-card-row job-details-card-btn-row">
            <Col>
              <Button variant="primary" onClick={handleShow}>
                Apply for this job
              </Button>
            </Col>
            <Col>
              <Button
                variant={shortlisted ? "danger" : "info"}
                onClick={handleToggle}
              >
                {shortlisted ? "Remove from shortlist" : "Add to Shortlist"}
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={handleGoBack}>
                {" "}
                Go back
              </Button>
            </Col>
          </Row>
        </Container>
        <ApplyJobModal
          show={show}
          handleClose={handleClose}
          data={data}
          jobId={id}
        />
      </div>
    );
  }
}
