import React from 'react';
import './card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.name}</div>
            </div>
            <div className="back">
                <div className="han">{props.num}</div>
            </div>
        </div>
        <button>Next Card</button>
        <button>Shuffle Cards</button>
    </div>
)

export default Card;