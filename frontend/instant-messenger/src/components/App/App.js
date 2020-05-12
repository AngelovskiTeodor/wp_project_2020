import React from 'react';

//  Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//  Components
import Login from '../Login/Login'
import ChatRoom from '../ChatRoom/ChatRoom';

//  CSS
import './App.css';
import './main.css';

//  img
import logo from './logo.svg';

function App() {
  return (
    <Router>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> 
      </div> */}
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chatRoom">
            <ChatRoom />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.4/sockjs.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
      </div>
    </Router>
  );
}

export default App;
