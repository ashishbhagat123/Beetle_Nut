import React from 'react'
import Home from "../Pages/Home/Home"
import User from "../Pages/User/User"
import Login from "../Pages/Login/Login"
import Branch from "../Pages/Branch/Dashboard"
import {Switch, Route} from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar'
import Dashboard from '../Pages/Branch/Dashboard'

const index = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>
                <Route exact path = "/user">
                    <User />
                </Route>
                <Route exact path = "/branch">
                    <Branch />
                </Route>
                <Route exact path = "/login">
                    <Login />
                </Route>
                <Route exact path = "/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </div>
    )
}

export default index
