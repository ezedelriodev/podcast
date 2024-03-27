import "./filter.style.css";

const Filter = () => {
  return (
    <div className="filter__container">
      <span className="filter__counter">999</span>
      <input className="filter__input" type="text" placeholder="Filter podcast..." />
    </div>
  );
};

export default Filter;
