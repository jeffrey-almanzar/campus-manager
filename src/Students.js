import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import StudentCard from './StudentCard';


class Students extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            
        }
    }

    getStudents(){
        let campuses =[];
        for(let i=0; i<this.props.students.length; i++){
            let student = this.props.students[i];
            campuses.push(<StudentCard name={student.name}  campName={student.campus}  />)
        }
        return campuses;
        // console.log("from student")
        // console.log(this.props)
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