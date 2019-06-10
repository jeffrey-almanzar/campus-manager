import React from 'react';
import './App.css';
import StudentRow from './StudentRow';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';

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
