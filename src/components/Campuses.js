import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import CampusCard from './CampusCard';
import Loader from 'react-loader-spinner';

class Campuses extends React.Component{
    
    getCampuses(){
        let campuses =[];
        for(let i=0; i<this.props.campuses.length; i++){
            let campus = this.props.campuses[i];
            campuses.push(<CampusCard preview ={false} campusName={campus.campusName} 
            description={campus.description} location={campus.location}
            refreshCampuses ={this.props.refreshCampuses}
            refreshStudents={this.props.refreshStudents}  
            img={campus.img}
            campusStudents ={this.props.students} link="/showCampus" delete={this.props.delete} />)
        }
        return campuses;
    }

    render(){
        let content;
        if(this.props.campuses.length && !this.props.campusesPending){
            content =this.getCampuses()
        }else if (!this.props.campuses.length && !this.props.campusesPending ){
            content = <h2 className="sub-heading">There are no campuses registered in the database </h2>
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