import React from "react";
import Quote from "./Components/Quote";
import Nav from "./Components/Nav";
import "./App.css";
import data from "./data/Data";

function App() {
  return (
    <>
      <Nav />
      {
        data.map((item) => {
          return <Quote content={item.quote} auth={item.author} />
        })
      }
    </>
  )
}

export default App;
