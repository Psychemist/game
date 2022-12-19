import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Community from './components/Community';
import FriendList from './components/FriendList';
import Game from './components/Game';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <BrowserRouter>
          <div className="navbar">
            <Link to="game" className="link" > Game </Link>
            <Link to="friend" className="link" > Friend </Link>
            <Link to="community" className="link" > Community </Link>
          </div>

          <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/game' element={<Game />} />
            <Route path='/friend' element={<FriendList />} />
            <Route path='/community' element={<Community />} />
          </Routes>
        </BrowserRouter>


      </div>
    </Provider>

  );
}

export default App;
