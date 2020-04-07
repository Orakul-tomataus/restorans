import React from 'react'
import { useOrder } from '../hooks/order.hook'
export const OrderPage = () => {
    const {order} = useOrder()

    return(
        <div>
            <h1>Order Page</h1>
            {console.log(order)}
        </div>
    )
}