const mongoose = require("mongoose");

const policySchema = mongoose.Schema(
    {
        policyId: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        policyName: {
            type: String,
            required: true
        },
        policyType: {
            type: String,
            required: true
        },
        policyDescription: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("policy", policySchema);