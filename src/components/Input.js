import React from 'react';
import './Input.css';

function Input() {
  return (
    <div className="travel-input">
      <h3>Viaje</h3>
      <input type="text" placeholder="Origen"></input>
      <input type="text" placeholder="Destino"></input>
    </div>
  );
}

export default Input;
