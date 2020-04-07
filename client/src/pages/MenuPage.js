import React from 'react'
import {useOrder} from '../hooks/order.hook'
import { ProductCard } from '../components/ProductCard';

export const MenuPage = () => {
    const {finalPrice,foods,addFood} = useOrder();
    let make = foods.map((item,id)=>{
        return (<ProductCard prod={item} onClic={addFood} key={id}/>);
    })
    return(
        <div>
            <div className="basket">
                <span>
                    <div>
                    {(finalPrice !== 0) && finalPrice + "$"}
                    {(finalPrice === 0) && "lol"}
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