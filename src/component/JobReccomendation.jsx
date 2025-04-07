import { useState } from "react";
import ArrowBtn from "./ArrowBtn";

const allJobs = [
  {
    id: 1,
    logo: "images/image_1.png",
    title: "QA Engineer",
    company: "Paystack",
    location: "Lagos, Nigeria",
    type: "Full time",
  },
  {
    id: 2,
    logo: "images/image_2.png",
    title: "Product Analyst",
    company: "Google",
    location: "Lagos, Nigeria",
    type: "Part time",
  },
  {
    id: 3,
    logo: "images/image_3.svg",
    title: "HR Manager",
    company: "Flutterwave",
    location: "Abuja, Nigeria",
    type: "Full time",
  },
  {
    id: 4,
    logo: "images/image_4.png",
    title: "QA Engineer",
    company: "Paystack",
    location: "Lagos, Nigeria",
    type: "Full time",
  },
  {
    id: 5,
    logo: "images/image_5.png",
    title: "Software Engineer",
    company: "Microsoft",
    location: "Lagos, Nigeria",
    type: "Full time",
  },
  {
    id: 6,
    logo: "images/image_6.png",
    title: "UX Designer",
    company: "Meta",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 7,
    logo: "images/image_7.png",
    title: "DevOps Engineer",
    company: "Interswitch",
    location: "Abuja, Nigeria",
    type: "Full time",
  },
  {
    id: 8,
    logo: "images/image_8.png",
    title: "Technical Writer",
    company: "Andela",
    location: "Lagos, Nigeria",
    type: "Part time",
  },
  {
    id: 5,
    logo: "images/image_5.png",
    title: "Software Engineer",
    company: "Microsoft",
    location: "Lagos, Nigeria",
    type: "Full time",
  },
  {
    id: 6,
    logo: "images/image_6.png",
    title: "UX Designer",
    company: "Meta",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 7,
    logo: "images/image_7.png",
    title: "DevOps Engineer",
    company: "Interswitch",
    location: "Abuja, Nigeria",
    type: "Full time",
  },
  {
    id: 8,
    logo: "images/image_8.png",
    title: "Technical Writer",
    company: "Andela",
    location: "Lagos, Nigeria",
    type: "Part time",
  },
];

const JobReccomendation = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4; // Number of jobs to display per page

  // Calculate total number of pages
  const totalPages = Math.ceil(allJobs.length / jobsPerPage);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = allJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="job-recommendations">
      <h2 className="recommendations-title">Recommended Jobs</h2>

      <div className="job-grid">
        {currentJobs.map((job) => (
          <div key={job.id} className="job-card-wrapper">
            <div className="job-type-badge">{job.type}</div>
            <JobCard
              logo={job.logo}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
            />
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className={`pagination-button prev-button ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <ArrowBtn transform={"matrix(-1, 0, 0, -1, 0, 0)"} fill={currentPage >= 1 && "#06942A"} />
        </button>
        <span className="pagination-info">
          {currentPage} of {totalPages}
        </span>
        <button
          className={`pagination-button next-button ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <ArrowBtn fill={currentPage >= 1 && "#06942A"} />
        </button>
      </div>
    </div>
  );
};

export default JobReccomendation;

const JobCard = ({
  logo,
  title,
  company,
  location,
  type,
  showApplyNow = true,
}) => (
  <div className="job-card">
    <div className="job-logo-container">
      <img src={logo} alt={`${company} logo`} className="job-logo" />
    </div>
    <h3 className="job-title">{title}</h3>

    <div className="job-details">
      <p className="job-company">{company}</p>

      <div className="more-job-info">
        <div className="job-location-info">
          <div className="map-pin-container">
            <img src="images/map_pin.png" alt="Map Icon" className="map-pin" />
          </div>
          <p className="job-location">{location}</p>
        </div>

        <div className="job-apply-container">
          {showApplyNow && <button className="apply-button">Apply now</button>}
        </div>
      </div>
    </div>
  </div>
);