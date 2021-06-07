import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './Login'


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (<Route {...rest} render={
        (props) => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
                return (<><h1>SORRY</h1>
                    <Redirect to={Login} /></>)
            }
        }
    } />)
}

export default PrivateRoute