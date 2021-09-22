
import './App.css';
import React from 'react';
import Dashboard from './Dashboard.js'
import Store from './Store.js'

function App() {
  return (
    <div className="App">
      <Store>
      <Dashboard/>
      </Store>
    </div>
  );
}

export default App;
