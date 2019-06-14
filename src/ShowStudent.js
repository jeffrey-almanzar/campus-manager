import React from 'react';
import './App.css';
import Navigation from './Navigation';
import {Link } from 'react-router-dom';
import {Redirect } from 'react-router-dom';
import CampusCard from './CampusCard';
class ShowStudent extends React.Component{
 
  constructor(props){
    super(props)
    this.name = this.props.info.location.state.name;
    this.gpa =  this.props.info.location.state.gpa;
    this.campus = this.props.info.location.state.campus;
    
    
  }
  

  delete =(e )=>{
    // this.setRedirect();
    this.props.delete(this.name);
    
    
  }

  // componentDidMount(){
  //   console.log(this.props)
  // }
  

  render(){
    let campusInfo;
    if(this.campus){
      campusInfo =<div>
                    <h2>This student is registered in a campus</h2>  
                    <CampusCard campusName={this.campus} preview={true} />
                  </div>
    }else{
      campusInfo= <h2>This student is not registered in a campus</h2>
    }
    
    return (

      <div>
        <Navigation />
        {/* {this.renderRedirect()} */}
        <h1>Show Student</h1>


        <div className="showStudent">
        <div className="student-img-container show-student"></div>

          <div className="student-info-container">
              {/* <h1>Name: {this.props.location.state.name} </h1> */}
              <h1>Name: {this.name} </h1>
              <p>GPA: {this.gpa}</p>
               <div className="button2">
               <Link to={{pathname:"/editStudent", state:{name:this.name, gpa:this.gpa,campus:this.campus}}}><button>Edit</button></Link>
               <Link to="/students"> <button onClick={this.delete}>Delete</button></Link>
             </div> 
          </div>
        </div>


      {campusInfo}
            
      </div>
      
     
  );
}
}
export default ShowStudent;
