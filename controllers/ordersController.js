const orders = require("../models/orders.js");
const { all } = require("../routes/policyRoutes.js");

// create policy for admin side

const getAllClaims = async (req, res) => {
    const allParsedOrders = [];
    try {
        const allOrders = await orders.find();
        for (let i = 0; i < allOrders.length; i++) {
            const order = allOrders[i];
            const populatedOrder = await order.populate({
                path: "policy",
                select: "-_id -__v -image",
            });
            allParsedOrders.push(populatedOrder);
        }
        res.status(200).json(allParsedOrders);
    } catch (err) {
        res.status(500).json({ error: "Error fetching orders" });
    }
};

// accept a policy claim
const acceptClaim = (req, res) => {
    // find policy by id using params
    const policyId = req.params.policyId;
    // search policy in db
    const policy = orders.findById(policyId);

    policy.staus = "accepted";

    policy.save();
};

// reject a policy claim
const rejectClaim = (req, res) => {
    // find policy by id using params
    const policyId = req.params.policyId;
    // search policy in db
    const policy = orders.findById(policyId);

    policy.staus = "rejected";
    policy.save();
};

const createOrder = (req, res) => {
    const allOrders = req.body;
    const parsedOrders = allOrders.orders;

    // iterate through parsed orders and save them to db using orders model and also populate the policy field with the policy document

    parsedOrders.forEach(async (order) => {
        const newOrder = new orders(order);
        // const policyDetails = await orders.findById(order.policyId);
        // newOrder.populate("policyDetails");
        // // newOrder.policyDetails = policyDetails;
        newOrder.save();
    });
    res.status(200).json({ message: "Orders created" });
};

module.exports = { getAllClaims, acceptClaim, rejectClaim, createOrder };
