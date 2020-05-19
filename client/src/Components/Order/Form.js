import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addOrderProps } from '../../Redux/Actions'

function Form (props) {
    const [addres,setAddres] = useState("")
    const [phone,setPhone] = useState("")
    const dispatch = useDispatch()
    return(
        <div className="form">        
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">map</i>
                    <input 
                        type="text" 
                        className="validate" 
                        placeholder="Adress"
                        value={addres}
                        onChange={(e)=>{
                            setAddres(e.target.value)
                            dispatch(addOrderProps({addres,phone}))
                        }}
                        />
                    </div>
                    </div>
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input 
                        id="icon_telephone" 
                        type="tel" 
                        className="validate" 
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e)=>{
                            setPhone(e.target.value)
                            dispatch(addOrderProps({addres,phone}))
                        }}
                        />
                    </div>
                </div>
                <div className="row">
                    {(addres && phone)?props.children:""}
                </div>
            </form>
        </div>
        )
}
export default Form
