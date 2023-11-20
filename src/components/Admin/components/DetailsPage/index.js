import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
import JobFormModal from "../JobFormModal";
import DeleteModal from "../AdminControlsPage/components/DeleteModal";
import { useNavigate } from "react-router-dom";
export default function ViewDetailsPage() {
  const location = useLocation();
  const pageType = location.state.type;
  const itemId = location.state.id;
  console.log(pageType,itemId)
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAddJobForm, setShowAddJobForm] = useState(false);
  const [showEditJobForm, setShowEditJobForm] = useState(false);
  const navigate = useNavigate();

  const handleAddJobFormClose = () => {
    setShowAddJobForm(false);
  };
  const handleAddJobFormShow = () => {
    setShowAddJobForm(true);
  };

  const handleEditJobFormShow = () => {
    setShowEditJobForm(true);
  };
  const handleEditJobFormClose = () => {
    setShowEditJobForm(false);
  };

  const renderDetailRow = (label, value) => (
    <Row className="details-card-item">
      <Col className="details-card-label">{label}</Col>
      <Col className="details-card-value">{value}</Col>
    </Row>
  );
  const renderApplicationDetails = (data) => {
    return (
      <>
        {renderDetailRow(
          "Applicant Name",
          data && data.applicant && data.applicant.fullName
        )}
        {renderDetailRow(
          "Information Source",
          data && data.applicant && data.applicant.infoSource
        )}
        {renderDetailRow("Questions")}

        {data &&
          data.questions &&
          data.questions.map((questionDetails, index) => (
            <div key={index}>
              {renderDetailRow(
                `${index + 1}. ` + questionDetails.question,
                questionDetails.answer
              )}
            </div>
          ))}
        {renderDetailRow("Job Position", data && data.job && data.job.position)}
        {renderDetailRow("Job Location", data && data.job && data.job.location)}
        {renderDetailRow("Job Position", data && data.job && data.job.position)}
        {renderDetailRow(
          "Applicant Email",
          <a href={`mailto:${data.email}`}>
            {data && data.applicant && data.applicant.email}
          </a>
        )}
      </>
    );
  };
  const renderApplicantDetails = (data) => (
    <>
      {renderDetailRow("Full Name", data.fullName)}
      {renderDetailRow(
        "Email",
        <a href={`mailto:${data.email}`}>{data.email}</a>
      )}
      {renderDetailRow("Position", data.position)}
      {renderDetailRow(
        "Salary Negotiable",
        data.salaryNegotiable ? "Yes" : "No"
      )}
      {renderDetailRow("Information Source", data.infoSource)}
      {renderDetailRow("Contract Type", data.contractType)}
      {renderDetailRow("Speciality", data.speciality)}
      {renderDetailRow("Notifications Enabled", data.notificationEnabled)}
    </>
  );
  const renderJobDetails = (data) => (
    <>
      {renderDetailRow("Position", data.position)}
      {renderDetailRow("Location", data.location)}
      {renderDetailRow(
        "Salary Negotiable",
        data.salaryNegotiable ? "Yes" : "No"
      )}
      {renderDetailRow("Salary", data.salary)}
      {renderDetailRow("Speciality", data.speciality)}
      {renderDetailRow("Requirements", data.requirements)}
      {renderDetailRow("Degree", data.degree)}
      {renderDetailRow("Job Type", data.jobType)}
      {renderDetailRow("Benifits", data.benifits)}
      {renderDetailRow("Description", data.description)}
    </>
  );
  const renderStaffingRequestDetails = (data) => (
    <>
      {renderDetailRow("Title", data.title)}
      {renderDetailRow("Contact", data.contact)}
      {renderDetailRow("Full Name", data.fullName)}
      {renderDetailRow(
        "Email",
        <a href={`mailto:${data.email}`}>{data.email}</a>
      )}
      {renderDetailRow("Company", data.company)}
      {renderDetailRow("Organisation", data.organization)}
      {renderDetailRow("Requirements", data.requirements)}
      {renderDetailRow("Comments", data.comments)}
    </>
  );

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${pageType}s/${itemId}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageType, itemId]);
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/${pageType}s/delete`, {
        data: { id: itemId },
      })
      .then((res) => {
        console.log(res);
        handleClose();
        navigate(`/admin/${pageType}s`);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleViewApplicantDetails = () => {
    if(data&&data.applicant){
      navigate("/admin/viewDetailsPage", {
    
        state: {
          type: "applicant",
          id: data&&data.applicant&&data.applicant._id,
        },
      });
    }
   
  };
  
  const handleViewJobDetails = () => {
    navigate("/admin/viewDetailsPage", {
      state: {
        type: "job",
        id: data&&data.job&&data.job._id,
      },
    });
  };
  

  return (
    <div>
      <div className="heading">
        {pageType.slice(0, 1).toUpperCase() +
          pageType.slice(1, pageType.length) +
          " Details"}
      </div>
      <Container className="details-card">
        {pageType === "applicant"
          ? renderApplicantDetails(data)
          : pageType === "job"
          ? renderJobDetails(data)
          : pageType === "application"
          ? renderApplicationDetails(data)
          : renderStaffingRequestDetails(data)}

        <Row>
          {pageType === "job" ? (
            <Col>
              <Button variant="primary" onClick={handleEditJobFormShow}>
                Update Job
              </Button>

              <JobFormModal
                formType={"Update"}
                data={data}
                show={showEditJobForm}
                handleClose={handleEditJobFormClose}
              />
            </Col>
          ) : pageType === "staffingRequest"|| pageType==='applicant' ? (
            <Col>
              <Button>
                <a href={`mailto:${data.email}`} className="email-btn-link">
                  Send Email
                </a>
              </Button>
            </Col>
          ) : (
            <Col>
              <Button onClick={()=>{
                handleViewJobDetails(data&&data.job&&data.job._id)
              }}>View Job Details</Button>
            </Col>
          )}
          {pageType === "applicant" ? (
            <Col>
              <Button variant="success">Download Resume</Button>
            </Col>
          ) : pageType === "job" ? (
            <Col>
              <Button variant="success" onClick={handleAddJobFormShow}>
                {"+ Add a job"}
              </Button>
              <JobFormModal
                show={showAddJobForm}
                handleClose={handleAddJobFormClose}
                formType={"Add"}
              />
            </Col>
          ) : pageType === "application" ? (
            <Col>
              <Button variant="success" onClick={()=>{
                handleViewApplicantDetails(data&&data.applicant&&data.applicant._id)
              }}>
                {"View Applicant Details"}
              </Button>
              
            </Col>
          ) : null}
          <Col>
            <Button variant="danger" onClick={handleShow}>
              {"Delete "} {pageType}
            </Button>
          </Col>
        </Row>
        <DeleteModal
          type={pageType}
          handleDelete={handleDelete}
          listItemId={itemId}
          show={show}
          handleClose={handleClose}
        />
      </Container>
    </div>
  );
}
