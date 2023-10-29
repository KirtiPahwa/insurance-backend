const express = require("express");
const policy = require("../models/policy");

// business logic here
const createPolicy = (req, res) => {
    // policy data in body
    const policy = new policy(req.body);
    // save to db
    policy.save((err, policy) => {
        if (err) {
            return res.status(400).json({
                error: "NOT able to save policy in DB"
            });
        }
        res.json({ policy });
    });
}

module.exports = { createPolicy };