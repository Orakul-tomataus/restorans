import {useState, useEffect, useCallback} from 'react'
import { useHttp } from '../hooks/http.hook'

export const useProdStorage = () => {
    const [products,setProducts] = useState([]);
    const {request} = useHttp();
    const getProducts = useCallback(async () =>{
        if(products.length <1){//<- когда не поставил такую проверку то ишли постояние запросы на сервер , портом перерпешу нормально 
        try {
            const date  = await request('/api/admin/products','GET')
            setProducts(date.massege)
        } catch (e) {}}
    },[request,setProducts,products])
    
    useEffect(()=>{
        getProducts()
    },[getProducts,products])
    return {products}
}