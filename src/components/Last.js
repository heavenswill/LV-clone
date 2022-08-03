import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Last.css";
import { useMediaQuery } from "react-responsive";

const Last = () => {
  const mediahandler = useMediaQuery({ query: "(max-width: 855px)" });
  return (
    <div>
      <div className="last-container">
        <div className="firstly">
          <h2>SERVICES</h2>
        </div>
        <div className="secondly">
          <div className="lfirst">
            <img
              src="https://us.louisvuitton.com/images/is/image/Homepage_Service_Store_Appointment_DI3.jpg?wid=1080"
              alt=""
              className="image1"
            />

            <h6>Virtual or In-Store Appointments</h6>
            <p>
              Book a personal shopping experience with a Louis Vuitton Client
              Advisor
            </p>
            <a href="#">Book an Appointment</a>
          </div>
          <div className="lsecond">
            <img
              src="https://us.louisvuitton.com/images/is/image/Homepage_Service_Contact_Us_DI3.jpg?wid=2048"
              alt=""
              className="image1"
            />
            <h6>Contact Us</h6>
            <p>Louis Vuitton Client Advisors are always here to help.</p>
            <a href="#">Ask Our Advisor</a>
          </div>
          <div className="lthird">
            <img
              src="https://us.louisvuitton.com/images/is/image/Care_Services_Homepage_DI3.jpg?wid=2048"
              alt=""
              className="image1"
            />
            <h6>Care Services</h6>
            <p>
              Repairs can be requested either online using the LV App or in
              Louis Vuitton stores.
            </p>
            <a href="#">Discover Online Repairs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
