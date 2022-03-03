import React from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Filter></Filter>
        <Results></Results>
    </div>
  );
}

export default App;