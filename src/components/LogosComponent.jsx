import React, { useEffect } from 'react';
import './LogosComponent.module.css';

const LogosComponent = () => {
  useEffect(() => {
    const logos = document.querySelector('.logos');
    const logosSlide = document.querySelector('.logos-slide');
    if (logos && logosSlide) {
      logos.appendChild(logosSlide.cloneNode(true));
    }
  });

  return (
    <div className="logos-container">
      <div className="logos">
        <div className="logos-slide">
          <img src="./logos/3m.svg" />
          <img src="./logos/barstool-store.svg"  />
          <img src="./logos/budweiser.svg"  />
          <img src="./logos/buzzfeed.svg"/>
          <img src="./logos/forbes.svg" />
          <img src="./logos/macys.svg" />
          <img src="./logos/menshealth.svg" />
          <img src="./logos/mrbeast.svg"/>
        </div>
      </div>
    </div>
  );
};

export default LogosComponent;
