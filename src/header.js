import React from 'react';
import './header.scss'

const Header = () => {
    return (
        <div id="header" className="header">
            <span className="header--left-box">
                <a href="#">Arauto</a>
            </span>

            <div className="header--right-box">
                <button id="new-table" className="new-table">Nova Mesa</button>
                <span className="profile-picture"></span>
            </div>
        </div>
    );
}

export default Header;