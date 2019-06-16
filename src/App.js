import React from 'react';
import axios from 'axios';
//css
import './css/App.css';

//react-roter
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//actions

import {addStudent, addCampus, deleteCampus, deleteStudent, studentClicked, 
  addStudentOnCampus, editStudent, editCampus, deleteStudentFromCampus,
  loadCampuses, loadStudents} from './actions/actions';

// components
import Home from './components/Home';
import Add from './components/Add';
import Campuses from './components/Campuses';
import Students from './components/Students';

import EditCampus from './components/EditCampus';
import ShowCampus from './components/ShowCampus';
import ShowStudent from './components/ShowStudent';
import EditStudent from './components/EditStudent';
// import { addEstudent, addCampus } from './reducers/reducer';

import {connect} from 'react-redux';

const mapStateToProps = state =>{
    return {
      campuses: state.addCampus.campuses,
      students: state.addStudent.students
    }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onAddCampus:  (event) => dispatch(addCampus(event)),
    onAddStudent: (event) => dispatch(addStudent(event)),
    onDeleteCampus: (event) => dispatch(deleteCampus(event)),
    onDeleteStudent: (event) => dispatch(deleteStudent(event)),
    onStudentClicked: (event) => dispatch(studentClicked(event)),
    onAddStudentOnCampus: (event) => dispatch( addStudentOnCampus(event)),
    onEditStudent: (event) => dispatch(editStudent(event)),
    onEditCampus: (event) => dispatch(editCampus(event)),
    onDeleteStudentFromCampus : (event) => dispatch(deleteStudentFromCampus(event)),
    onLoadStudents: (event) => dispatch(loadStudents(event)),
    onLoadCampuses : (event) => dispatch(loadCampuses(event))
  
  }

}



class App extends React.Component{


  componentDidMount(){
    console.log("From main app")
    console.log(this.props)
    axios.get('http://localhost:3000/campuses')
      .then((response) => {
        // console.log(response)
          this.props.onLoadCampuses(response.data.campuses)
          console.log(this.props)
      })
      .catch((error) => {
        console.log(error);
    })

    axios.get('http://localhost:3000/students')
      .then( (response) => {
        // console.log(response)
          this.props.onLoadStudents(response.data.students)
          console.log(this.props)
          
      })
      .catch( (error) =>{
    
      console.log(error);
    })
  }

  // componentDidUpdate(){
    

  // }

  

  render(){
    const AddCampusComponent = ()=>(<Add name="Campus" add={this.props.onAddCampus}/>)

    const AddStudentComponent = (info)=>{
      return (<Add name="Student" info ={info} add={this.props.onAddStudent} addOnCampus={this.props.onAddStudentOnCampus} addingOnCampus={true} />)
    }
    const CampusesComponent = () =>(<Campuses campuses ={this.props.campuses} delete={this.props.onDeleteCampus}/>)

    const StudentsComponent = () =>(<Students campuses ={this.props.campuses} students={this.props.students} delete={this.props.onDeleteStudent} clicked={this.props.onStudentClicked}/>)

    const EditCampusComponent = (info) =>{
      
      return (<EditCampus allCampuses={this.props.campuses} info={info} edit={this.props.onEditCampus} deleteStudent={this.props.onDeleteStudentFromCampus} />)
    }

    const EditStudentComponent = (info) =>{
      console.log(info);
      return (<EditStudent info={info} edit={this.props.onEditStudent }/>)
    }

    const ShowCampusComponent = (info) =>{
      return (<ShowCampus info={info} delete={this.props.onDeleteCampus} deleteStudent={this.props.onDeleteStudentFromCampus} campuses={this.props.campuses} />)
    }
    const ShowStudentComponent = (info) => {
      
      return <ShowStudent info={info} delete={this.props.onDeleteStudent}/>;
    }

    const HomeComponent = ()=>(<Home onLoadCampuses={this.props.onLoadCampuses} campuses={this.props.campuses} students={this.props.students} />)

    return (
      <Router>
         <Route exact path="/" component={HomeComponent} />
         <Route exact path="/campuses" component={CampusesComponent} />
         <Route exact path="/students"  component={StudentsComponent} />
         <Route exact path="/addCampus"  component={AddCampusComponent} />
         <Route exact path="/addStudent"  component={AddStudentComponent} />
         <Route exact path="/editCampus"  component={EditCampusComponent} />
         <Route exact path="/showCampus"  component={ShowCampusComponent} />
         <Route exact path="/showStudent"  component={ShowStudentComponent} />
         <Route exact path="/editStudent"  component={EditStudentComponent} />
      </Router>
     
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
