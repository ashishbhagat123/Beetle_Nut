import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import styles from "./Login.module.css";
import axios from "axios"
import {BranchDetails} from "../../ContextApi/BranchDetails";

const initState = {
    username: "",
    password: "",
};

const Login = () => {
    const [data, setData] = useState(initState);
    const history = useHistory()
    const  {handleData}  = useContext(BranchDetails)

    const handleBranchDetails = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    };

    const searchBranch = () => {
        !data.username.length || !data.password.length
            ? alert("input filed cannot be empty")
            : 
            axios.post("http://localhost:8000/branch/login", data)
            .then(res => {
                handleData(res.data)
                history.push("/dashboard")
            })
            .catch(err => console.log(err))
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>LogIn</h1>
                <div>
                    <h3>Username</h3>
                    <input
                        name="username"
                        onChange={handleBranchDetails}
                        type="text"
                    />
                </div>
                <div>
                    <h3>Password</h3>
                    <input
                        name="password"
                        onChange={handleBranchDetails}
                        type="password"
                    />
                </div>
                <button onClick={searchBranch}>LogIn</button>
                <button onClick = {() => history.push("/")}>Go Back</button>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Login;
