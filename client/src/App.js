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
import { Carousel, CarouselItem, Container } from "react-bootstrap";
import Flow from "./components/Flow";
import SpinnerLoading from "./components/SpinnerLoading";
import NavBarStatic from "./components/NavBarStatic";
import CheckoutConfirmation from "./components/CheckoutConfirmation";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51Mmi4TGX9v97gt2cUREGXSOJ7Kz19oOGSLoMCyDpIf6ni0vfUxife1kHJ54rtcuy7NfS1TFDbOj3HusNz6URbZDK002kPsKN77');


function App() {

  const history = useHistory()
  const {data, isLoading, isSuccess, isError, error} = useAutoLogInQuery()

  if(isSuccess) console.log('user', data)


    const appearance = {
      theme: 'stripe',
  };
  

  if(isError){
    return(
      <>
            <NavBarStatic className='sticky-top'/>
            <Switch>
              <Route path='/signup'>
                {/* <NavBarStatic fluid className='sticky-top' style={{zIndex: 2, position: 'absolute', top:0}}/> */}
                <Container fluid style={{height: '95vh', position:"relative", padding: '0px', zIndex:1}}>
                    <Container className="col-md-8 col-lg-6 col-sm-10" style={{position:"absolute", left: "50%", top:"50%", transform: "translate(-50%, -50%)"}}>
                      <SignUpComponent />
                    </Container>
                </Container>
              </Route>
              <Route path='/'>
                <Container className="col-md-8 col-lg-6 col-sm-10" style={{height: '95vh', position: 'relative'}}>
                  <Container className='headline'>
                    <h1>Welcome to HabitBuilder</h1>
                    <h2>A journey to good reading habits informed by best practices ...</h2>
                  </Container>
                  <Container style={{position:"absolute", top:"50%", transform: "translateY(-50%)"}}>
                    <SignInComponent />
                  </Container>
                </Container>
                <Container fluid style={{height: "95vh", backgroundColor: 'var(--dark-blue)', color: "#f0f0f0", position: 'relative'}}>
                  <Container className="col-md-8 col-lg-6 col-sm-10 pt-3">
                      <div className="about-header">What is HabitBuilder?</div>
                      <Container>
                      <Carousel fade interval={null}>
                        <CarouselItem className="aboutCarouselItem">
                            <h2>An opinionated habit tracker focused on consistent, small wins</h2>
                            <ul>
                                <li>Receive a daily reading challenge</li>
                                <li>Time yourself from within the app</li>
                                <li>Earn points for completing challenges</li>
                                <li>Partner with others for social accountability</li>
                                <li>Post intentions to help stack a new habit onto existig ones</li>
                            </ul>
                        </CarouselItem>
                        <CarouselItem className="aboutCarouselItem">
                          Item 2
                        </CarouselItem>
                        <CarouselItem className="aboutCarouselItem">
                          Item 3
                        </CarouselItem>
                      </Carousel>
                      </Container>
                  </Container>
                </Container>
              </Route>
            </Switch>
      </>
    )  
  }
  
  return (
    
      <div className="App">
      <Container fluid="true" >

        {/* {clientSecret &&  */}
        {/* <Elements stripe={stripePromise} options={options}> */}
          <NavBar />
          <Container className="col-md-8 col-lg-6 col-sm-10">
          <Switch>
            {/* <Route exact path='/'>
              <LandingPage />
            </Route> */}
            {/* <Route exact path="/signin">
              <SignInComponent />
            </Route>*/}
            <Route exact path="/signup">
              <SignUpComponent />
            </Route> 
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/timer'>
              <Timer seconds={10}/>
            </Route>
            <Route path='/test'>
              <Flow />
            </Route>
            <Route exact path='/checkout'>
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
            <Route exact path='/confirmation'>
              <Elements stripe={stripePromise}>
                <CheckoutConfirmation />
              </Elements>
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