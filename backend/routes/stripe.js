// const stripe = require("stripe")(process.env.STRIPE_KEY)
const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  console.log("called")
    stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      description: "purchase of $(amount)",
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
          console.log(stripeErr)
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;