import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentRow from './StudentRow';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';

import CampusCard from './CampusCard';
import StudentCard from './StudentCard';
import ShowCampus from './ShowCampus';
// import ShowStudent from '/ShowStudent';
class App extends React.Component{
  constructor(){
    super()
  
  }


  render(){
    return (
      <Router>
         <Route exact path="/" component={Home} />
         <Route exact path="/campuses" component={Campuses} />
         <Route exact path="/students"  component={Students} />
      </Router>
     
    )
  }
}

export default App;
