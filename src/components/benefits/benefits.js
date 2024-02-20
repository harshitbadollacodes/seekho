import "./benefits.css";

const Benefits = ({ benefits }) => {
  const { title, benefits: benefitsArr } = benefits;

  return (
    <div className="benefits-container">
      <div className="benefits-title-container">
        <h3 className="benefits-title">{title}</h3>
      </div>
      <div className="benefits-list-container">
        {benefitsArr.map(({ icon, title, sub_title: description }) => (
          <div className="benefit-container" key={title}>
            <img src={icon} className="benefit-icon" alt="icon" />
            <div className="benefit-text-container">
              <h3 className="benefit-title">{title}</h3>
              <p className="benefit-description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
