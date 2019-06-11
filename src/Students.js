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
        for(let i=0; i<10; i++){
            campuses.push(<StudentCard name="Jeffrey Almanzar"campName="Lehman" />)
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