import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../../../commonComp/JobCard/JobCard";
import "./index.css";

export default function ShortlistedJobs() {
  const shortlistedJobIds = JSON.parse(localStorage.getItem("shortlistedJobs"));
  const [shortlistedJobs, setShortlistedJobs] = useState([]);
  console.log(shortlistedJobIds)
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/jobs")
      .then((res) => {
        const filteredJobs = res.data.filter((job) =>
        shortlistedJobIds.includes(job._id)
      );
      setShortlistedJobs(filteredJobs);
      })
      .then(() => console.log(shortlistedJobs))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  return (
    <div className="shortlisted-jobs-page">
      <div className="heading">
        <h1>Shortlisted Jobs</h1>
        
      </div>
      
<h2 style={{textAlign:'center',padding:'3%' }}>Here is a list of all your shortlisted jobs</h2>
     
      <div className="shortlisted-jobs-section">
        {shortlistedJobs
          .map((job, index) => {
            return (
              <JobCard className='shortlisted-job-card'
                salary={job.salary}
                location={job.location}
                id={job._id}
                position={job.position}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}
