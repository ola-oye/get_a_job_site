export default function HeroImage({
  width,
  height,
  bgImage,
  borderRadius = 20,
  color = "#06942a",
  top = -20,
  left = -30,
  className
}) {
  const imgBoxStyle = {
    width: `${width}px`,
    maxWidth: `${width}px`,
    height: `${height}px`,
    border: `2px solid ${color}`,
    borderRadius: `${borderRadius}px`,
    position: "relative",
  };

  const bgStyling = {
    backgroundImage: `url(${bgImage})`,
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center",
    top: `${top}px`,
    left: `${left}px`,
    width: "100%",
    height: "100%",
    borderRadius: `${borderRadius}px`,
  };

  return (
    <div className= {className} style={imgBoxStyle}>
      <div className="bg" style={bgStyling}></div>
    </div>
  );
}