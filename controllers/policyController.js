const policy = require("../models/policy");

const createPolicy = async (req, res) => {
    // policy data in body
    const newPolicy = new policy(req.body);
    // save to db
    await newPolicy.save();
};

const allPolicies = async (req, res) => {
    try {
        const policies = await policy.find();
        res.status(200).json(policies);
    } catch (err) {
        res.status(500).json({ error: "Error fetching policies" });
    }
};

module.exports = { createPolicy, allPolicies };
