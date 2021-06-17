import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./User.module.css";
import BranchCard from "../../Components/BranchCard/BranchCard";

const initState = {
    name: "",
    mobile: 0,
    pin: 0,
};

const User = () => {
    const [data, setData] = useState(initState);
    const [branches, setBranches] = useState(undefined);
    const history = useHistory();

    const handleUserDetails = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    };

    const searchBranch = () => {
        !data.name.length || !data.pin.length || !data.mobile.length
            ? alert("input filed cannot be empty")
            : axios
                  .post("http://localhost:8000/user", data)
                  .then((res) => setBranches(res.data))
                  .catch((err) => console.log(err));
    };

    const goToHomePage = () => {
        history.push("/");
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Search Branches Near You</h1>
                <div>
                    <h3>Name</h3>
                    <input
                        name="name"
                        onChange={handleUserDetails}
                        type="text"
                    />
                </div>
                <div>
                    <h3>Mobile No.</h3>
                    <input
                        name="mobile"
                        onChange={handleUserDetails}
                        type="number"
                    />
                </div>
                <div>
                    <h3>Pin Code</h3>
                    <input
                        name="pin"
                        onChange={handleUserDetails}
                        type="number"
                    />
                </div>
                <button onClick={searchBranch}>Search</button>
                <button onClick={goToHomePage}>Back</button>
            </div>
            <div>
                {branches !== undefined && (
                    <div className={styles.cardWrapper}>
                        {console.log(typeof branches)}
                        {typeof branches === "object" ? (
                            branches.map((e) => (
                                <BranchCard key={e._id} data={e} />
                            ))
                        ) : (
                            <h2 style={{ marginTop: "30vh" }}>
                                No Branch found near you
                            </h2>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
