import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import CampusCard from './CampusCard';


class Campuses extends React.Component{
    
    getCampuses(){
        let campuses =[];
        for(let i=0; i<this.props.campuses.length; i++){
            let campus = this.props.campuses[i];
            campuses.push(<CampusCard preview ={false} campusName={campus.campusName} 
            description={campus.description} location={campus.location}
            img={campus.img}
            campusStudents ={this.props.students} link="/showCampus" delete={this.props.delete} />)
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