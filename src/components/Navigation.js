import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props){
    return(

        <header>
            <nav className="navigation-bar">
                <div>
                    <a href="/">
                        <img className="logo" src="https://image.freepik.com/free-vector/university-campus-logo_1447-1791.jpg"
                            alt="Main logo"/>
                    </a>
                    <li><Link to="/">Campus Manager</Link></li>
                </div>
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/campuses">Campuses</Link></li>
                    <li><Link to="/students">Students</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;