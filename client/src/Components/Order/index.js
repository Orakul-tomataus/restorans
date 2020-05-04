import React ,{ useState }from "react";
import Cart from "../Cart/Cart";
import Form from "./Form";
import './style.css'
import Progres from "../../Progres";

function Order(){
    const [etap,setEtap] = useState(1)
    const Etaps = new Map([
        [1,<Cart/>],
        [2,<Form/>],
        [3,<Progres/>]
    ])
    const BtnGen = ()=>{
        return new Array(Etaps.size).fill(Number).map((_,id)=>
        <div 
            className={`btn etap ${(id+1 === etap)?"red":""}`}
            onClick={e=>setEtap(e.target.id*1)} 
            id={id+1}
            key={id+1}> 
            {id+1} 
        </div>
        )
    }
    const Next = _ => {
            setEtap(etap+1)
    }

    return(
        <div className="order">
            <div className="etaps">
                {BtnGen()}
            </div>
            <div className="etapConteiner">
                {Etaps.get(etap)}
            </div>
            {(etap<Etaps.size)?
            <div 
            className="btn" 
            onClick={Next}>Next</div>
            :<></>}
        </div>
    )
}

export default Order