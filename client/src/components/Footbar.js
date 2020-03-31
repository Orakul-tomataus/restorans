import React from 'react'
import logo from '../img/logo.svg'

export const Footbar = _ => {
    return(
        <footer className="page-footer ">
          <div className="container">
            <div className="row">
              <div className="col s4">
                <h5 className="white-text">
                <span className="logo2">
                  <img src={logo} alt="logo"/>
                </span>
                </h5>
              </div>
              <div className="col s4">
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Menu dostawy</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Restauracje</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Wiadomości</a></li>
                </ul>
              </div>
              <div className="col s4">
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Organizacja jest święta</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Bonus programowy</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Franczyza</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
}