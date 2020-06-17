import React from 'react';
import './Result.css';
import profiles from './../data/profiles';

function Result(props) {
  const { nextTrain, displayed, selectedProfile } = props;

  const profileText = (selectedProfile) => {
    return profiles.filter(profile => {
      return profile.codigo === parseInt(selectedProfile)
    })[0].tipo;
  }

  return (
    <div className={`${displayed ? "travel-result" : "travel-result hidden"}`}>
      <h3>Datos</h3>
      <label htmlFor="proximo">Próximo</label>
      <input type="text" name="proximo" readOnly value={nextTrain.timeToNextTrain}></input>
      <label htmlFor="costo">Costo {profileText(selectedProfile)}</label>
      <input type="text" name="costo" readOnly value={nextTrain.cost}></input>
      <label htmlFor="tiempo">Tiempo Viaje</label>
      <input type="text"name="tiempo" readOnly value={nextTrain.travelDuration}></input>
    </div>
  );
}

export default Result;
