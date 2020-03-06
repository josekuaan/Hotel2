import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SinglePage from './pages/SinglePage'
import NavBar from './components/NavBar'


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/rooms/:slug" render={ props => <SinglePage {...props}/>}/> 
        <Route path="/rooms"> <Rooms /> </Route>
         
        <Route path="*"> <Error /> </Route>
      </Switch>
      
    </>
  );
}

export default App;
