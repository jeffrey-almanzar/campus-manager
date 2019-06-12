import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import Add from './Add';
import {addStudent, addCampus} from './actions/actions';
import {connect} from 'react-redux';
// import { addEstudent, addCampus } from './reducers/reducer';


const mapStateToProps = state =>{
    return {
      campuses: state.addCampus.campuses,
      students: state.addStudent.students
    }
  }

const mapDispatchToProps = (dispatch)=>{
  return {
    onAddCampus:  (event) => dispatch(addCampus(event.value)),
    onAddStudent: (event) => dispatch(addStudent(event.value))
  
  }

}



class App extends React.Component{


  componentDidMount(){
    console.log(this.props)
  }


  render(){
    const AddCampusComponent = ()=>(<Add name="Campus" add={this.props.onAddCampus}/>)
    const AddStudentComponent = ()=>(<Add name="Student" add={this.props.onAddStudent}/>)
    const CampusesComponent = () =>(<Campuses campuses ={this.props.campuses} />)
    const StudentsComponent = () =>(<Students students={this.props.students} />)
    return (
      <Router>
         <Route exact path="/" component={Home} />
         <Route exact path="/campuses" component={CampusesComponent} />
         <Route exact path="/students"  component={StudentsComponent} />
         <Route exact path="/addCampus"  component={AddCampusComponent} />
         <Route exact path="/addStudent"  component={AddStudentComponent} />
      </Router>
     
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
