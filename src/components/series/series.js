import "./series.css";

const Series = ({ series }) => {
  const { title, series_list } = series;
  return (
    <div className="series-container">
      <h3 className="series-title">{title}</h3>
      <div className="series-list-container">
        {series_list.map(({ id, image, display_title }) => (
          <img
            key={id}
            src={image}
            alt={display_title}
            className="series-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Series;
