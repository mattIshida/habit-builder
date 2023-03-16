import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  function handleLogout(e){
    fetch('/logout', {method: "DELETE"})
    .then(r => {
      console.log("user logged out", r.ok)
      setUser({})
    })
  }

  return (
    <div className="App">
      {/* <h1>Page Count: {count}</h1> */}
      <NavBar handleLogout={handleLogout}/>
      <Switch>
        <Route exact path="/signin">
          <SignInComponent setUser={setUser}/>
        </Route>
        <Route exact path="/signup">
          <SignUpComponent setUser={setUser}/>
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
