import "./index.css";
import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import JobCard from "../../commonComp/JobCard/JobCard.js";
import Form from "react-bootstrap/Form";

export default function Jobs() {
  const [jobsData, setJobsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [degree, setDegree] = useState("");
  const [speciality, setSpeciality] = useState("");

  const recordsPerPage = 15;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changeCurrentPage = (id) => {
    console.log(id);
    setCurrentPage(id);
  };

  const nPage = Math.ceil(jobsData.length / recordsPerPage);

  useEffect(() => {
    async function fetchJobs() {
      try {
        await fetch("http://localhost:8000/jobs")
          .then((res) => res.json())
          .then((res) => {
            setJobsData(res);

            console.log(jobsData[0]);
          });
      } catch (err) {
        console.log("Unable to fetch from /jobs due to " + err.message);
      }
    }
    fetchJobs();
  }, []);

  let active = currentPage;
  let items = [];
  let records = jobsData.slice(firstIndex, lastIndex);
  for (let number = 1; number <= nPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          changeCurrentPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <div className="heading">
        <h1>Start your job searching journey here !</h1>
      </div>
      <div>
        <Pagination className="pagination">
          <Pagination.Prev onClick={prevPage} />
          {items}
          <Pagination.Next onClick={nextPage} />
        </Pagination>
      </div>
      <div className="content-section">
        <div className="filters-section">
          <h2>Filters</h2>

          <Form.Control
            type="text"
            placeholder="Enter keyword"
            className="filter-item"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

          <Form.Select
            aria-label="Job Type"
            size="lg"
            className="filter-item"
            onChange={(e) => {
              setJobType(e.target.value);
              console.log(jobType);
            }}
          >
            <option value={"default"}>Select Job Type</option>
            <option value={"interim"}> Interim</option>

            <option value={"per diem"}>Per Diem</option>
            <option value={"locum"}>Locum</option>
            <option value={"travel contract"}>
              Travel Contract/Local Contract
            </option>
          </Form.Select>
          <Form.Select
            aria-label="Job Type"
            size="lg"
            className="filter-item"
            onChange={(e) => {
              setDegree(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option>Select Degree</option>
            <option value={"Nurse Practitioner"}>Nurse Practitioner </option>

            <option value={"Pharmacist"}>Pharmacist</option>
            <option value={"Cath Lab Technologist"}>
              Cath Lab Technologist
            </option>
            <option value={"registered nurse"}>Registered Nurse</option>
            <option value={"physician assistant"}>Physician Assistant</option>
          </Form.Select>
          <Form.Select
            aria-label="Location"
            size="lg"
            className="filter-item"
            onChange={(e) => {
              setLocation(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value={"default"}>Select Location</option>
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
          <Form.Select
            aria-label="Speciality"
            className="filter-item"
            onChange={(e) => {
              setSpeciality(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value={"default"}>Select Speciality</option>
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
              Advanced Practitioner
            </option>
          </Form.Select>
        </div>
        <div className="jobs-section">
          <h2>Jobs</h2>
          <div className="jobs-section-grid">
            {records

              .filter((jobData) => {
                return search.toLowerCase() === ""
                  ? jobData
                  : jobData.position.toLowerCase().includes(search) ||
                      jobData.location.toLowerCase().includes(search) ||
                      jobData.jobType.toLowerCase().includes(search) ||
                      jobData.speciality.toLowerCase().includes(search);
              })
              .filter((jobData) => {
                return jobType.toLowerCase() === "default" || ""
                  ? jobData
                  : jobData.jobType.toLowerCase().includes(jobType);
              })
              .map((jobData, index) => {
                return (
                  <JobCard
                    key={index}
                    salary={jobData.salary}
                    position={jobData.position}
                    location={jobData.location}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <Pagination className="pagination">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
}
