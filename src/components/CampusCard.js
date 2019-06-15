import React from 'react';
import '../css/App.css';
import '../css/Cards.css';
import { Link } from 'react-router-dom';
import defaultImg from '../img/campus.png'; 

class CampusCard extends React.Component{
  
  delete = ()=>{
    this.props.delete(this.props.campusName)
  }

  display = () =>{
    if(this.props.preview){
      return (
        <div className ="image-c">
          <div className="img-container">
          <Link to={
              {
              pathname:'/showCampus',
              state: {campusName:this.props.campusName, campusStudents: this.props.campusStudents,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
              }>
                <img src={this.props.img || defaultImg} alt="lehman img"/>
        
              </Link>
          </div>

          <div>
          <Link to={
              {
              pathname:'/showCampus',
              state: {campusName:this.props.campusName, campusStudents: this.props.campusStudents,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
              }> <h1> {this.props.campusName} </h1></Link>
            {/* <p>{this.props.campusStudents.length ? `${this.props.campusStudents.length} registered` : "not student registered"}</p> */}
            <div className="campButton">
              
              <Link to={
                {
                pathname:'/showCampus',
                state: {campusName:this.props.campusName, campusStudents: this.props.campusStudents,
                      location: this.props.location, description:this.props.description,img:this.props.img }
                } 
                }>  <button>View Campus</button></Link>
                {/* <button>Edit</button>
                </Link>
              <button onClick={this.delete}>Delete</button> */}
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
              pathname:this.props.link,
              state: {campusName:this.props.campusName, campusStudents: this.props.campusStudents,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
            }>
              <img src={this.props.img || defaultImg} alt="lehman img"/>
      
            </Link>
        </div>

        <div>
        <Link to={
              {
              pathname:'/showCampus',
              state: {campusName:this.props.campusName, campusStudents: this.props.campusStudents,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
              }> <h1> {this.props.campusName} </h1>
            </Link>
          <p>{this.props.campusStudents.length ? `${this.props.campusStudents.length} registered` : "not student registered"}</p>
          <div className="campButton">
            
          <Link to={
              {
              pathname:'/editCampus',
              state: {campusName:this.props.campusName, campusStudents: this.props.campusStudents,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
              }>
               <button >Edit</button></Link>
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
