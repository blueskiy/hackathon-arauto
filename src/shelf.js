import React from 'react';
import Card from './card'
import './shelf.scss'

const Shelf = (props) => {
    const tables = [
        {
            "mestre": "biroliro",
            "sistema": "D&D",
            "url": "https://cdna.artstation.com/p/assets/images/images/022/577/506/large/eddie-mendoza-canal-town.jpg?1575955042"
        },
        {
            "mestre": "boromin",
            "sistema": "daemon",
            "url": "https://cdna.artstation.com/p/assets/images/images/001/631/384/large/devon-fay-devon-fay-scifi-alley.jpg?1449806973"
        },
        {
            "mestre": "frodo",
            "sistema": "D&D",
            "url": "https://cdna.artstation.com/p/assets/images/images/019/974/238/large/petros-stefanidis-mayan-lightning-conductor-petros-stefanidis.jpg?1565808198"
        },
        {
            "mestre": "elfo",
            "sistema": "gurps",
            "url": "https://cdna.artstation.com/p/assets/images/images/032/375/428/large/darek-zabrocki-doodle-3-4c.jpg?1606251133"
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