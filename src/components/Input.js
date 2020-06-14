import React from 'react';
import './Input.css';

function Input() {
  return (
    <div className="travel-input">
      <h3>Viaje</h3>
      <label>Origen</label>
      <select name="origen">
        <option value="" selected>Seleccione Origen</option>
        <option value="0">Puerto</option>
        <option value="23">Olmué</option>
      </select>
      <label for="destino">Destino</label>
      <select name="destino">
        <option value="" selected>Seleccione Destino</option>
        <option value="0">Puerto</option>
        <option value="23">Olmué</option>
      </select>
      <button onClick={() => alert('hola')}>Buscar</button>
    </div>
  );
}

export default Input;
