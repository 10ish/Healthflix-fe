import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Button from "react-bootstrap/Button";
import JobFormModal from "../JobFormModal";
import SearchBarAdmin from "./components/SearchBarAdmin";

import ListItem from "./components/ListItem";
export default function AdminControlsPage({ type }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [showJobForm, setShowJobForm] = useState(false);
 

  
  const handleJobFormClose = () => setShowJobForm(false);
  const handleJobFormShow = () => setShowJobForm(true);



  let links = {
    fetchLink: "",
    deleteLink: "",
    updateLink: "",
  };
  let pageData = {
    heading: "",
    subHeading: "",
  };

  if (type === "applicant") {
    links.fetchLink = "https://healthflix-be.vercel.app/applicants";
    links.deleteLink = "https://healthflix-be.vercel.app/applicants/delete";
    pageData.heading = "Applicants Admin";
    pageData.subHeading =
      "Here is a list of all the applicants that have registered so far";
  } else if (type === "job") {
    links.fetchLink = "https://healthflix-be.vercel.app/jobs";
    links.deleteLink = "https://healthflix-be.vercel.app/jobs/delete";
    links.updateLink = "https://healthflix-be.vercel.app/jobs/update";
    pageData.heading = "Jobs Admin";
    pageData.subHeading =
      "Here is a list of all the jobs you have added so far";
  } else if (type === "application") {
    links.fetchLink = "https://healthflix-be.vercel.app/applications";
    links.deleteLink = "https://healthflix-be.vercel.app/applications/delete";
    pageData.heading = "Applications Admin";
    pageData.subHeading =
      "Here is a list of all the applications you  have registered so far";
  } else {
    links.fetchLink = "https://healthflix-be.vercel.app/staffingRequests";
    links.deleteLink = "https://healthflix-be.vercel.app/staffingRequests/delete";
    pageData.heading = "Staffing Request Admin";
    pageData.subHeading =
      "Here is a list of all the staffing requests you  have  so far";
  }

  useEffect(() => {
    axios
      .get(links.fetchLink)
      .then((res) => {
        console.log(res.data)
        setData(res.data);
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="heading">
        <h1>{pageData.heading}</h1>
        {type === "job" && <Button variant="success" onClick={handleJobFormShow}> + Add a job</Button>}
        <JobFormModal show={showJobForm} handleClose={handleJobFormClose} formType={'Add'}/>
      </div>

      <h2 style={{ padding: "3%", textAlign: "center" }}>
        {pageData.subHeading}
      </h2>

      <SearchBarAdmin setSearch={setSearch} />
      <ol>
        {data
          .filter((item, index) => {
            if (search.toLowerCase() === " ") {
              return item;
            } else {
              if (type === "applicant") {
                return (
                  (item.email &&
                    item.email.toLowerCase().includes(search.toLowerCase())) ||
                  (item.position &&
                    item.position
                      .toLowerCase()
                      .includes(
                        search.toLowerCase() ||
                          (item.contractType &&
                            item.contractType
                              .toLowerCase()
                              .includes(search.toLowerCase())) ||
                          (item.speciality &&
                            item.speciality
                              .toLowerCase()
                              .includes(search.toLowerCase()))
                      )) ||
                  (item.fullName &&
                    item.fullName
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.infoSource &&
                    item.infoSource
                      .toLowerCase()
                      .includes(search.toLowerCase()))
                );
              } else if (type === "staffingRequest") {
                return (
                  (item.contact&& item.contact.toString().toLowerCase().includes(search.toLowerCase()))||
                  (item.email &&
                    item.email.toLowerCase().includes(search.toLowerCase())) ||
                  (item.title &&
                    item.title.toLowerCase().includes(search.toLowerCase())) ||
                  (item.position &&
                    item.position
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.company &&
                    item.company
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.organization &&
                    item.organization
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.requirements &&
                    item.requirements
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.comments &&
                    item.comments.toLowerCase().includes(search.toLowerCase()))
                );
              } else if (type === "job") {
                return (
                  (item.salary&& item.salary.toString().toLowerCase().includes(search.toLowerCase()))||
                  (item.description &&
                    item.description
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.benifits &&
                    item.benifits
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.position &&
                    item.position
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.location &&
                    item.location
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.speciality &&
                    item.speciality
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.requirements &&
                    item.requirements
                      .toLowerCase()
                      .includes(search.toLowerCase())) ||
                  (item.degree &&
                    item.degree.toLowerCase().includes(search.toLowerCase())) ||
                  (item.jobType &&
                    item.jobType.toLowerCase().includes(search.toLowerCase()))
                );
              } else {
                return item
                
              }
            }
          })
          .map((item, index) => {
            return (
              <ListItem
                type={type}
                item={item}
                links={links}
                setData={setData}
                key={index}
              />
            );
          })}
      </ol>
    </div>
  );
}
