import React from "react";
import "../styles/home.css";
import "../styles/banner.css";
import Banner from '../component/Banner'
import "../styles/JobRecommendation.css";
import HowItWorks from "../component/HowItWorks";
import JobReccomendation from "../component/JobReccomendation";
import PopularCategories from "../component/PopularCategories";

function Home() {
  return (
    <div className="home">
      <Banner />
      <JobReccomendation />
      <HowItWorks />
      <PopularCategories />
    </div>
  );
}
export default Home;
