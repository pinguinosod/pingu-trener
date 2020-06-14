import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Result from './components/Result';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" },
    loading: false
  });

  const getNextTrain = (origin, destination) => {
    setState(() => ({
      loading: true,
      nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" }
    }));

    axios.get('https://phpinguino.herokuapp.com/pingu-trener-api/next/', {
      params: { origin, destination }
    }).then(response => {
      setState(() => ({ loading: false, nextTrain: response.data }))
    }).catch(error => {
      alert(error);
      setState(() => ({
        loading: false,
        nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" }
      }));
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Pingu Trener</h1>
      </header>
      <main>
        <Input getNextTrain={getNextTrain} loading={state.loading} />
        <Result nextTrain={state.nextTrain} />
      </main>
    </div>
  );
}

export default App;
