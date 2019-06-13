import React from 'react';
import './App.css';
import './Cards.css';
import { Link } from 'react-router-dom';
import defaultImg from './img/campus.png'; 

class CampusCard extends React.Component{
  
  delete = ()=>{
    this.props.delete(this.props.campName)
  }
    
  render(){
    return (
      <div className ="image-c">
        <div className="img-container">
           {/* <Link to={this.props.link} ><img src={defaultImg} alt="lehman img"/></Link> */}
           <Link to={
            {
            pathname:'/showCampus', 
            state: {campus:this.props.campName }
            } 
            }>
              <img src={defaultImg} alt="lehman img"/>
            {/* <img src={defaultImg} alt="lehman img"/> */}
            </Link>
        </div>

        <div>
        <Link to={
            {
            pathname:this.props.link,
            state: {campus:this.props.campName, campStudents: this.props.campStudents }
            } 
            }> <h1> {this.props.campName} </h1></Link>
          <p>{this.props.campStudents.length ? `${this.props.campStudents.length} registered` : "not student registered"}</p>
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
