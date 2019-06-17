import React from 'react';
import '../css/StudentRow.css';
import axios from 'axios';

class  StudentRow extends React.Component{


    deleteStudent = () =>{
        //this.props.deleteStudent({name: this.props.name, campusName: this.props.campusName})
        axios.delete('http://localhost:3000/deleteStudent/'+this.props.name)
        .then((elem)=>{
            axios.get('http://localhost:3000/students')
            .then( (response) => {
                // console.log(response)
                this.props.onLoadStudents(response.data.students)
                this.props.refresh();
                
            })
            .catch( (error) =>{
            
            console.log(error);
            })
        })

    }
    
    render(){

    
        return(
            <div className="st-row-container">
                <div className="row-img">

                </div>

                <div className="st-row-info-container">
                    <div className="st-row-name-container">
                        {this.props.name}
                    </div>

                    <div  className="st-row-remove-container">
                        <button onClick={this.deleteStudent}>remove from campus</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default StudentRow;