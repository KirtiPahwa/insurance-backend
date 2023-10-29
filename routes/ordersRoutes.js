const express = require("express");
const router = express.Router();

// get all policy orders for admin side
router.get("/policies/claims", getAllPolicies);

// accept a policy claim
router.post("/policy/accept/:policyId", acceptPolicy);

// reject a policy claim
router.post("/policy/reject/:policyId", rejectPolicy);