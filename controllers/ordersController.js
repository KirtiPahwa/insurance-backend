const orders = require("../models/orders.js")

// create policy for admin side
const getAllClaims = (req, res) => {
    orders.find().exec((err, orders) => {
        if (err) {
            return res.status(400).json({
                error: "NO orders found"
            });
        }
        res.json(orders);
    });
}

// accept a policy claim
const acceptClaim = (req, res) => {
    // find policy by id using params
    const policyId = req.params.policyId;
    // search policy in db
    const policy = orders.findById(policyId);

    policy.staus = "accepted";

    policy.save((err, updatedPolicy) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to accept policy"
            });
        }
        res.json(updatedPolicy);
    });
}

// reject a policy claim
const rejectClaim = (req, res) => {

    // find policy by id using params
    const policyId = req.params.policyId;
    // search policy in db
    const policy = orders.findById(policyId);

    policy.staus = "rejected";

    policy.save((err, updatedPolicy) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to reject policy"
            });
        }
        res.json(updatedPolicy);
    });
}

module.exports = { getAllClaims, acceptClaim, rejectClaim };