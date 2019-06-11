import React from 'react';
import logo from './logo.svg';
import './App.css';

class CampusCard extends React.Component{

  render(){
    return (
      <div className ="image-c">
        <div>
           <img src="https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus-500x327.jpg" alt="lehman img"/>
        </div>

        <div>
          <h1> {this.props.campName} </h1>
          <p>5 Students</p>
          <div className="campButton">
            {/* blah */}
          <button>Edit</button>
          <button>Delete</button>
          </div>
        </div>
      
      </div>
);
}
};
export default CampusCard;
