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
    // this.state={
    //   redirect:false
    // }
    
    
  }
  

  delete =(e )=>{
    // this.setRedirect();
    this.props.delete(this.name);
    
    
  }

  componentDidMount(){
    console.log(this.props)
  }
  

  render(){
    let campusInfo;
    if(this.campus){
      campusInfo =<div>
                    <h2>This student is registered in a campus</h2>  
                    <CampusCard campName={this.campus} />
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
               <Link to="/editStudent"><button>Edit</button></Link>
               <Link to="/students"> <button onClick={this.delete}>Delete</button></Link>
             </div> 
          </div>
        </div>


      {campusInfo}
        



    {/* <div className= "changeCampus">
        <div className="image-c">
            <div>
              <img src="https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus-500x327.jpg" alt="lehman img"/>
            </div>

            <div>
              <h1> {this.props.campName} </h1>
              <p>5 Students</p>
              <div className="campButton">
              <button>Edit</button>
              </div>
            </div>
        </div>


        <div>
           <select>
          <option value="">Select Campus</option>
          <option value="hostos">Hostos</option>
          <option value="hunter">Hunter</option>
          <option value="bmcc">BMCC</option>
          </select>
          <br></br>
          <br></br>
          <br></br>
          
           <button>Change Campus</button>


        </div>
</div>


      </div> */}
      
      
      </div>
      
     
  );
}
}
export default ShowStudent;
