import {useCallback, useState} from 'react'
import { useHttp } from '../hooks/http.hook'

let foods = [
    {id:'a',name:"КАРПАЧЧО ИЗ ГОВЯДИНЫ С ТРЮФЕЛЬНЫМ АЙОЛИ",price:30,photoURL:"https://storage.ginzadelivery.ru/product/32160/l.bb9281d2c021902aee810cde43a7ede4.jpg"},
    {id:'b',name:"ЛЮЛЯ-КЕБАБ ИЗ БАРАНИНЫ",price:20,photoURL:"https://storage.ginzadelivery.ru/product/7907/l.dd547e957e294fb2ec06a109b6576ae9.jpg"},
    {id:'c',name:"ЛАВАШ ИЗ ТАНДЫРА",price:15,photoURL:"https://storage.ginzadelivery.ru/product/20215/l.5ea901f3626721c7715a5d48e3cb8758.jpg"},
    {id:'d',name:"ЛАВАШ ИЗ ТАНДЫРА",price:10,photoURL:"https://storage.ginzadelivery.ru/product/20215/l.5ea901f3626721c7715a5d48e3cb8758.jpg"}]

export const useOrder = () => {
    let order = new Map()
    const [finalPrice,setFinalPrice] = useState(0)
    const {request} = useHttp()
    const getFoods = useCallback(async () =>{
        try {
            const date  = await request('/api/admin/getProducts','POST',{})  
            console.log(date)  
            return date
        } catch (e) {}
    },[request])

    const addFood = useCallback((id)=>{
        console.log(id)
        foods.forEach(item=>{
            if(item.id === id){
                (order.get(id))?order.set(id,order.get(id)+1):order.set(id,1)
                setFinalPrice(finalPrice + item.price)
            }
        })
    },[finalPrice,setFinalPrice,order])
    /*remove to future OrderPage*/
    /*
    const removeFood = useCallback((id)=>{
        order.set(id,order.get(id)-1)
        localStorage.setItem(storageName,order)
    },[])
    const removeOrder = useCallback(()=>{
        localStorage.removeItem(storageName)
    })*/
    return {addFood,getFoods,foods,finalPrice}
}