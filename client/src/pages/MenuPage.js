import React from 'react'
import {useOrder} from '../hooks/order.hook'
import { ProductCard } from '../components/ProductCard';
import { OrderShower } from '../components/OrderShower'

export const MenuPage = () => {
    const {finalPrice,foods,addFood} = useOrder();
    var make;
    if(foods){
        make = foods.map((item,id)=>{
        return (<ProductCard prod={item} onClic={addFood} key={id}/>);
    })
    }
    return(
        <div>
            <OrderShower finalPrice={finalPrice}/>
            <h1>MenuPage</h1>
            <div className="row" >
                {make}
            </div>
        </div>
    )
}