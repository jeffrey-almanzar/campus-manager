import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props){
    return(
        <div className="main-nav">
            <p><Link to="/">Home </Link></p>
            <ul >
                <li><Link to="/campuses">Campuses</Link></li>
                <li><Link to="/students">Students</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;