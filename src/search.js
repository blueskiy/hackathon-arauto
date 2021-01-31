import React from 'react';
import './search.scss'

const Search = () => {
    return (
        <div className="search-wrapper">
            <div id="search" className="search">
                <div className="search-1">
                    <span>Localização</span>
                    <input type="text" placeholder="Onde você quer jogar?" />
                </div>

                <div className="search-2">
                    <span>Check-in</span>
                    <input type="text" placeholder="Insira as datas" />
                </div>

                <div className="search-3">
                    <span>Checkout</span>
                    <input type="text" placeholder="Insira as datas" />
                </div>

                <div className="search-4">
                    <span>Players</span>
                    <input type="text" placeholder="Onde você quer jogar?" />
                </div>
            </div>
        </div>
    );
}

export default Search;