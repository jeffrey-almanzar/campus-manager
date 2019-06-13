import React from 'react';
import './App.css';
import {Link } from "react-router-dom";

class StudentCard extends React.Component{


  // componentDidMount(){
  //   console.log(this.props)
  // }


  render(){
    return (
      <div>
          <Link to={
            {
            pathname:"/showStudent", 
            state: {name: this.props.name, campus:this.props.campName }
            } 
            }>
            <img src="https://next.bncollege.com/wp-content/uploads/2016/10/Student-with-Textbook.jpg" alt="lehman img"/>
            </Link>
          
      <br/>

      <Link to={
            {
            pathname:"/showStudent", 
            state: {name: this.props.name, campus:this.props.campName }
            } 
            }> <h1>{this.props.name} </h1>
            </Link>
     
          <p>{this.props.campName}</p>
      </div>

    
);
}
};
  


export default StudentCard;
