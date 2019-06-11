import React from 'react';
import Navigation from './Navigation';
import Header from './Header';


class Students extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            
        }
    }

    render(){
        return (
            <div>
                <Navigation />
                <Header info="Students" add={this.props.add} />  
           </div>
        )
    }
}

export default Students;