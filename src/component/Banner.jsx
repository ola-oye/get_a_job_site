function Banner() {
  return (
    <div className="banner">
      <TextSearchBox />
      <HeroImage />
    </div>
  );
}

function TextSearchBox() {
  return (
    <div className="disBox">
      <BannerText />
      <Search />
      <HiringCompaniesLogo />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="heroImgBox">
      <div className="bg"></div>
    </div>
  );
}

function BannerText() {
  return (
    <>
      <p className="banner-title">
        Find a <span>job</span> easily
      </p>
      <p className="banner-text">
        With verified, up-to-date job listingd directly from employer websites,
        we create a premium experience for job seekers, employers, and data
        seekers alike.
      </p>
    </>
  );
}
function Search() {
  return (
    <div className="search">
      <input
        type="text"
        className="searchInput input"
        placeholder="Enter keyword, skill, interest"
      />

      <div className="locationIconBox borderLine">
        <img className="searchIcon" src="images/map_pin.png" alt="Map Icon" />
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
  );
}

function HiringCompaniesLogo() {
  return (
    <>
      <p className="trustedBy">Trusted by:</p>

      <div className="brandLogos">
        <div>
          <img src="images/paystack.svg" alt="Paystack Logo" />
        </div>
        <div>
          <img src="images/google.svg" alt="Google Logo" />
        </div>
        <div>
          <img src="images/kpmg.svg" alt="KPMG Logo" />
        </div>
      </div>
    </>
  );
}

export default Banner;
