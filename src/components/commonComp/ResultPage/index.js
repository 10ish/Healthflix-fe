import { Link } from "react-router-dom";
import "./index.css";
export default function ResultPage({ type }) {
  let pageDetails = {
    heading: "",
    subheading: "",
    endText: "",
    btnLink: "",
    btnText: "",
  };

  if (type === "error") {
    pageDetails.heading = "404";
    pageDetails.subheading = "The page you are looking for doesnt exist";
    pageDetails.endText = "Oops, page not found";
    pageDetails.btnText = "Go Home";
    pageDetails.btnLink = "/";
  } else if (type === "adminUnauthorised") {
    pageDetails.heading = "403";
    pageDetails.subheading =
      "Sorry you do not have permissions to view this page";
    pageDetails.btnText = "Go to admin login";
    pageDetails.btnLink = "/admin";
  } else if (type === "userUnauthorised") {
    pageDetails.heading = "403";
    pageDetails.subheading =
      "Sorry you do not have permissions to view this page";
    pageDetails.btnText = "Go to login";
    pageDetails.btnLink = "/applicants/login";
  } else if (type === "submitApplicantSuccess") {
    pageDetails.heading = "Thankyou!";
    pageDetails.subheading = "You have been registered successfully with us";
    pageDetails.endText = "We Welcome you to Healthflix Medical. ";
    pageDetails.btnText = "Login";
    pageDetails.btnLink = "/applicants/login";
  } else if (type === "submitApplicantFailure") {
    pageDetails.heading = "Sorry ";
    pageDetails.subheading =
      "We are not able to submit your request at this moment. Please try again after some time";
    pageDetails.endText = "Sorry for the inconvinenece ";
  } else if (type === "submitStaffingReqSuccess") {
    pageDetails.heading = "Thankoyou for contacting with us  ";
    pageDetails.subheading =
      "Your staffing request have been registered successfully with us";
    pageDetails.endText = "We will get back to you shortly";
  } else if (type === "applicantLoginSuccess") {
    pageDetails.heading = "Welcome";
    pageDetails.subheading = "You have been logged in successfully with us";
    pageDetails.endText = "We will get back to you shortly";
  } else {
    pageDetails.heading = "Sorry ";
    pageDetails.subheading =
      "We are not able to submit your request at this moment. Please try again after some time";
    pageDetails.endText = "Sorry for the inconvinenece ";
  }

  return (
    <div className="vh-100 ww-100 d-flex align-items-center justify-content-center vh-100 error-page">
      <div className="text-center">
        <h1 className="display-1 fw-bold">{pageDetails.heading}</h1>
        <p className="fs-3">
          {" "}
          <span
            className={
              (type === "adminUnauthorised" ||
              type==='userUnauthorised'||
              type === "error" ||
              type === "submitApplicantFailure" ||
              type === "submitStaffingReqFailure")
                ? "text-danger"
                : "text-success"
            }
          >
            {pageDetails.subheading}
          </span>
        </p>
        <p className="lead">{pageDetails.endText}</p>
        <Link to={pageDetails.btnLink} className="btn btn-primary">
          {pageDetails.btnText}
        </Link>
      </div>
    </div>
  );
}
