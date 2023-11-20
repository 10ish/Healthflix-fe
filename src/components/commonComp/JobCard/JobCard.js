import { Card, Button } from "react-bootstrap";
import "./JobCard.css";
import { FavoriteBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function JobCard({ salary, location, position, id }) {
  const navigate = useNavigate();
  const localStorageKey = `isShortlisted_key${id}`;
  const [selected, setSelected] = useState(
    localStorage.getItem(localStorageKey) === "true"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, selected);
  }, [selected, localStorageKey]);

  const toggleFavorite = () => {
    setSelected(!selected);

    const shortlistedJobsIds =
      JSON.parse(localStorage.getItem("shortlistedJobs")) || [];

    if (selected) {
      // If the job is already shortlisted, remove it from the list
      const updatedJobs = shortlistedJobsIds.filter((jobId) => jobId !== id);
      localStorage.setItem("shortlistedJobs", JSON.stringify(updatedJobs));
    } else {
      // If the job is not shortlisted, add it to the list
      shortlistedJobsIds.push(id);
      localStorage.setItem("shortlistedJobs", JSON.stringify(shortlistedJobsIds));
    }
  };
  const viewJobDetails = () => {
    navigate("/job-details", {
      state: {
        id,
      },
    });
  };
  return (
    <Card className="job-card" style={{ width: "17rem" }}>
      <Card.Body>
        <FavoriteBorder
          className={
            selected ? "favorite-btn favorite-btn-selected" : "favorite-btn"
          }
          onClick={toggleFavorite}
        />

        <Card.Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>{" "}
          {location}
        </Card.Text>
        <Card.Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
            />
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
          </svg>{" "}
          {salary}
        </Card.Text>
        <Card.Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>{" "}
          {position}
        </Card.Text>

        <Button variant="secondary" size="sm" onClick={viewJobDetails}>
          View Details & apply
        </Button>
      </Card.Body>
    </Card>
  );
}
