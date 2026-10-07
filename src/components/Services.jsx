import React from "react";

function Services() {
  return (
    <>
      <div className="services">
        <h3>Services</h3>
        <div className="boxes">
          <div className="box">
            <img src="src/assets/images/webdesign.jpeg" alt="#" />
            <h4>Website Design</h4>
            <p>
              Designing clean and responsive websites that deliver smooth and
              engagind user experiences.
            </p>
          </div>
          <div className="box1">
            <img src="src/assets/images/responsive.jpeg" alt="#" />
            <h4>Responsive Design</h4>
            <p>
              Designing fully adaptive layouts that deliver a seamless
              experience across mobile, tablet and desktop devices.
            </p>
          </div>
          <div className="box">
            <img src="src/assets/images/redesign.jpeg" alt="#" />
            <h4>Visual Website Redesign</h4>
            <p>
              Transforming outdated interfaces into mordern, user-friendly
              designs with improved visual appeal and overall performance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
