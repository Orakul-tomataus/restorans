import {useCallback, useState, useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'

export const useOrder = () => {
    let order = new Map()
    
    const [foods,setFoods] = useState()
    const [finalPrice,setFinalPrice] = useState(0)
    const {request} = useHttp()
    const getFoods = useCallback(async () =>{
        try {
            const date  = await request('/api/admin/getProducts','POST',{})
            const array = [];
            date.massege.map(x=>array.push(x))
            setFoods(array)
        } catch (e) {}
    },[request])

    const addFood = useCallback((id)=>{
        foods.forEach(item=>{
            if(item._id === id){
                (order.get(id))?order.set(id,order.get(id)+1):order.set(id,1)
                setFinalPrice(finalPrice + item.price)
            }
        })
    },[finalPrice,setFinalPrice,order,foods])
    /*remove to future OrderPage*/
    /*
    const removeFood = useCallback((id)=>{
        order.set(id,order.get(id)-1)
        localStorage.setItem(storageName,order)
    },[])
    const removeOrder = useCallback(()=>{
        localStorage.removeItem(storageName)
    })*/
    useEffect(()=>{
       getFoods()
    },[getFoods])
    return {addFood,getFoods,foods,finalPrice,order}
}