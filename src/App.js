import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import Add from './Add';
import {addStudent, addCampus, deleteCampus, deleteStudent, studentClicked} from './actions/actions';
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
    onAddStudent: (event) => dispatch(addStudent(event.value)),
    onDeleteCampus: (event) => dispatch(deleteCampus(event)),
    onDeleteStudent: (event) => dispatch(deleteStudent(event)),
    onStudentClicked: (event) => dispatch(studentClicked(event))


  
  }

}



class App extends React.Component{


  componentDidMount(){
    //console.log(this.props)
  }


  render(){
    const AddCampusComponent = ()=>(<Add name="Campus" add={this.props.onAddCampus}/>)
    const AddStudentComponent = ()=>(<Add name="Student" add={this.props.onAddStudent}/>)
    const CampusesComponent = () =>(<Campuses campuses ={this.props.campuses} delete={this.props.onDeleteCampus}/>)
    const StudentsComponent = () =>(<Students students={this.props.students} delete={this.props.onDeleteStudent} clicked={this.props.onStudentClicked}/>)
    const EditCampusComponent = () =>(<EditCampus  />)
    const EditStudentComponent = () =>(<EditStudent  />)
    const ShowCampusComponent = (info) =>{
      return (<ShowCampus info={info} delete={this.props.onDeleteCampus}/>)
    }
    const ShowStudentComponent = (info) => {
      //console.log(info);
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
