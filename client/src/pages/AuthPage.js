import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMassage } from '../hooks/massage.hook'
import { AuthContext } from '../context/AuthContext'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const massage = useMassage()
    const {loading,request,error,clearError} = useHttp()
    const [form,setForm] = useState({
        email: '' , password: ''
    })

    useEffect(()=>{
        massage(error)
        clearError()
    },[error,massage,clearError])

    const changeHandler = event => {
        setForm({...form,[event.target.name]:event.target.value})
    }

    const registerHandler = async () =>{
        try {
            const data = await request('/api/auth/register','POST',{...form})
            console.log('Data',data);
            
        } catch (e) {}
    }
    const loginHandler = async () =>{
        try {
            const data = await request('/api/auth/login','POST',{...form})
            auth.login(data.token,data.useId)
            
        } catch (e) {}
    }

    return(
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Auth</span>
                        <div>
                            <div className="row">
                                <div className="input-field">
                                    <input 
                                    id="email" 
                                    type="email" 
                                    name="email"
                                    className="validate"
                                    onChange={changeHandler}
                                    />
                                    <label for="email" className="white-text">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field">
                                    <input 
                                    id="password" 
                                    type="password" 
                                    name="password"
                                    class="validate"
                                    onChange={changeHandler}
                                    />
                                    <label for="password" className="white-text">Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                            className="btn yellow darken-4"
                            onClick={loginHandler}
                            >Login acaunt</button>
                            <button
                            className="btn gray lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                            >Registration</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}