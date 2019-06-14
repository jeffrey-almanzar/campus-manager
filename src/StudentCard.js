import React from 'react';
import './App.css';
import './Cards.css';
import {Link } from "react-router-dom";

class StudentCard extends React.Component{
 
  render(){
    return (
      <div className="card-container">
        
          <Link to={
                {
                pathname:"/showStudent", 
                state: {name: this.props.name, campus:this.props.campName, gpa:this.props.gpa }
                } 
                }>

              <div className="student-img-container"></div>
            
            </Link>
        
      

      <Link to={
            {
            pathname:"/showStudent", 
            state: {name: this.props.name, campus:this.props.campName, gpa:this.props.gpa }
            } 
            }> <h1>{this.props.name} </h1>
            </Link>
     
          <p>{this.props.campName}</p>
      </div>

    
);
}
};
  


export default StudentCard;
