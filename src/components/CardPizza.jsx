import React from 'react'
import { formatNumber } from '../utils/format.js';

const CardPizza = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <img src={props.imagen} className="card-img-top" alt={`Pizza ${props.name}`} />
                <h5 className="card-title">Pizza {props.name}</h5>
                <p className="card-text">Ingredientes: {props.ingredients.join(', ')}</p>
                <h6 className="card-subtitle mb-2 text-muted">${formatNumber(props.price)}</h6>
                <div className="card-buttons">
                    <button className="btn btn-secondary">Ver más</button>
                    <button className="btn btn-primary">Añadir</button>
                </div>
            </div>

        </div>
    )
}

export default CardPizza