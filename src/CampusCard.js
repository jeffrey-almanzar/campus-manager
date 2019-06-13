import React from 'react';
import './App.css';
import {Redirect, Link } from 'react-router-dom';

class CampusCard extends React.Component{
  
  delete = ()=>{
    this.props.delete(this.props.campName)
  }
    
  render(){
    return (
      <div className ="image-c">
        <div>
           <Link to={this.props.link} ><img src="https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus-500x327.jpg" alt="lehman img"/></Link>
        </div>

        <div>
        <Link to={this.props.link} > <h1> {this.props.campName} </h1></Link>
          <p>5 Students</p>
          <div className="campButton">
            {/* blah */}
            <Link to="/editCampus"><button onClick={this.edit}>Edit</button></Link>
          <button onClick={this.delete}>Delete</button>
          </div>
        </div>
      
      </div>
);
}
};
export default CampusCard;
