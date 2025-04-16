import React from "react";
import "../styles/OverHundredJobs.css";

const features = [
  {
    image: "images/image_16.png",
    companyName: "Uber",
  },
  {
    image: "images/image_17.png",
    companyName: "9 mobile",
  },
  {
    image: "images/image_18.png",
    companyName: "Zapier",
  },
  {
    image: "images/image_19.png",
    companyName: "google",
  },
  {
    image: "images/image_20.png",
    companyName: "airtel",
  },
  {
    image: "images/image_21.png",
    companyName: "accrnture",
  },
  {
    image: "images/image_3.svg",
    companyName: "Flutterwave",
  },
  {
    image: "images/image_22.png",
    companyName: "Mckinsey",
  },
];
export default function OverHundredJobs() {
  return (
    <div className="OverHundredJobs-container">
      <div className="discription">
        <h1 className="dis-title">
          Over 1000+ jobs from top companies in our network
        </h1>

        <p className="first-text">
          Every day we index millions of jobs directly from employer websites.
          We’re committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>

        <p className="second-text">
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox
        </p>

        <div role="button" className="learnmore-wrapper">
            <img src="images/learn-more.png" alt="Learn more button" className="learnmore" />
        </div>
      </div>

      <div className="logo-box">
        {features.map((item, index) => (
          <div key={index} className="logo-wrapper">
            <img
              src={item.image}
              alt={`${item.companyName} logo`}
              className="logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
