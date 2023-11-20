import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { DeleteOutline } from "@mui/icons-material";
import "./index.css";

export default function JobFormModal({ formType, data, show, handleClose }) {
  const [position, setPosition] = useState(data ? data.position : "");
  const [location, setLocation] = useState(data ? data.location : "");
  const [salaryNegotiable, setSalaryNegotiable] = useState(data ? data.salaryNegotiable : false);
  const [salary, setSalary] = useState(data ? data.salary : "");
  const [speciality, setSpeciality] = useState(data ? data.speciality : "");
  const [jobType, setJobType] = useState(data ? data.jobType : "");
  const [requirements, setRequirements] = useState(data ? data.requirements : "");
  const [benifits, setBenifits] = useState(data ? data.benifits : "");
  const [description, setDescription] = useState(data ? data.description : "");
  const [question, setQuestion] = useState("");
  const [questionsArray, setQuestionsArray] = useState(data ? (data.questions || []) : []);
  const [showAddQuestionsForm, setShowAddQuestionForm] = useState(false);

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    const body = {
      position,
      jobType,
      salaryNegotiable,
      location,
      salary,
      speciality,
      requirements,
      benifits,
      description,
      questions: questionsArray,
    };
    e.preventDefault();
    if (formType === "Add") {
      axios
        .post("http://localhost:8000/jobs/add", body)
        .then((res) => {
          console.log(res);
          handleClose();
          window.location.reload(false);
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      if (data && data._id) {
        const url = `http://localhost:8000/jobs/update/${data._id}`;
        axios.patch(url, body)
          .then((res) => {
            console.log(res);
            handleClose();
            window.location.reload(false);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        console.error("Invalid data or data._id is missing");
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        style={
          formType === "Add"
            ? { backgroundColor: "#186149", color: "white" }
            : { backgroundColor: "blueviolet", color: "white" }
        }
      >
        <Modal.Title>{formType} Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="submit-staff-req-section">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Position :</Form.Label>
              <Form.Control
                defaultValue={data && data.position}
                type="text"
                rows={3}
                required
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Salary :</Form.Label>
              <Form.Control
                defaultValue={data && data.salary}
                type="number"
                rows={3}
                required
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
              <Form.Group className="mb-3">
                <Form.Label>Location :</Form.Label>
                <br />
                <Form.Select
                  required
                  className="p-1 m-2 rounded"
                  defaultValue={data && data.location}
                  aria-label="Location"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  <option value={"Arkansas"}>Select Location</option>
                  <option value={"Texas"}> Texas</option>
                  <option value={"Virginia"}>Virginia</option>
                  <option value={"Washington"}>Washington</option>
                  <option value={"Arkansas"}> Arkansas</option>
                  <option value={"Texas"}> Texas</option>
                  <option value={"Virginia"}>Virginia</option>
                  <option value={"Washington"}>Washington</option>
                  <option value={"Arkansas"}> Arkansas</option>
                  <option value={"Texas"}> Texas</option>
                  <option value={"Virginia"}>Virginia</option>
                  <option value={"Washington"}>Washington</option>
                </Form.Select>
              </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Speciality :</Form.Label>
              <br></br>
              <Form.Select
                className="p-1 m-2 rounded"
                defaultValue={data && data.speciality}
                aria-label="Speciality"
                onChange={(e) => {
                  setSpeciality(e.target.value);
                }}
              >
                <option>Select Speciality</option>
                <option value={"Advanced Practitioner"}>
                  {" "}
                  Advanced Practitioner
                </option>
                <option value={"Allied Positions"}>Allied Positions</option>
                <option value={"Cath Lab"}> Cath Lab</option>
                <option value={"Advanced Practitioner"}>
                  Advanced Practitioner
                </option>
                <option value={"Allied Positions"}>Allied Positions</option>
                <option value={"Cath Lab"}> Cath Lab</option>
                <option value={"Advanced Practitioner"}>
                  {" "}
                  Advanced Practitioner
                </option>
                <option value={"Allied Positions"}>Allied Positions</option>
                <option value={"Cath Lab"}> Cath Lab</option>
                <option value={"Advanced Practitioner"}>
                  {" "}
                  Advanced Practitioner
                </option>
                <option value={"Allied Positions"}>Allied Positions</option>
                <option value={"Cath Lab"}> Cath Lab</option>
                <option value={"Advanced Practitioner"}>
                  {" "}
                  Advanced Practitioner
                </option>
                <option value={"Allied Positions"}>Allied Positions</option>
                <option value={"Cath Lab"}> Cath Lab</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Type :</Form.Label>
              <Form.Control
                required={formType === "Add" ? true : false}
                type="text"
                defaultValue={data && data.jobType}
                rows={3}
                onChange={(e) => {
                  setJobType(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Benifits :</Form.Label>
              <Form.Control
                defaultValue={data && data.benifits}
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setBenifits(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description :</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={data && data.description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Requirements :</Form.Label>
              <Form.Control
                as="textarea"
                defaultValue={data && requirements}
                rows={3}
                onChange={(e) => {
                  setRequirements(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="text-center">Salary Negotiable</Form.Label>
              <br />
              <Form.Select
                defaultValue={data && data.salaryNegotiable}
                aria-label="Default select example"
                className="p-1 m-2 rounded"
                onChange={(e) => {
                  if (e.target.value === "yes") {
                    setSalaryNegotiable(true);
                  } else {
                    setSalaryNegotiable(false);
                  }
                }}
              >
                <option value={"yes"}>Yes </option>
                <option value={"no"}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="text-center">Add questions?</Form.Label>
              <br />
              <Form.Select
                defaultValue={data && data.salaryNegotiable}
                aria-label="Default select example"
                className="p-1 m-2 rounded"
                onChange={(e) => {
                  if (e.target.value === "yes") {
                    setShowAddQuestionForm(true);
                  } else {
                    setShowAddQuestionForm(false);
                  }
                }}
              >
                <option value={"no"}>No</option>
                <option value={"yes"}>Yes </option>
              </Form.Select>
            </Form.Group>
            {showAddQuestionsForm && (
              <Form.Group className="mb-3">
                <Form.Label>
                  Add questions you want to ask from candidates
                </Form.Label>
                <div className="question-row">
                  <Form.Control
                    type="text"
                    placeholder="Enter question following a '?'"
                    rows={3}
                    onChange={(e) => {
                      setQuestion(e.target.value);
                    }}
                    value={question}
                  ></Form.Control>
                  <Button
                    variant="info"
                    onClick={() => {
                      setQuestionsArray([...questionsArray, question]);
                      setQuestion("");
                    }}
                  >
                    +
                  </Button>
                </div>
                <div className="a">
                  {questionsArray.map((question, index) => {
                    return (
                      <div className="question" key={index}>
                        {question}{" "}
                        <DeleteOutline
                          style={{ color: "#AB2330" }}
                          onClick={() => {
                            const updatedArray = [...questionsArray];
                            updatedArray.splice(index, 1);
                            setQuestionsArray(updatedArray);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </Form.Group>
            )}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
