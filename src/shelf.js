import React from 'react';
import Card from './card'
import './shelf.scss'

const Shelf = (props) => {
    const tables = [
        {
            "campaign": "Contos Inacabados",
            "sistema": "D&D",
            "tags": [
                "medieval"
            ],
            "url": "https://cdna.artstation.com/p/assets/images/images/022/577/506/large/eddie-mendoza-canal-town.jpg?1575955042"
        },
        {
            "campaign": "Cyberpunk 2077",
            "sistema": "daemon",
            "tags": [
                "sci-fi"
            ],
            "url": "https://cdna.artstation.com/p/assets/images/images/001/631/384/large/devon-fay-devon-fay-scifi-alley.jpg?1449806973"
        },
        {
            "campaign": "A Ira & o Dragão",
            "sistema": "D&D",
            "tags": [
                "medieval"
            ],
            "url": "https://cdna.artstation.com/p/assets/images/images/001/032/036/large/bayard-wu-05.jpg?1443927688"
        },
        {
            "campaign": "The Great Fall",
            "sistema": "gurps",
            "tags": [
                "sci-fi"
            ],
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