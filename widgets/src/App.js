import React from 'react';
import SearchBar from './components/search'; 
import './App.css';

// Data
import {Pokemon} from './assets/pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       New component, who dis
       <SearchBar data={Pokemon}/>
      </header>
    </div>
  );
}

export default App;
