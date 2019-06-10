import React from 'react';
import Navigation from './Navigation';

class Home extends React.Component{


    render(){
        return (
          <div>
            <Navigation />
            <h1>I am home</h1> 
           </div>
        )
    }
}

export default Home;