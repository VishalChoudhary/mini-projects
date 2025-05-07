import React from 'react';
import { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({amount}) =>{
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState("");

    const amountInDollars = (amount/100).toFixed(2);

    const handleSubmit = async(e) =>{
      e.preventDefault();
      setIsProcessing(true);
      setMessage("");
    
    if(!stripe || !elements){
      setMessage("Stripe is not loaded.");
      setIsProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if(error){
      setMessage(error.message);
      setIsProcessing(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/checkout/payment",{
        amount,
        paymentMethodId : paymentMethod.id,
      });

      if(response.data.success){
        navigate("/success");
      }
      else{
        setMessage("Payment failed. Try again");
      }

    } catch (error) {
      setMessage(error.response?.data?.error || "Server Error");
    }

    setIsProcessing(false);
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "350px",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Complete Payment</h2>

        <div style={{
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "20px",
          background: "#fff"
        }}>
          <CardElement options={{ hidePostalCode: true }} />
        </div>

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: isProcessing ? "#6c757d" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: isProcessing ? "not-allowed" : "pointer"
          }}
        >
          {isProcessing ? "Processing..." : `Pay $${amountInDollars}`}
        </button>

        {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
      </form>
    </div>
  );

};


const Pay = () => {
  const amount = 20000;

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount}/>
    </Elements>
  )
}

export default Pay;