const express = require("express");
const router = express.Router();

const { getPolicyById, getPolicy, createPolicy, deletePolicy, getAllPolicies } = require("../controllers/policyController.js");

// create policy for admin side
router.post("/policy/create", createPolicy);

