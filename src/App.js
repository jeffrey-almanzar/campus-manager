import React from 'react';

//css
import './css/App.css';

//react-roter
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//actions
import {addCampus, deleteCampus, studentClicked, 
  addStudentOnCampus, editCampus, deleteStudentFromCampus,
  loadStudents, reRender, requestCampuses,requestStudents} from './actions/actions';

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
      students: state.requestStudents.students,
      campuses: state.requestCampuses.campuses
    }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onAddCampus:  (event) => dispatch(addCampus(event)),
    onDeleteCampus: (event) => dispatch(deleteCampus(event)),
    onStudentClicked: (event) => dispatch(studentClicked(event)),
    onAddStudentOnCampus: (event) => dispatch( addStudentOnCampus(event)),
    onEditCampus: (event) => dispatch(editCampus(event)),
    onDeleteStudentFromCampus : (event) => dispatch(deleteStudentFromCampus(event)),
    onLoadStudents: (event) => dispatch(loadStudents(event)),
    onReRender: (event) => dispatch(reRender(event)),
    onRequestCampuses: (event) => dispatch(requestCampuses()),
    onRequestStudents: (event) => dispatch(requestStudents())
  
  }

}

class App extends React.Component{

  componentDidMount(){
    
    this.props.onRequestCampuses();
    this.props.onRequestStudents();
    
  }

  render(){
    const AddCampusComponent = ()=>(
        <Add 
          name="Campus" 
          add={this.props.onAddCampus} 
          refreshCampuses={this.props.onRequestCampuses}
          refreshStudents={this.props.onRequestStudents}   
        />
    );

    const AddStudentComponent = (info)=>{
      return (
        <Add name="Student" 
          info ={info}  
          refreshStudents={this.props.onRequestStudents}  
          refreshCampuses={this.props.onRequestCampuses} 
          addOnCampus={this.props.onAddStudentOnCampus} 
          addingOnCampus={true} 
          campuses={this.props.campuses}
        />);
    }

    const CampusesComponent = () =>(
          <Campuses 
            students ={this.props.students}
            campuses ={this.props.campuses} 
            delete={this.props.onDeleteCampus} 
            refreshCampuses={this.props.onRequestCampuses} 
            refreshStudents={this.props.onRequestStudents}  
          />
    );

    const StudentsComponent = () =>(
        <Students 
          onLoadStudents={this.props.onLoadStudents} 
          campuses ={this.props.campuses} 
          students={this.props.students} 
          clicked={this.props.onStudentClicked}
          refreshStudents={this.props.onRequestStudents}   
        />
    );

    const EditCampusComponent = (info) =>{
      
      return (
        <EditCampus 
          onLoadStudents={this.props.onLoadStudents} 
          allCampuses={this.props.campuses} 
          info={info} edit={this.props.onEditCampus} 
          deleteStudent={this.props.onDeleteStudentFromCampus} 
          refreshStudents={() => this.props.onRequestStudents()}
          refreshCampuses={this.props.onRequestCampuses} 
          />
      );
    }

    const EditStudentComponent = (info) =>{
      return (
        <EditStudent 
          info={info} 
          refreshStudents={this.props.onRequestStudents}
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
          refreshStudents={this.props.onRequestStudents}
          refreshCampuses={this.props.onRequestCampuses} 
        />
      );
    }
    
    const ShowStudentComponent = (info) => {
      
      return( 
        <ShowStudent 
          students={this.props.students} 
          info={info} 
          refreshStudents={this.props.onRequestStudents} 

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
