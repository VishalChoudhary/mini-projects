const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment',async(req,res)=>{

    try {
        const { amount, paymentMethodId } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method : paymentMethodId,
            confirm: true,
            automatic_payment_methods:{
                enabled : true,
                allow_redirects: "never",
            },
        });
        res.status(200).json({success: true, clientSecret: paymentIntent.client_secret});
    } 
    
    catch (error) {
        console.log("Stripe Error: ",error);
        res.status(400).json({success: false, error: error.message});
    }
});

module.exports = router;