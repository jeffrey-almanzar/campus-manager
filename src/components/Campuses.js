import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import CampusCard from './CampusCard';
import Footer from './Footer';


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
        let content;
        if(this.props.campuses.length){
            content =this.getCampuses()
        }else{
            content = <h2>There are no campuses registered in the database </h2>
        }
        return (
            <div >
                <Navigation />
                <Header info="Campuses" add={this.props.add}/> 
                <div className="d-flex campus-cards-container">
                    {content}
                </div>
                
           </div>
        )
    }
}

export default Campuses;