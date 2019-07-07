import React from 'react';
import logo from './logo.svg';
import './App.css';

class StudentCard extends React.Component{

  render(){
    return (
      <div >
                    {/* <header>
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
                </header> */}
               
        <div className= "studentCardDiv">
            <div className= "studentCardImage">
           <img src="https://next.bncollege.com/wp-content/uploads/2016/10/Student-with-Textbook.jpg" alt="lehman img"/>
           </div>
           
           <h1>{this.props.name} </h1>
            <p>{this.props.campName}!</p> 
        
        </div>
      

        {/* <div >
                <footer>
                        
                      
                            <ul className="styleF">
                                <li> <a href="index4.html">Privacy Policy</a></li>
                                <li> <a href="index4.html">Terms of Use</a></li>
                                <li> <a href="index4.html">Sponsers</a></li>
                                <li><a href="index4.html">Location</a></li>
                            </ul>
                
                        <p>&copy; 2019 Campus Manager</p>
                   
                    </footer>
            </div> */}


        
      </div>

    
);
}
};
  


export default StudentCard;
