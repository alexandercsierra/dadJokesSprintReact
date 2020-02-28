import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Jokes from './components/Jokes'
import Nav from './components/Nav'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/"><Home/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/signup"><Signup/></Route>
      <Route path="/jokes"><Jokes/></Route>
    </div>
  );
}

export default App;
