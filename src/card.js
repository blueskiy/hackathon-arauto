import React from 'react';
import './card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <div style={{ backgroundImage: `url(${props.url})` }} className="card--image"></div>
            <div className="card--content">
                <span className="campaign">{props.campaign}</span>
                {/* <span className="system">{props.sistema}</span> */}
                <div className="tags">
                    <span className="tag">{props.tags[0]}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;