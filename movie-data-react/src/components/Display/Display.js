import React from 'react';
import './Display.css';

const Display = (props) => {
    // console.log("Display props:",props);

    return (

        <div className="movieDisplay">
            {props.movie != null ?
                <div>
                    <div className="year">Year: {props.year}</div>
                    <img src={props.poster} alt={props.movie} className="moviePoster"/>
                </div>
                : null
            }
        </div>
    );

}

export default Display;