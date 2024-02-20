import "./banner.css";

const Banner = ({ imageSrc, title }) => {
  return (
    <>
      <div className="banner-container">
        <img className="banner-image" src={imageSrc} />
        <h3 className="banner-title">{title}</h3>
      </div>
    </>
  );
};

export default Banner;
