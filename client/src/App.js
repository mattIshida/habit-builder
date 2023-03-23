import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import LandingPage from "./components/LandingPage"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Timer from "./components/Timer";
import CheckoutPage from "./components/CheckoutPage";
import Upgrade from "./components/Upgrade";
import SharePage from "./components/SharePage";
import BrowseReaders from "./components/BrowseReaders"
import Feed from "./components/Feed"
import UserProfile from "./components/UserProfile";
import { useAutoLogInQuery } from './app/services/userAPI'
import { Container } from "react-bootstrap";
import Flow from "./components/Flow";
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51Mmi4TGX9v97gt2cUREGXSOJ7Kz19oOGSLoMCyDpIf6ni0vfUxife1kHJ54rtcuy7NfS1TFDbOj3HusNz6URbZDK002kPsKN77');

function App() {

  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("clientSecret", data.clientSecret)
  //       setClientSecret(data.clientSecret)
  //     });
  // }, []);

  // const appearance = {
  //   theme: 'stripe',
  // };
  // const options = {
  //   // clientSecret,
  //   appearance,
  // };



  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };
  const history = useHistory()
  const {data, 
    isLoading,
    isSuccess,
    isError,
    error} = useAutoLogInQuery()
  console.log(data)

  let content

  // if(isSuccess){
  //   history.push('/home')
  // }
  
  return (
    
      <div className="App">
      <Container fluid="true" >

        {/* {clientSecret &&  */}
        {/* <Elements stripe={stripePromise} options={options}> */}
          <NavBar />
          <Container className="col-md-8 col-lg-6 col-sm-10">
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            {/* <Route exact path="/signin">
              <SignInComponent />
            </Route>
            <Route exact path="/signup">
              <SignUpComponent />
            </Route> */}
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path='/timer'>
              <Timer seconds={10}/>
            </Route>
            <Route path='/test'>
              <Flow />
            </Route>
            <Route path='/checkout'>
              <CheckoutPage />
            </Route>
            <Route path='/upgrade'>
              <Upgrade />
            </Route>
            <Route path='/share'>
              <SharePage />
            </Route>
            <Route path='/readers'>
              <BrowseReaders />
            </Route>
            <Route path='/feed'>
              <Feed />
            </Route>
            <Route path='/profile'>
              <UserProfile />
            </Route>
          </Switch> 
        {/* </Elements> */}
    {/* }      */}
          </Container>
      </Container>
      </div>
 
  );
}

export default App;