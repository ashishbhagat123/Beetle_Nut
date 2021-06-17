const mongoose = require("mongoose")


const notificationSchema = new mongoose.Schema({
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch",
        required: true
    },
    name: {type: "String", required: true},
    mobile: {type: "Number", required: true},
    pincode: {type: "Number", required: true},
    read: {type: "Boolean", required: true}
},{versionKey: false, timestamps: true})

const Notification = mongoose.model("notification", notificationSchema)

module.exports = Notification