import React from 'react';
import './App.css';
import StudentCard from'./StudentCard'

class ShowCampus extends React.Component{

  showStudentCard(){
    let studentCard= []
    for(let i =0; i<10; i++){
      studentCard.push(<StudentCard name ="Ada" campName ="Lehman College" /> )
    }

    return studentCard;
  }

  render(){
    return (
      <div>
      <div className="image-showCampus">
           <img src="https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus-500x327.jpg" alt="lehman img"/>
      <div>

          <h1>{this.props.campName} </h1>
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
      </div>  
      </div>
      <div className="address">
        <div>
           <p>250 Bedford Park Blvd W</p>
           <p>The Bronx, NY 10468</p>
        </div>

        <div>
           <button>Edit</button>
           <button>Delete</button>
        </div> 
      </div>

    <div className="studentList">
      <div>
        <h1>Students On Campus</h1>
      </div>
      <div>
      <button>Add Student</button>
      </div>
    </div>
      
      <div className= "studentCards">
        {this.showStudentCard()}

      </div>
      
      
      
      </div>
);
}
};
export default ShowCampus;
