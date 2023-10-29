const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        // take order model reference
        userId: {
            type: String,
            required: true,
        },
        policy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "policy",
        },
        policyStatus: {
            type: String,
            required: true,
        },
    }
)

module.exports = mongoose.model("order", orderSchema);