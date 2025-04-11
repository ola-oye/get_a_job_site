import "../styles/PopularCategories.css";

const categories = [
  {
    icon: "images/image_8.png",
    title: "Oil and Gas",
    newJobCount: "20",
  },
  {
    icon: "images/image_9.png",
    title: "Healthcare",
    newJobCount: "10",
  },
  {
    icon: "images/image_10.png",
    title: "Education",
    newJobCount: "10",
  },
  {
    icon: "images/image_11.png",
    title: "Accounting",
    newJobCount: "10",
  },
  {
    icon: "images/image_12.png",
    title: "Design, Art and Muitimedia",
    newJobCount: "20",
  },
  {
    icon: "images/image_13.png",
    title: "Technology",
    newJobCount: "10",
  },
  {
    icon: "images/image_14.png",
    title: "Security",
    newJobCount: "10",
  },
  {
    icon: "images/image_15.png",
    title: "Data Analyst",
    newJobCount: "10",
  },
];

export default function PopularCategories() {
  return (
    <div className="main-box">
      <h1 className="box-title">Popular Categories</h1>
      <div className="category-box">
        {categories.map((nitch, index) => (
          <div key={index} className="box-wrapper">
            <div className="icon-wrapper">
              <img src={nitch.icon} alt={`${nitch.title} icon`} className="category-icon"/>
            </div>

            <p className="category-title">{nitch.title}</p>
            <p className="new-job">({nitch.newJobCount} new Jobs)</p>
          </div>
        ))}
      </div>
    </div>
  );
}
