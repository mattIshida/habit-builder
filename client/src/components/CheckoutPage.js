import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useState, useEffect } from 'react'
import { useAutoLogInQuery } from '../app/services/userAPI';
import { useSelector } from 'react-redux'
import CartDisplay from './CartDisplay';
import CheckoutConfirmation from './CheckoutConfirmation';
import { Route, Switch } from 'react-router-dom'

const stripePromise = loadStripe('pk_test_51Mmi4TGX9v97gt2cUREGXSOJ7Kz19oOGSLoMCyDpIf6ni0vfUxife1kHJ54rtcuy7NfS1TFDbOj3HusNz6URbZDK002kPsKN77');

function CheckoutPage(){

    const [clientSecret, setClientSecret] = useState("");
    const [amount, setAmount] = useState(0)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
      } = useAutoLogInQuery()

    const cart = useSelector(state => state.cart.cart[0])
    console.log('cart', cart)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        console.log('data', data)
        if(isSuccess){
            fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: cart }], metadata: {id: data.id} }),
            })
            .then((res) => res.json())
            .then((data) => {
                setAmount(data.amount)
                setClientSecret(data.clientSecret)
            });
        }
    }, [isSuccess]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return(
        <div>
            {clientSecret && <>
                <h2>Checkout and Payment</h2>
                <CartDisplay amount={amount} item={cart} /> 
                <Elements stripe={stripePromise} options={options}>
                    <Switch>
                        <Route exact path="/checkout">
                            <CheckoutForm clientSecret={clientSecret}/>
                        </Route>
                        {/* <Route path="/checkout/confirmation">
                            <CheckoutConfirmation />
                        </Route> */}
                    </Switch>

                </Elements>
            </>
            }
        </div>
    )
}

export default CheckoutPage;