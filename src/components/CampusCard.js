import React from 'react';
import '../css/App.css';
import '../css/Cards.css';
import { Link } from 'react-router-dom';
import defaultImg from '../img/campus.png'; 
import axios from 'axios';

class CampusCard extends React.Component{
  
  constructor(props){
    super(props)
    this.studentsRegistered = [];
    //if(!this.props.preview){
      for(let i=0; i <this.props.campusStudents.length; i++){
          if(this.props.campusStudents[i].campusName === this.props.campusName ){
            this.studentsRegistered.push(this.props.campusStudents[i]);
          }
      //}
    // }else{ //coming from show students
    //   for(let i=0; i <this.props.info.location.state.students.length; i++){
    //     let student = this.props.info.location.state.students[i];
    //     if(student[i].campusName === this.props.campusName ){
    //       this.studentsRegistered.push(student[i]);
    //     }
    // }
     } 

  }
  
  delete = ()=>{
    axios.delete('https://desolate-hollows-41655.herokuapp.com/deleteCampus/'+this.props.campusName)
      .then((elem)=>{
        console.log(elem)
      })
    this.props.delete(this.props.campusName)
  }

  componentDidMount(){

  }

  display = () =>{
    if(this.props.preview){
      return (
        <div className ="campus-card-preview">
          <div className="img-container">
          <Link to={
              {
              pathname:'/showCampus',
              state: {campusName:this.props.campusName, campusStudents:this.studentsRegistered,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
              }>
                <img src={this.props.img || defaultImg} alt="Check link" />
        
              </Link>
          </div>

          <div>
          <Link to={
              {
              pathname:'/showCampus',
              state: {campusName:this.props.campusName, campusStudents:this.studentsRegistered,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
              }> <h1> {this.props.campusName} </h1></Link>
            {/* <p>{this.props.campusStudents.length ? `${this.props.campusStudents.length} registered` : "not student registered"}</p> */}
            <div className="campButton">
              
              <Link to={
                {
                pathname:'/showCampus',
                state: {campusName:this.props.campusName, campusStudents:this.studentsRegistered,
                      location: this.props.location, description:this.props.description,img:this.props.img }
                } 
                }>  <button className="add-btn">View Campus</button></Link>
                
            </div>
          </div>
      </div>

      )

    }else{
      return(
      <div className ="campus-card">
        <div className="img-container">
        <Link to={
              {
              pathname:this.props.link,
              state: {campusName:this.props.campusName, campusStudents:this.studentsRegistered,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
            }>
              <img src={this.props.img || defaultImg} alt="lehman img"/>
      
            </Link>
        </div>

        <div className="campus-info">
        <Link to={
              {
              pathname:'/showCampus',
              state: {campusName:this.props.campusName, campusStudents:this.studentsRegistered,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
              }> <h1 className="campus-name"> {this.props.campusName} </h1>
            </Link>
          <p className="number-register">{this.studentsRegistered.length ? `${this.studentsRegistered.length} registered` : "not student registered"}</p>
          <div className="campButton">
            
          <Link to={
              {
              pathname:'/editCampus',
              state: {campusName:this.props.campusName, campusStudents:this.studentsRegistered,
                    location: this.props.location, description:this.props.description,img:this.props.img }
              } 
              }>
               <button className="add-btn">Edit</button></Link>
          <button className="delete-btn" onClick={this.delete}>Delete</button>
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
