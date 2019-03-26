import React from 'react';
import './History.css';

const History = (props) => {
    // console.log("History props", props);

    return (

        <div className="movieHistory">
            <h3>Search History</h3>
            <ul>
                {props.history.map((history) => {
                    return <li key={index} className="movieTitle">
                    {movie.Title}
                    <button className="deleteButton" onClick={() => {props.deleteTitle(history)}}>Delete</button>
                    </li>
                })
                }
            </ul>
        </div>
    )
}

export default History;