import React from 'react';
import './Input.css';
import stations from './../data/stations';

function Input(props) {
  const { getNextTrain } = props;

  const stationOptionList = () => {
    return stations.map(estacion => {
      return <option value={estacion.codigo} key={estacion.codigo}>{estacion.nombre}</option>
    })
  }

  return (
    <div className="travel-input">
      <h3>Viaje</h3>
      <label htmlFor="origen">Origen</label>
      <select name="origen" defaultValue="">
        <option value="">Seleccione Origen</option>
        {stationOptionList()}
      </select>
      <label htmlFor="destino">Destino</label>
      <select name="destino" defaultValue="">
        <option value="">Seleccione Destino</option>
        {stationOptionList()}
      </select>
      <button onClick={() => getNextTrain()}>Buscar</button>
    </div>
  );
}

export default Input;
