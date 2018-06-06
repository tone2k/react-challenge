import React from 'react';
import './card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.name}</div>
            </div>
        </div>
    </div>
)

export default Card;
