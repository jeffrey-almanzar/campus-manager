import React from 'react';
import './App.css';
import StudentCard from'./StudentCard'
import Navigation from './Navigation';
import {Link} from 'react-router-dom';



class ShowCampus extends React.Component{

  showStudentCard(){
    let studentCard= []
    for(let i =0; i<this.props.info.location.state.campusStudents.length; i++){
      let student = this.props.info.location.state.campusStudents[i];
      studentCard.push(<StudentCard name ={student.name} campusName ={this.props.info.location.state.campusName} campuses={this.props.campuses} gpa={student.gpa} /> )
    }

    return studentCard;
  }

  componentDidMount(){
    console.log(this.props)
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
      <div >
        <div className="campus-info-container">
            <div className="image-showCampus">

            </div>
            {/* <img src={campusDefault} alt="lehman img"/> */}
          <div>
      
            <h1>{campusName} </h1>
          
            <p>{description}</p>
        </div> 
      </div> 
      </div>
      <div className="address">
        <div>
           <address>{location}</address>
           
        </div>

        <div>
           <Link to={{pathname:'/editCampus', state:{
             campusName,
             campusStudents,
             location,
             img,
             description
           }}}><button >Edit</button></Link>
           <Link to="/campuses"><button onClick={this.delete}>Delete</button></Link>
        </div> 
      </div>

    <div className="studentList">
      <div>
        <h1>Students On Campus</h1>
      </div>
      <div>
      <Link to={{pathname:"/addStudent", state:{campus:this.props.info.location.state.campusName}}}><button>Add Student</button></Link>
      </div>
    </div>
      
      <div className= "studentCards">
        {this.showStudentCard()}

      </div>
      
      
      
      </div>
);
}
};
export default ShowCampus;
