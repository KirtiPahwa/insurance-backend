const orders = require("../models/orders.js")

// create policy for admin side
const getAllClaims = (req, res) => {
    orders.find().exec((err, orders) => {
        if (err) {
            return res.status(400).json({
                error: "NO orders found"
            });
        }
        return res.json(orders);
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
        return res.json(updatedPolicy);
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
        return res.json(updatedPolicy);
    });
}

const placeOrder = (req, res) => {
    // we will recieve the order details in the req.body in form of json which will contain an array of orders
    // we will loop through the array and save each order in the db
    const orders = req.body.orders;
    orders.forEach(order => {
        const newOrder = new Order(order);
        newOrder.save((err, order) => {
            if (err) {
                return res.status(400).json({
                    error: "Not able to save order in DB"
                });
            }
        });
    });
    return res.json({
        message: "Order placed successfully"
    });
}

module.exports = { getAllClaims, acceptClaim, rejectClaim };