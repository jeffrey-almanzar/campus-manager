import React from 'react';
import axios from 'axios';

//css
import './css/App.css';

//react-roter
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//actions
import {addStudent, addCampus, deleteCampus, deleteStudent, studentClicked, 
  addStudentOnCampus, editStudent, editCampus, deleteStudentFromCampus,
  loadStudents, reRender, requestCampuses} from './actions/actions';

// components
import Home from './components/Home';
import Add from './components/Add';
import Campuses from './components/Campuses';
import Students from './components/Students';
import EditCampus from './components/EditCampus';
import ShowCampus from './components/ShowCampus';
import ShowStudent from './components/ShowStudent';
import EditStudent from './components/EditStudent';
import NotFound from './components/NotFound';

import {connect} from 'react-redux';

const mapStateToProps = state =>{
    return {
      // campuses: state.addCampus.campuses,
      students: state.addStudent.students,
      campuses: state.requestCampuses.campuses,
      isPending: state.requestCampuses.isPending,
      error: state.requestCampuses.error
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
    onReRender: (event) => dispatch(reRender(event)),
    onRequestCampuses: (event) => dispatch(requestCampuses())
  
  }

}

class App extends React.Component{

  componentDidMount(){
    
    this.props.onRequestCampuses();
   
    axios.get('https://desolate-hollows-41655.herokuapp.com/students')
      .then( (response) => {
          this.props.onLoadStudents(response.data.students) 
      })
    
  }

  render(){
    const AddCampusComponent = ()=>(
        <Add 
          name="Campus" 
          add={this.props.onAddCampus} 
          refreshCampuses={this.props.onRequestCampuses}   
        />
    );

    const AddStudentComponent = (info)=>{
      return (<Add name="Student" info ={info} add={this.props.onAddStudent} addOnCampus={this.props.onAddStudentOnCampus} addingOnCampus={true} />)
    }

    const CampusesComponent = () =>(
          <Campuses 
            students ={this.props.students}
            campuses ={this.props.campuses} 
            delete={this.props.onDeleteCampus} 
            refreshCampuses={ () => this.props.onRequestCampuses()} 
          />
    );

    const StudentsComponent = () =>(
        <Students 
          onLoadStudents={this.props.onLoadStudents} 
          campuses ={this.props.campuses} 
          students={this.props.students} 
          delete={this.props.onDeleteStudent} 
          clicked={this.props.onStudentClicked}
        />
    );

    const EditCampusComponent = (info) =>{
      
      return (
        <EditCampus 
          onLoadStudents={this.props.onLoadStudents} 
          allCampuses={this.props.campuses} 
          info={info} edit={this.props.onEditCampus} 
          deleteStudent={this.props.onDeleteStudentFromCampus} 
          />
      );
    }

    const EditStudentComponent = (info) =>{
      console.log(info);
      return (
        <EditStudent 
          info={info} 
          edit={this.props.onEditStudent }
        />
      )
    }

    const ShowCampusComponent = (info) =>{
      return (
        <ShowCampus  
          onLoadStudents={this.props.onLoadStudents} 
          info={info} delete={this.props.onDeleteCampus} 
          deleteStudent={this.props.onDeleteStudentFromCampus} 
          campuses={this.props.campuses} 
        />
      );
    }
    
    const ShowStudentComponent = (info) => {
      
      return( 
        <ShowStudent 
          students={this.props.students} 
          info={info} 
          delete={this.props.onDeleteStudent}
        />
      );
    }

    const HomeComponent = ()=>(<Home  />)

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/campuses" component={CampusesComponent} />
          <Route exact path="/students"  component={StudentsComponent} />
          <Route exact path="/addCampus"  component={AddCampusComponent} />
          <Route exact path="/addStudent"  component={AddStudentComponent} />
          <Route exact path="/editCampus"  component={EditCampusComponent} />
          <Route exact path="/showCampus"  component={ShowCampusComponent} />
          <Route exact path="/showStudent"  component={ShowStudentComponent} />
          <Route exact path="/editStudent"  component={EditStudentComponent} />
          <Route component={NotFound} />
         </Switch>
      </Router>    
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
