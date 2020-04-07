import React from 'react'
import { NavLink } from 'react-router-dom';

export const OrderShower = (props) => {
    return(
            <div className="basket">
                <span>
                    <div>
                    <NavLink to='/order'>
                        {(props.finalPrice !== 0) && props.finalPrice + "$"}
                            {(props.finalPrice === 0) && "lol"}
                    </NavLink>
                    </div>
                </span>
            </div>
    )
}