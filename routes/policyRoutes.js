const express = require("express");
const router = express.Router();

const { getPolicyById, getPolicy, createPolicy, deletePolicy, getAllPolicies } = require("../controllers/policies.js");

// router.get("/policy/:policyId", getPolicyById); // get policy by id
router.post("/policy/create", createPolicy); // create policy



