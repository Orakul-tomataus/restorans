import React from 'react'
import {useOrder} from '../hooks/order.hook'

export const MenuPage = () => {
    const {addFood,foods,finalPrice} = useOrder()
    
    let make = foods.map((item,id)=>{return (
        <div className="col s12 m4" key={id}>
            <div className="card" >
                <div className="card-image">
                <img src={item.photoURL} alt={item.name}/>
                <span className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons" onClick={(event)=>{addFood(event.target.id *1 )}} id={item.id}>+</i>
                </span>
                </div>
                <div className="card-content">
                <span className="card-title">{item.name}</span>
                <p>{item.price} $</p>
                </div>
            </div>
        </div>
      );})

    return(
        <div>
            <div className="basket">
            <span><div>
                {(finalPrice !== 0) && finalPrice + "$"}
                </div>
                </span>
            </div>
            <h1>MenuPage</h1>
            <div className="row">
                {make}
            </div>
        </div>
    )
}