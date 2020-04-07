import React from 'react'

export const ProductCard = (props) => {
    return(
    <div className="col s12 m4">
        <div className="card" >
            <div className="card-image">
                <img src={props.prod.photoURL} alt={props.prod.name}/>
                <span className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons" onClick={(event)=>{props.onClic(event.target.id)}} id={props.prod._id}>+</i>
                </span>
                </div>
                <div className="card-content">
                <span className="card-title">{props.prod.name}</span>
                <p>{props.prod.price} $</p>
            </div>
        </div>
    </div>
)}