import {useCallback, useState, useEffect,useReducer} from 'react'
import { useHttp } from '../hooks/http.hook'

export const useOrder = () => {
    const [order,dispatch] = useReducer(reducer,{products:[]})
    const [product,setProduct] = useState([])
    const [finalPrice,setFinalPrice] = useState(0)
    const {request} = useHttp()
    function reducer(state, action) {
        const prodID = state.products.findIndex(x=>x.id===action.id)
        switch (action.type) {
          case 'increment':
            if(prodID === -1) return {products: [...state.products ,{id:action.id,count:1}]}
            
            return {products: state.products.map((item,id)=>{
              return (id === prodID)?{id:item.id,count:item.count+1}:item;
            })}
      
          case 'decrement':
            if(prodID === -1) return{products: state.products}
            if(state.products[prodID].count-1 < 1) return {products: state.products.filter(item => item.id !== action.id)};
            
            return {products: state.products.map((item,id)=>{
              return (id === prodID)?{id:item.id,count:item.count-1}:item;
            })}
          case 'destruct':
            return {products: state.products.filter(item => item.id !== action.id)};
          default:
            throw new Error();
        }
      }
    const getFoods = useCallback(async () =>{
        try {
            const date  = await request('/api/admin/getProducts','POST',{})
            setProduct(date.massege)
        } catch (e) {}
    },[request])
    
    const addProducts = useCallback((productId)=>{
        dispatch({type:'increment',id:productId});
        console.log('addProducts:',order,productId)
        
        let final = 0
        order.products.forEach(element => {

            final += product.find(item=>item._id === element.id).price*element.count
        });
        setFinalPrice(final)
    },[setFinalPrice,dispatch,product,order])

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
    return {dispatch,product,finalPrice,order,addProducts}
}