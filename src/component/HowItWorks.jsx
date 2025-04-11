import "../styles/HowItWorks.css";

const WorkerDetails = [
  {
    id: 1,
    picture: "images/image_5.png",
    jobRole: "Product Analyst",
    company: "Paystack",
  },
  {
    id: 2,
    picture: "images/image_6.png",
    jobRole: "HR Manager",
    company: "Paystack",
  },
  {
    id: 3,
    picture: "images/image_7.png",
    jobRole: "Securities Trader",
    company: "Mckinnesy",
  },
];

const features = [
  {
    title: "Search Jobs",
    description:
      "We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.",
  },
  {
    title: "Create a Profile and Get Noticed",
    description:
      "Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.",
  },
  {
    title: "Apply for jobs",
    description:
      "Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.",
  },
];

export default function HowItWorks() {
  return (
    <div className="howItWorks-container">
      <div className="card-grid">
        {WorkerDetails.map((person) => (
          <div className="card-wrapper" key={person.id}>
            <WorkCard
              picture={person.picture}
              JobRole={person.jobRole}
              company={person.company}
            />
          </div>
        ))}
      </div>

      <div className="info-column">
        <h1 className="main-title">How it works</h1>

        <p className="intro-text">
          GetaJob helps you find the right job easily. GetaJob helps you find
          the right job easily. GetaJob helps you find the right job easily.
        </p>

        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-content">
                <div className="check-icon">
                  <img src="images/check_circle.svg" alt="check circle Icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
              </div>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkCard({ picture, JobRole, company }) {
  return (
    <div className="card-container">
      <div className="img-wrapper">
        <img
          src={picture}
          alt={`worker at ${company}`}
          className="worker-image"
        />
      </div>
      <div className="jobRole-info">
        {JobRole} <p className="green-color">{`@ ${company}`}</p>
      </div>
    </div>
  );
}
