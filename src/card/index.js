import React from 'react';
import './style.scss'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card--image" style={{ backgroundImage: `url(${props.url})` }}></div>
            <div className="card--overlay"></div>
            <div className="card--content">
                <span className="campaign">{props.campaign}</span>
                {/* <span className="system">{props.sistema}</span> */}
                <div className="tags">
                    <span className="tag">{props.tags[0]}</span>
                    <span className="tag">{props.tags[1]}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;