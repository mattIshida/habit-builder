import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useState, useEffect } from 'react'

const stripePromise = loadStripe('pk_test_51Mmi4TGX9v97gt2cUREGXSOJ7Kz19oOGSLoMCyDpIf6ni0vfUxife1kHJ54rtcuy7NfS1TFDbOj3HusNz6URbZDK002kPsKN77');


function CheckoutPage(){

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "premium" }] }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("clientSecret", data.clientSecret)
            setClientSecret(data.clientSecret)
        });
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return(
        <div>
            {clientSecret && 
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm clientSecret={clientSecret}/>
            </Elements>
            }
        </div>
    )
}

export default CheckoutPage;