const express = require("express");
const Credentials = require("../model/credentials.model");
const Notification = require("../model/notification.model");
const Branch = require("../model/branch.model");
const router = express.Router();

router.post("/login", async (req, res) => {
    const body = req.body;
    const { username, password } = body;
    const credentials = await Credentials.findOne({ username: username })
        .lean()
        .exec();
    if (password === credentials.password) {
        const branch = await Branch.findOne({ _id: credentials.branch })
            .lean()
            .exec();
        const notification = await Notification.find({ branch: branch._id })
            .lean()
            .exec();
        return res.status(200).send({
            branch,
            notification,
        });
    }
});

module.exports = router;
