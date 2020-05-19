import React ,{ useState }from "react";
import { useDispatch } from 'react-redux'
import Cart from "../Cart/Cart";
import Form from "./Form";
import './style.css'
import Progres from "../Progres";
import { sendOrder } from "../../Redux/Actions";

function Order(){
    const [etap,setEtap] = useState(1)
    const dispatch = useDispatch()
    const Next = _ => {
        setEtap(etap+1)
    }
    /*Пока пускай будет так потом посмотрю как сделать красиво */
    const Etaps = new Map([
        [1,<Cart>
                <div className="btn" onClick={Next}>Next</div>
            </Cart>],
        [2,<Form>
            <button className="btn" onClick={()=>{
                dispatch(sendOrder())
                Next()
        }}>submit</button></Form>],
        [3,<Progres/>]
    ])
    const BtnGen = ()=>{
        return new Array(Etaps.size).fill(Number).map((_,id)=>
        <div 
            className={`btn etap ${(id+1 === etap)?"red":""}`} 
            id={id+1}
            key={id+1}> 
            {id+1} 
        </div>
        )
    }
    return(
        <div className="order">
            <div className="etaps">
                {BtnGen()}
            </div>
            <div className="etapConteiner">
                {Etaps.get(etap)}
            </div>            
        </div>
    )
}

export default Order