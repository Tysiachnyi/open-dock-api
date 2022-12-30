const router = require("express").Router();

// REGISTER
router.get("/test", async (req, res) => {
  try {
    res.status(200).json({ message: "All work fine" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
