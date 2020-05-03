import React ,{ useState }from "react";
import Cart from "../Cart/Cart";

function Order(){
    const [etap,setEtap] = useState(1)
    const Etaps = new Map([
        [1,<Cart/>],
        [2,"order form"],
        [3,"Looking of progresing ordder"]
    ])
    const BtnGen = ()=>{
        return new Array(Etaps.size).fill(Number).map((_,id)=>
        <div 
            className={`btn ${(id+1 === etap)?"red":""}`}
            onClick={e=>setEtap(e.target.id*1)} 
            id={id+1}> 
            {id+1} 
        </div>
        )
    }

    return(
        <div className="order">
            {BtnGen()}
            {Etaps.get(etap)}
        </div>
    )
}

export default Order