import React from 'react';

//css
import './App.css';

//react-roter
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//actions

import {addStudent, addCampus, deleteCampus, deleteStudent, studentClicked, 
  addStudentOnCampus, editStudent, editCampus, deleteStudentFromCampus} from './actions/actions';

// components
import Home from './Home';
import Add from './Add';
import Campuses from './Campuses';
import Students from './Students';
import {connect} from 'react-redux';
import EditCampus from './EditCampus';
import ShowCampus from './ShowCampus';
import ShowStudent from './ShowStudent';
import EditStudent from './EditStudent';
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
    onAddStudent: (event) => dispatch(addStudent(event)),
    onDeleteCampus: (event) => dispatch(deleteCampus(event)),
    onDeleteStudent: (event) => dispatch(deleteStudent(event)),
    onStudentClicked: (event) => dispatch(studentClicked(event)),
    onAddStudentOnCampus: (event) => dispatch( addStudentOnCampus(event)),
    onEditStudent: (event) => dispatch(editStudent(event)),
    onEditCampus: (event) => dispatch(editCampus(event)),
    onDeleteStudentFromCampus : (event) => dispatch(deleteStudentFromCampus(event))


  
  }

}



class App extends React.Component{


  componentDidMount(){
    console.log("From main app")
    console.log(this.props)
  }


  render(){
    const AddCampusComponent = ()=>(<Add name="Campus" add={this.props.onAddCampus}/>)

    const AddStudentComponent = (info)=>{
      return (<Add name="Student" info ={info} add={this.props.onAddStudent} addOnCampus={this.props.onAddStudentOnCampus} addingOnCampus={true} />)
    }
    const CampusesComponent = () =>(<Campuses campuses ={this.props.campuses} delete={this.props.onDeleteCampus}/>)

    const StudentsComponent = () =>(<Students students={this.props.students} delete={this.props.onDeleteStudent} clicked={this.props.onStudentClicked}/>)

    const EditCampusComponent = (info) =>{
      
      return (<EditCampus allCampuses={this.props.campuses} info={info} edit={this.props.onEditCampus} deleteStudent={this.props.onDeleteStudentFromCampus} />)
    }

    const EditStudentComponent = (info) =>{
      console.log(info);
      return (<EditStudent info={info} edit={this.props.onEditStudent }/>)
    }

    const ShowCampusComponent = (info) =>{
      return (<ShowCampus info={info} delete={this.props.onDeleteCampus}  />)
    }
    const ShowStudentComponent = (info) => {
      
      return <ShowStudent info={info} delete={this.props.onDeleteStudent}/>;
    }

    return (
      <Router>
         <Route exact path="/" component={Home} />
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
