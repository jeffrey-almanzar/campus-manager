import React from 'react';
import Navigation from './Navigation';
import Header from './Header';


class Students extends React.Component{

    render(){
        return (
            <div>
                <Navigation />
                <Header info="Students" />  
           </div>
        )
    }
}

export default Students;