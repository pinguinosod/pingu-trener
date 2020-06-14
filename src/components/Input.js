import React, { useState } from 'react';
import './Input.css';
import stations from './../data/stations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Input(props) {
  const { getNextTrain, loading } = props;
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

  const searchButtonText = (loading) => {
    return loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Buscar";
  }

  return (
    <div className="travel-input">
      <h3>Viaje</h3>

      <label htmlFor="origen">Origen</label>
      <select name="origen"
        value={state.origin}
        onChange={selectOrigin}
        disabled={loading}>
        <option value="">Seleccione Origen</option>
        {stationOptionList()}
      </select>

      <label htmlFor="destino">Destino</label>
      <select name="destino"
        value={state.destination}
        onChange={selectDestination}
        disabled={loading}>
        <option value="">Seleccione Destino</option>
        {stationOptionList()}
      </select>

      <button onClick={() => getNextTrain(state.origin, state.destination)}
        disabled={loading}>
        {searchButtonText(loading)}
      </button>
    </div>
  );
}

export default Input;
