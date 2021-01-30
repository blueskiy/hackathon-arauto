import React from 'react';
import Card from './card'
import './shelf.scss'

const Shelf = (props) => {
    const tables = [
        {
            "mestre": "biroliro",
            "sistema": "D&D",
        },
        {
            "mestre": "boromin",
            "sistema": "daemon",
        },
        {
            "mestre": "boromin",
            "sistema": "daemon",
        },
        {
            "mestre": "boromin",
            "sistema": "daemon",
        }
    ]

    return (
        <div className="shelf">
            <span className="shelf--title">{props.title}</span>

            <div className="shelf--content">
                {tables.map((table) => {
                    return (<Card {...table} />)
                })}
            </div>
        </div>
    );
}

export default Shelf;