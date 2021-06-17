const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
    {
        insitution_name: { type: "String", required: true },
        branch_name: { type: "String", required: true },
        address: { type: "String", required: true },
        city: { type: "String", required: true },
        contact_number: { type: "Array", required: true },
        branch_incharge: { type: "String", required: true },
        pincode_covered: { type: "String", required: true },
    },
    { versionKey: false }
);

const Branch = mongoose.model("branch", branchSchema);

module.exports = Branch;
