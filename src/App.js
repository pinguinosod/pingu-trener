import React from 'react';
import './App.css';
import Input from './components/Input';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pingu Trener</h1>
      </header>
      <main>
        <Input />
        <Result />
      </main>
    </div>
  );
}

export default App;
