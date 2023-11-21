import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
export default function ChangePasswordForm() {
  const [confirmOldPassword, setConfirmOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [showChangePasswordField, setShowChangePasswordField] = useState(false);
  const [message, setMessage] = useState({ type: "", message: "" });
  const messageStyle={
    padding:'3%',
    textAlign:'center',
    color:message.type==='error'?'red':'green',
    fontSize:'large'

  }
 
  const handlePasswordChange = (e) => {
    e.preventDefault();
    const body = {
      oldPassword: confirmOldPassword,
      newPassword,
      confirmNewPassword,
    };
    axios
      .post("https://healthflix-be.vercel.app/applicants/changePassword", body)
      .then((res) => {
        setMessage({
          type: "success",
          message: res.data.message,
        });
        setTimeout(()=>{
          window.location.reload(false)
        },1000)
      })
      .catch((err) => {
        setMessage({
          type: "error",
          message: err.response.data.message,
        });
      });
  };
  const handlePasswordChangeToggle = () => {
    setShowChangePasswordField(!showChangePasswordField);
  };
  const handlePasswordFieldCheck = (e) => {
    if (e.target.value === newPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <Col md={8} lg={8} xs={12}>
          <Card className="shadow px-4">
            <Button
              className="mt-5"
              onClick={handlePasswordChangeToggle}
              variant={
                showChangePasswordField ? "outline-danger" : "info"
              }
            >
              {showChangePasswordField
                ? "Close Change Pasword Form"
                : "Change Password"}
            </Button>
            {message !== "" ? (
              <p className="response-message" style={messageStyle}>
                {message.message}
              </p>
            ) : null}
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  {showChangePasswordField && (
                    <Form
                      onSubmit={(e) => {
                        handlePasswordChange(e);
                      }}
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Enter Your Old Password</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          placeholder="Password"
                          onChange={(e) => {
                            setConfirmOldPassword(e.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Enter new password</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          placeholder="Password"
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          placeholder="Password"
                          onChange={(e) => {
                            setConfirmNewPassword(e.target.value);
                            handlePasswordFieldCheck(e);
                          }}
                        />
                      </Form.Group>
                      {newPassword && confirmNewPassword !== "" ? (
                        newPassword !== confirmNewPassword ? (
                          <p style={{ color: "red" }}>
                            The passwords do not match
                          </p>
                        ) : (
                          <p style={{ color: "green" }}>Passwords Match</p>
                        )
                      ) : null}
                      <Button
                        type="submit"
                        variant="outline-success"
                        disabled={!passwordsMatch}
                      >
                        Change Password
                      </Button>
                    </Form>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
