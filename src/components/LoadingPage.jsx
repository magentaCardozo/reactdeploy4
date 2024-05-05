import React from 'react';
import './loadingPage.css';

const LoadingPage = () => {
  return (
    <div className="skeleton-loading-container">
      <div className="skeleton-loading-content"></div>
      <div className="skeleton-loading-content"></div>
      <div className="skeleton-loading-content"></div>
      <div className="skeleton-loading-text"></div>
      <div className="skeleton-loading-content"></div>
      <div className="skeleton-loading-content"></div>
      <div className="skeleton-loading-content"></div>
      <div className="skeleton-loading-text"></div>
      <div className="skeleton-loading-content"></div>
      <div className="skeleton-loading-content"></div>
    </div>
  );
};

export default LoadingPage;