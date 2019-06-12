import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){
    let link = props.info ==="Students" ? "/addStudent": "/addCampus";
    
    return(
        <div className="header-container">
            
            <h1>{"All "+props.info}</h1>
            
            <button onClick={props.add}><Link to={link}>{"Add "+props.info}</Link></button>
        </div>
    )
}
export default Header;