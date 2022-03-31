import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/Homepage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
