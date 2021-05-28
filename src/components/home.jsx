import React from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <main>
      <h1>Hello {user.username} </h1>
      <p>This is a test home page for nc-news </p>
    </main>
  );
};

export default Home;
