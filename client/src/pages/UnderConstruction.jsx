import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Pages/UnderConstruction.css";

export default function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div className="uc-container">
      <img
        src="https://site-tredflooring-assets.s3.amazonaws.com/logo.png"
        alt="Tred Logo"
        className="uc-logo"
      />

      <div className="uc-box">
        <div className="uc-icon">🚧</div>
        <h1 className="uc-title">Page Under Construction</h1>
        <p className="uc-text">
          We’re working hard to bring this page to life. Please check back soon!
        </p>
        <button className="uc-btn" onClick={() => navigate("/")}>
          Go back home
        </button>
      </div>
    </div>
  );
}
