import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import SignInForm from "./components/SignInForm";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      {/* <h1>Page Count: {count}</h1> */}
      <NavBar />
      <Switch>
        <Route exact path="/signin">
          <SignInForm />
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
