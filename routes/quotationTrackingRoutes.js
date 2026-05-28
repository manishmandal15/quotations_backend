// const express = require("express");
// const router = express.Router();
// const { getQuotationTracking } = require("../controllers/quotationTrackingController");

// router.get("/", getQuotationTracking);

// module.exports = router;


const express = require("express");
const router = express.Router();
const quotationTrackingController = require("../controllers/quotationTrackingController");

// GET: all quotation tracking records
router.get("/", quotationTrackingController.getQuotationTracking);

module.exports = router;

