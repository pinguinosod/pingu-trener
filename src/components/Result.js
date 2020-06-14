import React from 'react';
import './Result.css';

function Result() {
  return (
    <div className="travel-result">
      <h3>Datos</h3>
      <label for="proximo">Próximo</label>
      <input type="text" name="proximo" readOnly></input>
      <label for="costo">Costo Estudiante</label>
      <input type="text" name="costo" readOnly></input>
      <label for="tiempo">Tiempo Viaje</label>
      <input type="text"name="tiempo" readOnly></input>
    </div>
  );
}

export default Result;
