import {useStripe, useElements, PaymentElement, AddressElement} from '@stripe/react-stripe-js';

function CheckoutForm({ clientSecret }){
  const stripe = useStripe();
  const elements = useElements();
  console.log(elements)


  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not yet loaded.")
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // 2: Intent

    // const {error: backendError, clientSecret} = await fetch(
    //     '/create-payment-intent',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         paymentMethodType: 'card',
    //         currency: 'usd',
    //       }),
    //     }
    // ).then((r) => r.json());


    // 3: Confirm payment step
    console.log("before confirm paymet")
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:4000",
      },
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <AddressElement options={{mode: 'billing'}} /> */}
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;