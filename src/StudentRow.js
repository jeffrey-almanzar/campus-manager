import React from 'react';
import './StudentRow.css';

class  StudentRow extends React.Component{


    deleteStudent = () =>{

        // let campusStudents;
        // for(let i=0; i< this.props.allCampuses.length; i++){
        //     if (this.props.allCampuses[i].campusName === this.props.campusName ){
        //         campusStudents = this.props.allCampuses[i].campusStudents;
        //     }
        // }
        // this.props.reRenderEditCampus(campusStudents)
        this.props.deleteStudent({name: this.props.name, campusName: this.props.campusName})
        


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