import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentCard from'./StudentCard'

class ShowStudent extends React.Component{


  render(){
    return (

     
      <div>
                    <header>
                    <nav className="navigation-bar">
                        <a href="index.html">
                            <img className="logo" src="https://image.freepik.com/free-vector/university-campus-logo_1447-1791.jpg"
                             alt="Main logo"/>
                        </a>
                        <ul>
                            <li><a href="index.html" target="">Home</a></li>
                            <li><a href="index2.html" target="">Campus</a></li>
                            <li><a href="index3.html" target="">Student</a></li>
                        </ul>
                    </nav>
                </header>
        {/* <h1>Show Student</h1> */}
        <h2> Students</h2>


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


<p>This student is registered in a campus</p>

    <div className= "changeCampus">
     
        <div className="image-c">
            <div className ="showStudentCampImage">
              <img src="https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus-500x327.jpg" alt="lehman img"/>
            </div>

            <div className="showStudentDescription">
              <h1> {this.props.campName} </h1>
              <p>5 Students</p>
              <div className="campButton">
              <button>Edit</button>
              </div>
            </div>
        </div>


        <div className="changeCampusBtn">
           <select>
          <option value="">Select Campus</option>
          <option value="hostos">Hostos</option>
          <option value="hunter">Hunter</option>
          <option value="bmcc">BMCC</option>
          </select>
      

        
          
           <button>Change Campus</button>
       

        </div>
</div>


<div >
                <footer>
                        
                      
                            <ul className="styleF">
                                <li> <a href="index4.html">Privacy Policy</a></li>
                                <li> <a href="index4.html">Terms of Use</a></li>
                                <li> <a href="index4.html">Sponsers</a></li>
                                <li><a href="index4.html">Location</a></li>
                            </ul>
                
                        <p>&copy; 2019 Campus Manager</p>
                   
                    </footer>
            </div>

          
        
      
      </div>
      
      
      
      
     
);
}
};
export default ShowStudent;
