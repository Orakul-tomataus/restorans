import {useCallback, useState} from 'react'
import { useProdStorage } from '../hooks/prodStorage.hook'

export const useOrder = () => {
    const [order,setOrder] = useState([]);

    const addProdukt = useCallback((card) => {
      setOrder(order.concat(card))
    },[])
    console.log(order)
    return {addProdukt,setOrder}
}