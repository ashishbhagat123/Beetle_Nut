import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const BranchDetails = createContext()

const BranchDetailsProvider = ({children}) => {
    const [notifications, setNotifications] = useState([]);
    const [data, setData] = useState([]);

    const handleData = (e) => {
        setNotifications(e.notification)
        setData(e.branch)   
    }

    const value = {
        notification: notifications,
        branchData: data,
        handleData
    }

    return (<BranchDetails.Provider value = {value}>{children}</BranchDetails.Provider>)
}

export default BranchDetailsProvider
