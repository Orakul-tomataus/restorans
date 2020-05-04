import React, { useState } from 'react'
function Form(){
    const [adres,setAdres] = useState("")
    const [phone,setPhone] = useState("")
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
                        value={adres}
                        onChange={(e)=>{
                            setAdres(e.target.value)
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
                        }}
                        />
                    </div>
                </div>
            </form>
        </div>
        )

}
export default Form
