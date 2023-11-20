import DeleteModal from "./DeleteModal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import JobFormModal from "../../JobFormModal";

export default function ListItem({ type, item, links, setData }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);

  const handleJobFormClose = () => setShowJobForm(false);
  const handleJobFormShow = () => setShowJobForm(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleViewDetailsPage = (id) => {
    navigate("/admin/viewDetailsPage", {
      state: {
        id: id,
        type: type,
      }
    });
  };
  const handleDelete = (id) => {
    axios
      .delete(links.deleteLink, {
        data: { id },
      })
      .then((res) => {
        console.log(res);
        axios
          .get(links.fetchLink)
          .then((res) => {
            setData(res.data);
            handleClose();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Row sm={12}>
      {type === "applicant" ? (
        <li className="applicant-list-item">
          <span className="applicant-list-item-content">
            {" "}
            <strong className="applicant-list-item-content-head">Email</strong>
            <hr />
            <a
              className="applicant-list-item-email-link"
              href={`mailto:${item.email}`}
            >
              {item.email}
            </a>
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Position
            </strong>

            <hr />
            {item.position}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              {"Speciality"}
            </strong>

            <hr />
            {item.speciality}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              {"Contract Type"}
            </strong>

            <hr />
            {item.contractType}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              {"Full Name"}
            </strong>

            <hr />
            {item.fullName}
          </span>
          <Button
            className="applicant-list-item-content"
            variant="secondary"
            onClick={() => {
              handleViewDetailsPage(item._id);
            }}
          >
            {" "}
            View all details
          </Button>
          <Button
            className="applicant-list-item-content"
            variant="danger"
            onClick={handleShow}
          >
            Delete
          </Button>
          <Button className="applicant-list-item-content" variant="info">
            Download Resume
          </Button>{" "}
          <DeleteModal
            type={"applicant"}
            handleDelete={handleDelete}
            listItemId={item._id}
            show={show}
            handleClose={handleClose}
          />
        </li>
      ) : type === "job" ? (
        <li className="applicant-list-item">
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Position
            </strong>

            <hr />
            {item.position}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Location
            </strong>

            <hr />
            {item.location}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Job Type
            </strong>

            <hr />
            {item.jobType}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Speciality
            </strong>

            <hr />
            {item.speciality}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">Salary</strong>
            <hr />
            {item.salary}
          </span>
          <Button
            className="applicant-list-item-content"
            variant="secondary"
            onClick={() => {
              handleViewDetailsPage(item._id);
            }}
          >
            {" "}
            View Job details
          </Button>
          <Button
            className="applicant-list-item-content"
            variant="danger"
            onClick={handleShow}
          >
            Delete
          </Button>
          <Button
            className="applicant-list-item-content"
            variant="info"
            onClick={handleJobFormShow}
          >
            Update Job Details
          </Button>{" "}
          <DeleteModal
            type={"job"}
            handleDelete={handleDelete}
            listItemId={item._id}
            show={show}
            handleClose={handleClose}
          />
          <JobFormModal
            formType={"Update"}
            data={item}
            show={showJobForm}
            handleClose={handleJobFormClose}
          />
        </li>
      ) : type === "staffingRequest" ? (
        <li className="applicant-list-item">
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">Title</strong>

            <hr />
            {item.title}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">Name</strong>

            <hr />
            {item.name}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Contact
            </strong>

            <hr />
            {item.contact}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">Email</strong>

            <hr />
            <a
              className="applicant-list-item-email-link"
              href={`mailto:${item.email}`}
            >
              {item.email}
            </a>
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Position
            </strong>

            <hr />
            <br />
            {item.position}
          </span>
          <Button
            className="applicant-list-item-content"
            variant="secondary"
            onClick={() => {
              handleViewDetailsPage(item._id);
            }}
          >
            {" "}
            View details
          </Button>
          <Button
            className="applicant-list-item-content"
            variant="danger"
            onClick={handleShow}
          >
            Delete
          </Button>
          <Button className="applicant-list-item-content" variant="info">
            <a
              className="applicant-list-item-email-link email-btn-link"
              href={`mailto:${item.email}`}
            >
              Send Email
            </a>
          </Button>{" "}
          <DeleteModal
            type={"staffing request"}
            handleDelete={handleDelete}
            listItemId={item._id}
            show={show}
            handleClose={handleClose}
          />
        </li>
      ) : type === "application" ? (
        <li className="applicant-list-item">
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">Applicant Name</strong>

            <hr />
           {item.applicant&&item.applicant.fullName}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">Job Position</strong>

            <hr />
            {item.job&&item.job.position}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Contact
            </strong>

            <hr />
            {item.contact}
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">Email</strong>

            <hr />
            <a
              className="applicant-list-item-email-link"
              href={`mailto:${item.email}`}
            >
              {item.applicant&&item.applicant.email}
            </a>
          </span>
          <span className="applicant-list-item-content">
            <strong className="applicant-list-item-content-head">
              Job location
            </strong>

            <hr />
            <br />
            {item.job&&item.job.location}
          </span>
          <Button
            className="applicant-list-item-content"
            variant="secondary"
            onClick={() => {
              handleViewDetailsPage(item._id);
            }}
          >
            {" "}
            View details
          </Button>
          <Button
            className="applicant-list-item-content"
            variant="danger"
            onClick={handleShow}
          >
            Delete
          </Button>
          <Button className="applicant-list-item-content" variant="info">
          <a
            className="applicant-list-item-email-link email-btn-link"
            href={`mailto:${item.applicant&&item.applicant.email}`}
          >
            Send Email
          </a>
        </Button>{" "}
          <DeleteModal
            type={"application"}
            handleDelete={handleDelete}
            listItemId={item._id}
            show={show}
            handleClose={handleClose}
          />
        </li>
      ) : null}
    </Row>
  );
}
