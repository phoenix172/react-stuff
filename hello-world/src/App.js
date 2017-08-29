import React, { Component } from "react";
import "./App.css";
import Quoter from "./Quoter.js";

class App extends Component {
  render() {
    return (
      <Quoter
        quotes={[
          {
            text:
              "Two men looked out from prison bars. One saw the mud, the other saw the stars."
          },
          {
            text: "Be yourself; everyone else is already taken",
            author: "Oscar Wilde"
          },
          { text: "Underpromise and overdeliver", author: "Unknown" }
        ]}
      />
    );
  }

  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }
}

export default App;
