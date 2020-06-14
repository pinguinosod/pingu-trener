import React from 'react';
import './Result.css';

function Result(props) {
  const { nextTrain } = props;

  return (
    <div className="travel-result">
      <h3>Datos</h3>
      <label htmlFor="proximo">Próximo</label>
      <input type="text" name="proximo" readOnly value={nextTrain.timeToNextTrain}></input>
      <label htmlFor="costo">Costo Estudiante</label>
      <input type="text" name="costo" readOnly value={nextTrain.cost}></input>
      <label htmlFor="tiempo">Tiempo Viaje</label>
      <input type="text"name="tiempo" readOnly value={nextTrain.travelDuration}></input>
    </div>
  );
}

export default Result;
