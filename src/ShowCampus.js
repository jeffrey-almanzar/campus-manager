import React from 'react';
import logo from './logo.svg';
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
                
             <h2>Campus</h2>
              
      <div className="image-showCampus">
           <img src="https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus-500x327.jpg" alt="lehman img"/>
      
      <div className="showCampDescription">

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
export default ShowCampus;
