function Banner() {
  return (
    <div className="banner">
      <div className="disBox">
        <h2 className="banner-title">
          Find a <span>job</span> easily
        </h2>
        <p className="banner-text">
          With verified, up-to-date job listingd directly from employer
          websites, we create a premium experience for job seekers, employers,
          and data seekers alike.
        </p>

        <div className="search">
          <input
            type="text"
            className="searchInput input"
            placeholder="Enter keyword, skill, interest"
          />

          <div className="locationIconBox borderLine">
            <img className="searchIcon" src='images/map_pin.png' alt="Map Icon" />
          </div>
          <input
            type="text"
            className="locationInput input borderLine"
            placeholder="Location"
          />
          <div className="searchIconBox">
            <img className="searchIcon" src="images/search.png" alt="Search Icon" />
          </div>
        </div>
      </div>

      <div className="heroImgBox">
        <img src='images/heroImg.png' alt="Hero" />
      </div>
    </div>
  );
}

export default Banner;
