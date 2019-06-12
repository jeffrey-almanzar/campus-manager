import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import CampusCard from './CampusCard';
import {Link } from 'react-router-dom';

class Campuses extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            
        }
    }

    getCampuses(){
        // let campuses =[];
        // for(let i=0; i<10; i++){
        //     campuses.push(<CampusCard campName="Lehman" />)
        // }
        // return campuses;
        let campuses =[];
        for(let i=0; i<this.props.campuses.length; i++){
            let campus = this.props.campuses[i];
            campuses.push(<Link to="/editCampus" ><CampusCard campName={campus.campusName}  /></Link>)
        }
        return campuses;
    }

    render(){
        return (
            <div>
                <Navigation />
                <Header info="Campuses" add={this.props.add}/> 
                <div className="d-flex">
                    {this.getCampuses()}
                </div> 
           </div>
        )
    }
}

export default Campuses;