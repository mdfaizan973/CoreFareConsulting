import React from "react";

export default function Middle() {
  const visionStyle = {
    fontSize: "1.5rem", // You can adjust the font size as needed
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6" style={{ height: "60vh" }}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <p style={visionStyle}>
              <strong>VISION</strong>
              <br />
              To provide an easy-to-use technology platform with the best
              inventory and fares for global airlines, hotels, and cruises.
            </p>
          </div>
        </div>
        <div className="col-md-6" style={{ height: "50vh" }}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <img
              src="http://corefares.com/wp-content/uploads/2021/08/vision1-1.jpg"
              alt="Responsive Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
