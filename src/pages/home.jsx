import React from "react";
import "../styles/home.css";
import "../styles/banner.css";
import Banner from '../component/Banner'
import "../styles/JobRecommendation.css";
// import Recommended from "../component/Recommended";

import JobReccomendation from "../component/JobReccomendation";

function Home() {
  return (
    <div className="home">
      <Banner />
      {/* <Recommended /> */}
      <JobReccomendation />
    </div>
  );
}
export default Home;
