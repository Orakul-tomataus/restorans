import React from 'react'
import {useOrder} from '../hooks/order.hook'
import { ProductCard } from '../components/ProductCard';
import { OrderShower } from '../components/OrderShower'

export const MenuPage = () => {
    const {product,finalPrice,addProducts} = useOrder();
    var make;
    if(product){
        make = product.map((item,id)=>{
        return (<ProductCard prod={item} onClic={addProducts} key={id}/>);
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