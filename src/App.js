import React,{useState} from "react";
import {
  HashRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { Header } from "./Header";
import { External } from "./External";
import { LoginAndOut } from "./LoginAndOut";
import { Admin } from "./Admin";

export default App;

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const setLoginStatus = status => {
    setIsLoggedIn(status);
  }

  return (
    <Router>
      <div>
        <Header
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
        />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/external">
            <External />
          </Route>
          <Route path="/admin-page">
            <Admin />
          </Route>
          <Route path="/login-out">
            <LoginAndOut 
             loginMsg={isLoggedIn ? "Logout" : "Login"}
             isLoggedIn={isLoggedIn}
             setLoginStatus={setLoginStatus}
            />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home - Cahit</h1>
      
      <h3>Reflections concerning the startcode:</h3>
      <hr/>
      <p style={{width:700}}>
        The overall problem I find using the startcode is related to the fact that it depends upon a lot of small 
        'tasks' in order to run/function smoothly. And in order to overcome this problem you indeed need to have some 
        experience setting up the pipeline. Something you can only gain by continiously practicing the set-up procedures 
        for the startcode. 
     </p>
    <p style={{width:700}}>
      Especially travis has generated some problems and also some concerns for me because of the fact that, often, it 
      is SOOO easy to forget or not pay attention to the details ... Yes the devil lies in the detail:).
    </p>
    <p style={{width:700}}>
      Personally, I have benefitted significantly from your 'video-recordings' and I would have wished that 
      the procedures relating to the startcode had been recorded as well. It would, in my opinion, make it much easier for 
      me (and maybe also my fellow students) to set up the pipeline. Nevertheless, practice makes perfect:).
    </p>

    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>How did you get here? You shouldn't be here..</h2>
    </div>
  )
}