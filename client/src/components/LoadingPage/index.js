import React from "react";
import "./style.css";
const LoadingPage = () => {
  return (
    <div className="wrapper">
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="loading-h1">Loading..</h1>
    </div>
  );
};

export default LoadingPage;
