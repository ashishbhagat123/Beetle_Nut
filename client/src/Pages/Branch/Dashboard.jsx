import React from "react";
import { useContext, useEffect } from "react";
import { BranchDetails } from "../../ContextApi/BranchDetails";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import BranchCard from "../../Components/BranchCard/BranchCard";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    const { notification, branchData } = useContext(BranchDetails);
    const [data, setData] = useState(branchData);
    const [alerts, setAlerts] = useState(notification);
    const [count, setCount] = useState(alerts);
    const history = useHistory();

    useEffect(() => {
        if (branchData._id !== undefined) {
            sessionStorage.setItem("branch", JSON.stringify(branchData));
        } else {
            let branch = JSON.parse(sessionStorage.getItem("branch"));
            setData(branch);
            checkNotification(branch);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            let data = sessionStorage.getItem("branch");
            data = JSON.parse(data);
            checkNotification(data);
        }, 10000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const checkNotification = (e) => {
        const id = e._id;
        if (id) {
            axios
                .get(`http://localhost:8000/branch/notification/${id}`)
                .then((res) => {
                    if (alerts.length < res.data.length) {
                        setAlerts(res.data);
                    }
                });
        }
    };

    const getNotifications = (id) => {
        axios
            .get(`http://localhost:8000/branch/notification/${id}`)
            .then((res) => {
                setAlerts(res.data);
            });
    };

    const handleRead = (id) => {
        axios
            .patch(`http://localhost:8000/branch/notification/${id}`)
            .then((res) => getNotifications(data._id));
    };

    return (
        <>
            <div className={styles.main}>
                <div>
                    <h1>Branch Details</h1>
                    {data && <BranchCard data={data} />}
                </div>
                <div>
                    <h1>Notifications</h1>
                    {alerts.length !== 0 ? (
                        alerts?.map((e) => (
                            <div>
                                <div style = {e.read === true? {opacity: ".8", color: "grey"}: null}>
                                    <h3>
                                        {e.name} searched for your branch on{" "}
                                        {new Date(e.createdAt).toLocaleString()}
                                    </h3>
                                    <h3>Contact Details: {e.mobile}</h3>
                                    {e.read === false && (
                                        <button style = {{border: "none", padding: "5px", margin: "5px", background: "skyBlue"}}
                                            onClick={() => handleRead(e._id)}
                                        >
                                            mark as read
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>No Notifications</h1>
                    )}
                </div>
            </div>
            <button className={styles.button} onClick={() => history.push("/")}>
                LogOut
            </button>
        </>
    );
};

export default Dashboard;
