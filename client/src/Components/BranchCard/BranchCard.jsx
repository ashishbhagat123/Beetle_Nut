import React from 'react'
import styles from "./BranchCard.module.css"

const BranchCard = ({data}) => {
    const {insitution_name,branch_name,branch_incharge,address } = data
    console.log(data)
    return (
        <div className = {styles.box}>
            <div>
                <h2>Institution:</h2>
                <h2>{insitution_name}</h2>
            </div>
            <div>
                <h2>Branch:</h2>
                <h2>{branch_name}</h2>
            </div>
            <div>
                <h2>Incharge:</h2>
                <h2>{branch_incharge}</h2>
            </div>
            <div>
                <h2>Address:</h2>
                <h2>{address}</h2>
            </div>
        </div>
    )
}

export default BranchCard
