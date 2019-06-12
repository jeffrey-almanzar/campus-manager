import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentRow from './StudentRow';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import Add from './Add';
class App extends React.Component{
  constructor(){
    super()
  
  }


  render(){
    const AddCampusComponent = ()=>(<Add name="Campus" />)
    const AddStudentComponent = ()=>(<Add name="Student" />)
    return (
      <Router>
         <Route exact path="/" component={Home} />
         <Route exact path="/campuses" component={Campuses} />
         <Route exact path="/students"  component={Students} />
         <Route exact path="/addCampus"  component={AddCampusComponent} />
         <Route exact path="/addStudent"  component={AddStudentComponent} />
      </Router>
     
    )
  }
}

export default App;
