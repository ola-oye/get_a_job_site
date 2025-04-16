import React from "react";
import "../styles/home.css";
import "../styles/banner.css";
import Banner from '../component/Banner'
import "../styles/JobRecommendation.css";
import HowItWorks from "../component/HowItWorks";
import JobReccomendation from "../component/JobReccomendation";
import PopularCategories from "../component/PopularCategories";
import OverHundredJobs from "../component/OverHundredJobs";
import Testimony from "../component/Testimony";

function Home() {
  return (
    <div className="home">
      <Banner />
      <JobReccomendation />
      <HowItWorks />
      <PopularCategories />
      <OverHundredJobs />
      <Testimony />
    </div>
  );
}
export default Home;
