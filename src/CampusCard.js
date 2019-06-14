import React from 'react';
import './App.css';
import './Cards.css';
import { Link } from 'react-router-dom';
import defaultImg from './img/campus.png'; 

class CampusCard extends React.Component{
  
  delete = ()=>{
    this.props.delete(this.props.campName)
  }

  display = () =>{
    if(this.props.preview){
      return (
        <div className ="image-c">
          <div className="img-container">
            <Link to={
              {
              pathname:'/showCampus', 
              state: {campus:this.props.campName }
              } 
              }>
                <img src={defaultImg} alt="lehman img"/>
        
              </Link>
          </div>

          <div>
          <Link to={
              {
              pathname:this.props.link,
              state: {campus:this.props.campName, campStudents: this.props.campStudents }
              } 
              }> <h1> {this.props.campName} </h1></Link>
            {/* <p>{this.props.campStudents.length ? `${this.props.campStudents.length} registered` : "not student registered"}</p> */}
            <div className="campButton">
              
              <Link to="/editCampus"><button onClick={this.edit}>Edit</button></Link>
            <button onClick={this.delete}>Delete</button>
            </div>
          </div>
      </div>

      )

    }else{
      return(
      <div className ="image-c">
        <div className="img-container">
           <Link to={
            {
            pathname:'/showCampus', 
            state: {campus:this.props.campName }
            } 
            }>
              <img src={defaultImg} alt="lehman img"/>
      
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
            
            <Link to="/editCampus"><button onClick={this.edit}>Edit</button></Link>
          <button onClick={this.delete}>Delete</button>
          </div>
        </div>
      </div>
      )
    }
  }
    
  render(){
    return (
      
        <div>
          {this.display()}
        </div>
      
     
);
}
};
export default CampusCard;
