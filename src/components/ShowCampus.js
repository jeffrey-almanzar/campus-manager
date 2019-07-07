import React from 'react';
import '../css/App.css';
import StudentCard from './StudentCard'
import Navigation from './Navigation';
import {Link} from 'react-router-dom';
import axios from 'axios';
import defaultImg from '../img/campus.png'; 



class ShowCampus extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      campusStudents:""
    }
  }

  showStudentCard(){
    let studentCard= []
    // for(let i =0; i<this.props.info.location.state.campusStudents.length; i++){
    //   let student = this.props.info.location.state.campusStudents[i];
    //   studentCard.push(<StudentCard onLoadStudents={this.props.onLoadStudents} name ={student.name} url={student.url} delete={this.props.deleteStudent} campusName ={this.props.info.location.state.campusName} campuses={this.props.campuses} gpa={student.gpa} /> )
    // }

    for(let i =0; i<this.state.campusStudents.length; i++){
      let student = this.state.campusStudents[i];
      studentCard.push(<StudentCard refresh ={this.refresh} onLoadStudents={this.props.onLoadStudents} name ={student.name} url={student.url} delete={this.props.deleteStudent} campusName ={this.props.info.location.state.campusName} campuses={this.props.campuses} gpa={student.gpa} /> )
    }

    return studentCard;
  }
  refresh = () =>{
    axios.get('https://desolate-hollows-41655.herokuapp.com/students')
        .then( (response) => {
            let studentsRegistered = [];

            for(let i=0; i <response.data.students.length; i++){
                if(response.data.students[i].campusName === this.props.info.location.state.campusName ){
                    studentsRegistered.push(response.data.students[i]);
                }
            }
            console.log(studentsRegistered)

            this.setState({campusStudents:studentsRegistered})  
            
        })

  }

  componentDidMount(){
    console.log(this.props)
    this.refresh()
  }

  delete =()=>{
    this.props.delete(this.props.info.location.state.campusName)
  }

  render(){
    let campusName = this.props.info.location.state.campusName;
    let campusStudents = this.props.info.location.state.campusStudents;
    let location = this.props.info.location.state.location;
    let img = this.props.info.location.state.img;
    let description = this.props.info.location.state.description;
    console.log(campusName+" from show")
    // /editCampus
    return (
      <div>
      <Navigation />
      <div className="campus-info-container-wrapper">
      <div  >
        <div className="campus-info-container">
            <div className ="image-c">
                <div className="img-container">
                    <img src={this.props.info.location.state.img || defaultImg} alt="Check link" />
                </div>
              </div>
            {/* <img src={campusDefault} alt="lehman img"/> */}
          <div>
      
            <h1>{campusName} </h1>
          
            <p>{description}</p>
            <br />
            <br />
            <div>
              <address>{location}</address>
            </div>
        </div> 
      </div> 
      </div>
      
  
        <div className="show-student-btns">
           <Link to={{pathname:'/editCampus', state:{
             campusName,
             campusStudents,
             location,
             img,
             description
           }}}><button className="add-btn show-c-bt">Edit</button></Link>
           <Link to="/campuses"><button className="delete-btn show-c-bt" onClick={this.delete}>Delete</button></Link>
        </div> 
     

    <div className="studentList">
      <div>
        <h1>Students On Campus</h1>
      </div>
      <div>
      <Link to={{pathname:"/addStudent", state:{campus:this.props.info.location.state.campusName}}}><button className="add-btn show-c-bt">Add Student</button></Link>
      </div>
    </div>
      
      <div className= "studentCards">
        {this.showStudentCard()}

      </div>
      
      
      </div>
      </div>
);
}
};
export default ShowCampus;
