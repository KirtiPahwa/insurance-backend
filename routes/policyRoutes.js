const express = require("express");
const router = express.Router();

const { createPolicy, allPolicies } = require("../controllers/policyController.js");

// create policy for admin side
router.post("/policy/create", createPolicy);

// get all policies for user side
router.get("/policy/all", allPolicies);

module.exports = router;