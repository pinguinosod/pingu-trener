import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Result from './components/Result';
import NavigationBar from './components/NavigationBar';
import axios from 'axios';
import UserConfiguration from './components/UserConfiguration';

function App() {
  const [state, setState] = useState({
    isLoading: false,
    selectedTab: 'viaje',
    selectedProfile: 0,
    nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" }
  });

  const getNextTrain = (origin, destination) => {
    setState((prev) => ({
      isLoading: true,
      selectedTab: prev.selectedTab,
      selectedProfile: prev.selectedProfile,
      nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" }
    }));

    axios.get('/next/', {
      params: { origin, destination, profile: state.selectedProfile }
    }).then(response => {
      setState((prev) => ({
        isLoading: false,
        selectedTab: prev.selectedTab,
        selectedProfile: prev.selectedProfile,
        nextTrain: response.data
      }))
    }).catch(error => {
      alert(error);
      setState((prev) => ({
        isLoading: false,
        selectedTab: prev.selectedTab,
        selectedProfile: prev.selectedProfile,
        nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" }
      }));
    });
  }

  const changeTab = (newTab) => {
    setState((prev) => ({
      isLoading: false,
      selectedTab: newTab,
      selectedProfile: prev.selectedProfile,
      nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" }
    }));
  }

  const changeProfile = (codigo) => {
    setState(() => ({
      isLoading: false,
      selectedTab: 'datos',
      selectedProfile: codigo,
      nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" }
    }));
  }

  return (
    <div className="App">
      <header>
        <h1>Pingu Trener</h1>
      </header>
      <main>
        <Input getNextTrain={getNextTrain} isLoading={state.isLoading}
          displayed={(state.selectedTab === 'viaje')} />
        <Result nextTrain={state.nextTrain} selectedProfile={state.selectedProfile}
          displayed={(state.selectedTab === 'viaje')} />
        <UserConfiguration changeProfile={changeProfile} selectedProfile={state.selectedProfile} 
          displayed={(state.selectedTab === 'datos')} />
      </main>
      <footer>
        <NavigationBar selectedTab={state.selectedTab} changeTab={changeTab} />
      </footer>
    </div>
  );
}

export default App;
