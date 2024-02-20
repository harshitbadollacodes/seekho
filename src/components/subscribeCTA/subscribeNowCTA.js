import { RightArrow } from "../../assets/svg/rightArrow";

import "./subscribeNowCTA.css";

const SubscribeNowCTA = ({ plan }) => {
  const { min_mandate_price, duration_text } = plan || {};

  return (
    <button className="subscribe-CTA">
      <div className="subscription-amount">
        {plan && (
          <div className="price-container">
            <p className="cta-min-price">
              ₹{min_mandate_price}
              <span className="duration"> / {duration_text} </span>
            </p>
          </div>
        )}
      </div>
      <div className="CTA-text">Subscribe Karein</div>
      <RightArrow />
    </button>
  );
};

export default SubscribeNowCTA;
