import React from 'react';
import './App.css';
import StudentRow from './StudentRow';

class CampusCard extends React.Component{

  constructor(props){
    super(props)

    this.state = {
    }

  }

  getStudents(){
    let students =[];
    this.state.students.forEach( (item) =>{
      students.push(<StudentRow name={item} />)
    })

    return students;
  }

  render(){
    return (
      <div>
         {this.getStudents()}
         
      </div>
     
    )
  }
}

export default CampusCard;
