import React, { Component } from 'react';
import './card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">Card A</div>
            </div>
            <div className="back">
                <div className="han">1</div>
                <div className="pin">2</div>
            </div>
        </div>
    </div>
)

export default Card;