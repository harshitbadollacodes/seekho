import { capitalizeFirstLetter } from "../../utils/stringUtils";
import "./plans.css";

const Plan = ({ plans, selectedPlan, setSelectedPlan }) => {
  const changeHandler = (e, plan) => {
    let targetElement = e.target;

    while (targetElement && !targetElement.id) {
      targetElement = targetElement.parentElement;
    }

    if (targetElement && targetElement.id) {
      setSelectedPlan(plan);
    }
  };

  return (
    <>
      <div className="plans-container">
        {plans.map((plan) => {
          const {
            id,
            original_price,
            min_mandate_price,
            duration_text,
            is_selected,
          } = plan || {};
          return (
            <div
              key={id}
              className="plan-card"
              onClick={(e) => changeHandler(e, plan)}
              id={id}
            >
              <div className="price-details">
                <div className="checkbox-container">
                  <div className="checkbox" />
                  {selectedPlan === plan && <div className="active"></div>}
                </div>
                <div className="price-container">
                  <p className="min-price">
                    ₹{min_mandate_price}
                    <span className="duration"> / {duration_text} </span>
                  </p>
                  <p className="original-price">₹{original_price}</p>
                </div>
              </div>
              <p className="duration-text">
                {duration_text === "month"
                  ? `1 ${capitalizeFirstLetter(duration_text)}`
                  : "12 Months"}
                {/* API is not returning duration-text as per design. So hard
          coded the logic */}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Plan;
