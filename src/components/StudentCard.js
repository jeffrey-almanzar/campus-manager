import React from 'react';
import '../css/App.css';
import '../css/Cards.css';
import {Link } from "react-router-dom";
import defaultImage from '../img/profilePicture.jpg';
import axios from 'axios';

class StudentCard extends React.Component{
  constructor(props){
    super(props);

   

  }
  delete = () =>{
    axios.delete('http://localhost:3000/deleteStudent/'+this.props.name)
      .then((elem)=>{
        console.log(elem)
      })
    this.props.delete(this.props.name)

  }

  
  render(){
    
    return (
      <div className="card-container">
        
          <Link to={
                {
                pathname:"/showStudent", 
                state: {name: this.props.name, url:this.props.url, campus:this.props.campusName, gpa:this.props.gpa, campuses: this.props.campuses }
                } 
                }>

              <div id="student-img-container"  className="student-img-container" >
                  <img src={this.props.url || defaultImage}  />
              </div>
            
            </Link>
        
      

      <Link to={
            {
            pathname:"/showStudent", 
            state: {name: this.props.name, url:this.props.url, campus:this.props.campusName, gpa:this.props.gpa, campuses: this.props.campuses }
            } 
            }> <h1>{this.props.name} </h1>
            </Link>
     
          <p>{this.props.campusName}</p>
          <button onClick={this.delete}>Delete</button>
      </div>

    
);
}
};
  


export default StudentCard;
