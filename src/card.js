import React from 'react';
import './card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card--image"></div>
            <div className="card--content">
                <span className="narrator">{props.mestre}</span>
                <span className="system">{props.sistema}</span>
            </div>
        </div>
    );
}

export default Card;