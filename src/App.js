import React from 'react';
import './App.css';
import StudentRow from './StudentRow';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      students: ['jeff a', 'juan pablo', 'Pedro']}

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
        
         
      </div>
     
    )
  }
}

export default App;
