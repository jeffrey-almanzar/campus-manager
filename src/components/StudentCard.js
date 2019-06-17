import React from 'react';
import '../css/App.css';
import '../css/Cards.css';
import {Link } from "react-router-dom";
import defaultImage from '../img/profilePicture.jpg';
import axios from 'axios';

class StudentCard extends React.Component{
  
  delete = () =>{
    axios.delete('http://localhost:3000/deleteStudent/'+this.props.name)
      .then((elem)=>{
          axios.get('http://localhost:3000/students')
          .then( (response) => {
            // console.log(response)
             
              console.log(this.props)
              try{//comming from show campus
                this.props.onLoadStudents(response.data.students)
                this.props.refresh()

          
              }catch(e){
                this.props.onLoadStudents(response.data.students)
                  
              }
              //
              
          })
          .catch( (error) =>{
        
          console.log(error);
        })
      })

    //this.props.delete(this.props.name)

  }

  
  render(){
    
    return (
      <div className="card-container">
        
          <Link to={
                {
                pathname:"/showStudent", 
                state: {name: this.props.name, url:this.props.url, students:this.props.students, campus:this.props.campusName, gpa:this.props.gpa, campuses: this.props.campuses }
                } 
                }>

              <div id="student-img-container"  className="student-img-container" >
                  <img src={this.props.url || defaultImage}  />
              </div>
            
            </Link>
        
      

      <Link to={
            {
            pathname:"/showStudent", 
            state: {name: this.props.name, url:this.props.url, students:this.props.students, campus:this.props.campusName, gpa:this.props.gpa, campuses: this.props.campuses }
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
