import React from 'react'
import { useHistory } from 'react-router-dom'
import "./styles.css"

const Home = () => {
    const history = useHistory()

    const redirectPage = (page) => {
        history.push(`/${page}`)
    }


    return (
        <div className = "container">
            <div className = "user" onClick = {() => redirectPage("user")}>
                    <h1>Click Here</h1>
                    <h3>To find branches near you</h3>
            </div>
            <div className = "branch" onClick = {() => redirectPage("login")}>
                <h1>Click Here</h1>
                <h3>For Branch LogIn</h3>
            </div>
        </div>
    )
}

export default Home
