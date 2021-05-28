import "./App.css";
import Header from "./components/header";
import TopicsNav from "./components/topicsnav";
// import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/user";
import Articles from "./components/articles";
import Topic from "./components/topic";

function App() {
  const [user, setUser] = useState({
    username: "defaultuser",
    avatar_url:
      "https://thumbs.dreamstime.com/b/avatar-icon-black-round-avatar-flat-symbol-isolated-white-background-avatar-simple-icon-avatar-abstract-icon-black-vector-124920467.jpg",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Router>
          <Header />
          <TopicsNav />
          <Switch>
            <Route exact path="/">
              <Articles />
            </Route>
            <Route exact path="/topics/:topic">
              <Topic />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
