import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-body-tertiary pt-3  text-center">
      <h3>Q-Zone</h3>
      <img src={qzone1} alt="" />
      <img src={qzone2} alt="" />
      <img src={qzone3} alt="" />
    </div>
  );
};

export default Qzone;
