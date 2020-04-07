import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'
import { MenuPage } from './pages/MenuPage'
import { OrderPage} from './pages/OrderPage'

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/menu" exact>
                    <MenuPage/>
                </Route>
                <Route path="/order" exact>
                    <OrderPage/>
                </Route>
                <Route path='/detail/:id'>
                    <DetailPage/>
                </Route>
                <Redirect to='/menu' />
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path='/' exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}