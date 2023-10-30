const express = require("express");
const router = express.Router();

const {createPolicy } = require("../controllers/policyController.js");

// create policy for admin side
router.post("/policy/create", createPolicy);

module.exports = router;
