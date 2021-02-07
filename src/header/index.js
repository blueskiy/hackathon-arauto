import React from 'react';
import './style.scss'
import NewTable from '../new-table'
import { useState } from 'react';

const Header = () => {

    const [modalOpen, toggleModal] = useState(false)

    return (
        <div id="header" className="header">
            <NewTable closeModal={toggleModal} open={modalOpen} />
            <span className="header--left-box">
                <a href="/">Arauto</a>
            </span>

            <div className="header--right-box">
                <button onClick={() => toggleModal(!modalOpen)} id="new-table" className="new-table">Nova Mesa</button>
                <span className="profile-picture"></span>
            </div>
        </div>
    );
}

export default Header;