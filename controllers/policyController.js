const express = require("express");
const policy = require("../models/policy");

const createPolicy = (req, res) => {
    // policy data in body
    const newPolicy = new policy(req.body);
    // save to db
    newPolicy.save((err, policy) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to save policy in DB"
            });
        }
        res.json({ policy });
    });
}


module.exports = { createPolicy};