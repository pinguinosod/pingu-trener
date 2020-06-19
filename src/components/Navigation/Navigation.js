import React from 'react';
import './Navigation.css';

function Navigation(props) {
  const { selectedTab, changeTab } = props;

  return (
    <div className="navigation-bar">
      <button
        className={`${selectedTab === 'viaje' ? "active" : ""}`}
        onClick={() => { changeTab('viaje') }}>Viaje</button>
      <button
        className={`${selectedTab === 'datos' ? "active" : ""}`}
        onClick={() => { changeTab('datos') }}>Mis Datos</button>
    </div>
  );
}

export default Navigation;
