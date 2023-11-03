const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    // take order model reference
    userId: {
        type: String,
        required: true,
    },
    policy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "policy",
        required: true,
    },
    policyStatus: {
        type: String,
        default: "pending",
        required: true
    },
});

module.exports = mongoose.model("order", orderSchema);
