import React, { useContext } from 'react'
import { NavLink , useHistory} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = ()=> {
    const history  = useHistory()
    const auth = useContext(AuthContext)
    const logoutHeandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper">
            <span className="brand-logo">Logo</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to='/menu'>menu</NavLink></li>
                <li><a href='/' onClick={logoutHeandler}>exit</a></li>
            </ul>
            </div>
        </nav>
    );
  }