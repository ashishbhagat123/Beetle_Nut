const mongoose = require("mongoose");

const credentialsSchema = new mongoose.Schema(
    {
        username: { type: "String", required: true },
        password: { type: "String", required: true },
        branch: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "branch",
            required: true,
        },
    },
    { versionKey: false }
);

const Credentials = mongoose.model("credentials", credentialsSchema);

module.exports = Credentials;
