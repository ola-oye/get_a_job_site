import HeroImage from "./HeroImage";
import "../styles/Testimony.css"
export default function Testimony() {
  return (
    <div className="testimony-container">
      <HeroImage
        width={326}
        height={346}
        bgImage={"images/image_23.png"}
        borderRadius={20}
        top={-17}
        left={-25}
        className={"bgImageBox"}
      />
    </div>
  );
}
