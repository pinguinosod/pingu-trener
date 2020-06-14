import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Result from './components/Result';

function App() {
  const [state, setState] = useState({
    nextTrain: { timeToNextTrain: "", cost: "", travelDuration: "" }
  });

  const getNextTrain = (origin, destination) => {
    const randResponses = [
      { timeToNextTrain: "14 Minutos", cost: "$182", travelDuration: "20 Minutos" },
      { timeToNextTrain: "10 Minutos", cost: "$132", travelDuration: "7 Minutos" },
      { timeToNextTrain: "5 Minutos", cost: "$152", travelDuration: "15 Minutos" },
      { timeToNextTrain: "28 Minutos", cost: "$162", travelDuration: "17 Minutos" }
    ]
    const nextTrain = randResponses[Math.floor(Math.random() * randResponses.length)]
    setState(() => ({ nextTrain: nextTrain }))
  }

  return (
    <div className="App">
      <header>
        <h1>Pingu Trener</h1>
      </header>
      <main>
        <Input getNextTrain={getNextTrain} />
        <Result nextTrain={state.nextTrain} />
      </main>
    </div>
  );
}

export default App;
