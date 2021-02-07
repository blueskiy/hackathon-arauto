import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Card from '../card';
import './style.scss';

const Shelf = (props) => {

    const [tables, setTables] = useState([])

    useEffect(() => {
        axios.get('https://arauto-api.herokuapp.com/tables?limit=4&page=3').then((response) => {
            const {tables} = response.data
            setTables(tables)
        })
    }, [])

    return (
        <div className="shelf">
            <span className="shelf--title">{props.title}</span>

            <div className="shelf--content">
                {tables.map((table, i) => {
                    return (<Card key={i} {...table} />)
                })}
            </div>
        </div>
    );
}

export default Shelf;