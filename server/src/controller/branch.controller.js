const express = require("express");
const Branch = require("../model/branch.model");
const Notification = require("../model/notification.model");
const router = express.Router();

router.post("/dashboard/", async (req, res) => {
    const data = await Branch.create(req.body);
    res.status(201).send(data);
});

router.get("/notification/:id", async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    if (id !== "undefined") {
        const notification = await Notification.find({ branch: id })
            .lean()
            .exec();
        res.status(200).send(notification);
    }
});

router.patch("/notification/:id", async (req, res) => {
    const { id } = req.params;
    const notification = await Notification.updateOne({_id: id}, {$set: {read: true}}).lean().exec();
    res.status(200).send(notification);
});

module.exports = router;
