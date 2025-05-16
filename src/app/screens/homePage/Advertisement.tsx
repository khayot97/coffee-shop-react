import React from "react";

export default function Advertisement() {
  return (
    <div className="ads-container">
      <div className="ads-wrapper">
        <h1 className="ads-title">
        CUSTOMER <span className="coustomer-text">REVIEWS</span>
        </h1>
        <video
          className="ads-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source type="video/mp4" src="video/coffee-shop.mp4" />
        </video>
      </div>
    </div>
  );
}