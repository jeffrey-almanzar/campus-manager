import React from 'react';

function Header(props){
    return(
        <div className="header-container">
            <h1>{"All "+props.info}</h1>
            <button>{"Add "+props.info}</button>
        </div>
    )
}
export default Header;