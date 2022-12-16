import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Ranking from './components/Ranking';
import FriendList from './components/FriendList';

function App() {
  return (
    <div className="App">
      <SignUp />
      <FriendList />

    </div>
  );
}

export default App;
