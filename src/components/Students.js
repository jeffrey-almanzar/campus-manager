import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import StudentCard from './StudentCard';


class Students extends React.Component{

    getStudents(){
        let campuses =[];
        for(let i=0; i<this.props.students.length; i++){
            let student = this.props.students[i];
            campuses.push(<StudentCard name={student.name} url={student.url} campuses ={this.props.campuses} gpa = {student.gpa} campusName={student.campusName} delete={this.props.delete}
              students={this.props.students} />)
        }
        return campuses;
        
    }

    render(){
        return (
            <div>
                <Navigation />
                <Header info="Students" add={this.props.add} />  

                <div className="d-flex">
                    {this.getStudents()}
                </div>
           </div>

           
        )
    }
}

export default Students;