import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentCard from'./StudentCard'

class ShowStudent extends React.Component{


  render(){
    return (

     
      <div>
        <h1>Show Student</h1>


        <div className="showStudent">
          <div >
            <img src="https://next.bncollege.com/wp-content/uploads/2016/10/Student-with-Textbook.jpg" alt="lehman img"/>
          </div>

          <div className="student-info-container">
              <h1>Name: {this.props.name} </h1>
              <p>GPA: {this.props.gpa}</p>
               <div className="button2">
                 <button>Edit</button>
                 <button>Delete</button>
             </div> 
          </div>
        </div>


<h2>This student is registered in a campus</h2>

    <div className= "changeCampus">
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

          
        
       
        


      


      </div>
      
      
      
      
     
);
}
};
export default ShowStudent;
