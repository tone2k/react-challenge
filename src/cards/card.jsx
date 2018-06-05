import React, { Component } from 'react';
import './card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">word</div>
            </div>
            <div className="back">
                <div className="han">test</div>
                <div className="pin">test</div>
            </div>
        </div>
    </div>
)

export default Card;