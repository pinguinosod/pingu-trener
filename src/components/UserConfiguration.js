import React from 'react';
import './UserConfiguration.css';
import profiles from './../data/profiles';

function UserConfiguration(props) {
  const { selectedProfile, changeProfile, displayed } = props;

  const stationOptionList = () => {
    return profiles.map(profile => {
      return <option value={profile.codigo} key={profile.codigo}>{profile.tipo}</option>
    });
  }

  return (
    <div  className={`${displayed ? "user-configuration" : "user-configuration hidden"}`}>
      <h3>Mis Datos</h3>
      <label htmlFor="tipo-usuario">Tipo de Usuario</label>
      <select name="tipo-usuario"
        value={selectedProfile}
        onChange={(event) => { changeProfile(event.target.value) }}>
        {stationOptionList()}
      </select>
    </div>
  );
}

export default UserConfiguration;
