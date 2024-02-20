import { useEffect, useState } from "react";

import Banner from "../banner/banner";
import Plans from "../plans/plans";

import { OPTIONS, PLANS_API } from "../../constants/constant";

import "./body.css";
import Benefits from "../benefits/benefits";
import Series from "../series/series";
import Loader from "../loader/loader";
import SubscribeNowCTA from "../subscribeCTA/subscribeNowCTA";

const Body = () => {
  const [plansData, setPlansData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(PLANS_API);
        const data = await response.json();
        setPlansData(data);
      } catch (error) {
        console.log(error.message);
        alert("Error Occured", error.message); // Modals are better way to present the error.
      }
    })();
  }, []);

  return (
    <>
      {plansData ? (
        <div className="body-container">
          <Banner
            imageSrc={plansData?.tab_banner_data.image_url}
            title={plansData?.tab_banner_data.title}
          />
          <div className="main">
            <Plans
              plans={plansData?.plans}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
            <Benefits benefits={plansData?.benefits} />
          </div>
          <Series series={plansData?.series_item} />
          <SubscribeNowCTA plan={selectedPlan} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Body;
