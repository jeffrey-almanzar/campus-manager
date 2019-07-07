import React from 'react';
import './StudentRow.css';

function StudentRow(props){
    return(
        <div className="st-row-container">
            <div className="row-img">

            </div>

            <div className="st-row-info-container">
                <div className="st-row-name-container">
                    {props.name}
                </div>

                <div  className="st-row-remove-container">
                    <button>remove from campus</button>
                </div>
            </div>
        </div>
    )
}

export default StudentRow;