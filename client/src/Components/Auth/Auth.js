import React, { useState } from "react";
import { withRouter,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useHttp } from '../../hooks/http.hook';
import { setLoggedInUser } from "../../Redux/Actions";


const ConnectedAuth = () => {
    const {loading,request,error,clearError} = useHttp()
    const [form,setForm] = useState({
        email: '' , password: ''
    })
    const [redirectToReferrer,setRedirect] = useState(false)

   

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
            setRedirect(true)
            const data = await request('/api/auth/login','POST',{...form})
            setLoggedInUser({
                token:data.token,
                userId:1
            });            
            console.log(data.token,data.userId)
        } catch (e) {}
    }
    
    if (redirectToReferrer === true) {
        return <Redirect to={'/'} />;
      }

    return (<div className="row">
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
                            <label htmlFor="email" className="white-text">email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input 
                            id="password" 
                            type="password" 
                            name="password"
                            className="validate"
                            onChange={changeHandler}
                            />
                            <label htmlFor="password" className="white-text">Password</label>
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
    );
  }
const Auth = withRouter(connect()(ConnectedAuth));

export default Auth;
