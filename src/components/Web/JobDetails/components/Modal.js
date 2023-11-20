import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";

function ApplyJobModal({ show, handleClose, data, jobId }) {
  const { userIsLoggedIn } = useContext(AuthContext);

  const [questionDetails, setQuestionDetails] = useState([]);
  useEffect(() => {
    if (data && data.questions) {
      const initialDetails = data.questions.map((question) => ({
        question,
        answer: "",
      }));
      setQuestionDetails(initialDetails);
    }
  }, [data]);
  console.log(questionDetails);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/applicants/login");
  };
  const handleInputChange = (index, value) => {
    const updatedDetails = [...questionDetails];
    updatedDetails[index].answer = value;
    setQuestionDetails(updatedDetails);
  };
  const handleSubmit = () => {
    const postData = {
      jobId,
      questionDetails
    };
    axios
      .post("http://localhost:8000/applications/submit", postData)
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {userIsLoggedIn ? "Apply for job" : "Unauthorised"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <h4 className="modal-body-head">
          {userIsLoggedIn
            ? "Submit Application"
            : "Sorry! you need to login first in order to apply for this job"}
        </h4>
        <hr />

        {data && data.questions ? (
          <Form onSubmit={handleSubmit}>
            {data.questions.map((item, index) => {
              return (
                <Form.Group
                  className="mb-3"
                  key={index}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>{item}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => {
                      handleInputChange(index, e.target.value);
                    }}
                  />
                </Form.Group>
              );
            })}
          </Form>
        ) : null}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant={userIsLoggedIn ? "primary" : "danger"}
          onClick={userIsLoggedIn ? handleSubmit : redirectToLogin}
        >
          {userIsLoggedIn ? "Apply for Job" : "Go back to login"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ApplyJobModal;
