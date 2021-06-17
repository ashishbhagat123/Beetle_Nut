const express = require("express");
const  Credentials  = require("../model/credentials.model")
const  Branch  = require("../model/branch.model")
const  Notification  = require("../model/notification.model");
const { propfind } = require("./branch.controller");
const router = express.Router();


router.post("/", async(req, res) => {
    const body = req.body
    console.log(body)
    const {name, mobile, pin} = body
    try{
        const branch = await Branch.find({pincode_covered: pin}).lean().exec()
        console.log(branch)
        if(branch.length){
            for(let i = 0; i < branch.length; i++){
                const data = {
                    name,
                    mobile,
                    pincode: pin,
                    read: false,
                    branch: branch[i]._id
                }
                const notification = await Notification.create(data)
            }
            res.status(200).send(branch)
        } else {
            res.status(204).send("no data found")
        }
    }
    catch(err){
    }
})

module.exports = router