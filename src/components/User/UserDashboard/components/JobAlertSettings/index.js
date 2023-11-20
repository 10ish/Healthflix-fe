import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
export default function UserJobAlertSettings() {
  const [notificationEnabled, setNotificationEnabled] = useState();
  const [jobAlertData, setJobAlertData] = useState({});
  const [showJobProfileForm, setShowJobProfileForm] = useState(false);
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [profileTitle, setProfileTitle] = useState("");

  const toggleAddJobProfileForm = () => {
    setShowJobProfileForm(!showJobProfileForm);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/applicants/getJobAlertData")
      .then((res) => {
        console.log(res.data);
        setJobAlertData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdateNotificationEnabled = (e) => {
    console.log("formSubmitted");
    e.preventDefault();
    const body = {
      notificationEnabled: notificationEnabled && notificationEnabled,
    };
    axios
      .post("http://localhost:8000/applicants/setNotificationsEnabled", body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.reload(-1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddJobProfile = (e) => {
    e.preventDefault();

    const postData = {
      profileTitle,
      jobType,
      speciality,
      location,
    };
    axios
      .post("http://localhost:8000/applicants/addJobAlertProfile", { postData })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload(-1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="user-job-alert-settings">
      <Container>
        <Form
          className="user-job-alert-settings-form"
          onSubmit={(e) => {
            handleUpdateNotificationEnabled(e);
          }}
        >
     
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="text-center">
              Do you wish to sign up for Job Alerts ?:
            </Form.Label>
            <br />
            <Form.Select
              aria-label="Default select example"
              className="p-1 m-2 rounded"
              required
              defaultValue={
                jobAlertData && jobAlertData.notificationEnabled ? "yes" : "no"
              }
              onChange={(e) => {
                if (e.target.value === "yes") {
                  setNotificationEnabled(true);
                } else if (e.target.value === "no") {
                  setNotificationEnabled(false);
                }
              }}
            >
              <option>Select..</option>
              <option value="yes">Yes </option>
              <option value="no">No</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="outline-info">
            Save Changes
          </Button>
        </Form>
      </Container>
      {jobAlertData.jobAlertProfiles && (
        <Container className="user-job-alert-profiles">
          <Row>
            <h4 className="mb-4">Your Job Alert Profiles</h4>
          </Row>
          <Row>
            <Col className="table-head">Profile Title</Col>

            <Col className="table-head">Actions</Col>
          </Row>
       
            {jobAlertData.jobAlertProfiles.map((item, index) => {
              return (
                
                  <Row className="table-item-row">
                    <Col>{item.title}</Col>
                    <Col>
                      <Button variant="outline-dark" className="m-2">
                        Edit
                      </Button>
                      <Button variant="outline-danger" className="m-2">
                        Delete
                      </Button>
                    </Col>
                  </Row>
               
              );
            })}
         
        </Container>
      )}
      <Container>
        <Button
          variant={showJobProfileForm ? "outline-danger" : "success"}
          className="w-100"
          onClick={toggleAddJobProfileForm}
        >
          {showJobProfileForm ? "Close form" : "Add new job alert profile"}
        </Button>
      </Container>
      <Container>
        {showJobProfileForm && (
          <Form
            className="user-job-alert-settings-form"
            onSubmit={(e) => {
              handleAddJobProfile(e);
            }}
          >
            <Row className="mb-5">
              <h4>Add a new job profile alert profile</h4>
            </Row>
            <Form.Group>
              <Row>
                <Col>
                  {" "}
                  <Form.Label>Enter Profile Title</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    className="job-profile-select-input"
                    onChange={(e) => {
                      setProfileTitle(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Select Speciality:</Form.Label>
                </Col>
                <Col>
                  <Form.Select
                    aria-label="Speciality"
                    className="job-profile-select-input"
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
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  {" "}
                  <Form.Label>Select location:</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Select
                    aria-label="Location"
                    className="job-profile-select-input"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  >
                    <option value={"Arkansas"}>Select Location : </option>
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
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Select Job Type:</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Select
                    className="job-profile-select-input"
                    aria-label="Job Type"
                    onChange={(e) => {
                      setJobType(e.target.value);
                    }}
                  >
                    <option>Select Job Type : </option>
                    <option value={"interim"}> Interim</option>
                    <option value={"travel"}>Travel</option>
                    <option value={"locum"}> Locum</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
            <Row>
              {" "}
              <Button
                variant="outline-info"
                className="w-100 mt-5"
                type="submit"
              >
                Submit
              </Button>
            </Row>
          </Form>
        )}
      </Container>
    </div>
  );
}
