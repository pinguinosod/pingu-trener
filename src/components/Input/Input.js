import React, { useState } from 'react';
import './Input.css';
import stations from './../../data/stations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Input(props) {
  const { getNextTrain, isLoading, displayed } = props;
  const [state, setState] = useState({ origin: "", destination: "" });

  const stationOptionList = () => {
    return stations.map(estacion => {
      return <option value={estacion.codigo} key={estacion.codigo}>{estacion.nombre}</option>
    })
  }

  const selectOrigin = (event) => {
    const newOrigin = event.target.value;
    setState((prevState) => ({ origin: newOrigin, destination: prevState.destination }));
  }

  const selectDestination = (event) => {
    const newDestination = event.target.value;
    setState((prevState) => ({ origin: prevState.origin, destination: newDestination }));
  }

  const searchButtonText = (isLoading) => {
    return isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Buscar";
  }

  return (
    <div className={`${displayed ? "travel-input" : "travel-input hidden"}`}>
      <h3>Viaje</h3>

      <label htmlFor="origen">Origen</label>
      <select name="origen"
        value={state.origin}
        onChange={selectOrigin}
        disabled={isLoading}>
        <option value="">Seleccione Origen</option>
        {stationOptionList()}
      </select>

      <label htmlFor="destino">Destino</label>
      <select name="destino"
        value={state.destination}
        onChange={selectDestination}
        disabled={isLoading}>
        <option value="">Seleccione Destino</option>
        {stationOptionList()}
      </select>

      <button onClick={() => getNextTrain(state.origin, state.destination)}
        disabled={isLoading}>
        {searchButtonText(isLoading)}
      </button>
    </div>
  );
}

export default Input;
