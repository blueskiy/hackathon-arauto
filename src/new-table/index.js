import React from 'react';
import './style.scss';


const NewTable = ({open, closeModal}) => {

    return ( 
        <div onClick={() => closeModal(!open)} className={`overlay ${open ? "opened" : ''}`}>
            <div className="modal-body">
                <h1>Modal kkkk</h1>
            </div>
        </div>
     );
}
 
export default NewTable;