import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import LandingPage from "./components/LandingPage"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useAutoLogInQuery } from './app/services/userAPI'

function App() {
  const history = useHistory()
  const {data, 
    isLoading,
    isSuccess,
    isError,
    error} = useAutoLogInQuery()
  console.log(data)

  let content

  if(isSuccess){
    history.push('/home')
  }
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path="/signin">
          <SignInComponent />
        </Route>
        <Route exact path="/signup">
          <SignUpComponent />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>      
    </div>
  );
}

export default App;