import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import StudentCard from './StudentCard';
import Loader from 'react-loader-spinner';



class Students extends React.Component{

    getStudents(){
        let campuses =[];
        for(let i=0; i<this.props.students.length; i++){
            let student = this.props.students[i];
            campuses.push(<StudentCard refreshStudents={this.props.refreshStudents}   onLoadStudents={this.props.onLoadStudents} name={student.name} url={student.url} campuses ={this.props.campuses} gpa = {student.gpa} campusName={student.campusName} delete={this.props.delete}
              students={this.props.students} />)
        }
        return campuses;
        
    }

    render(){
        let content;
        if(this.props.campuses.length && !this.props.studentsPending){
            content =this.getStudents()
        }else if(!this.props.studentsPending && !this.props.campuses.length){
            content = <h2 className="sub-heading">There are no students registered in the database </h2>
        }else{
            content = ( 
                <div
                      style={{
                       width: "100%",
                       height: "100",
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center"
                     }}
                    >
                      <Loader type="ThreeDots" color="#006917" height="100" width="100" />
                </div>)

        }
        return (
            <div>
                
                    <Navigation />
                    <Header info="Students" add={this.props.add} />  

                    <div className="d-flex students-container">
                        {content}
                    </div>

           </div>

           
        )
    }
}

export default Students;