

import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

class Campuses extends React.Component{

    render(){
        return (
            <div>
                <Navigation />
                <Header info="Campuses" add={this.props.add}/>  
           </div>
        )
    }
}

export default Campuses;