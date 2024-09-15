import './css/App.css';
import React from 'react';
import Header from './components/Header';
import  { TicTacToe }  from './components/tictactoe/TicTacToe';

function App() {
  return (
    <div>
      <Header />
      <TicTacToe />
    
    </div>
  );
}

export default App;
