const express = require("express");
const router = express.Router();

const {getAllClaims, acceptClaim, rejectClaim , createOrder} = require("../controllers/ordersController.js");

// create an order for user side
router.post("/order/create", createOrder);

// get all policy orders for admin side
router.get("/policies/claims", getAllClaims);

// accept a policy claim
router.post("/policies/accept/:policyId", acceptClaim);

// reject a policy claim
router.post("/policies/reject/:policyId", rejectClaim);

module.exports = router;