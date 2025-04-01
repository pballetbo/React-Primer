import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Disseny d'Aplicacions Web" />
        <Main title="Aplicació de React.js" />
        <Footer title="IOC- DAW - M9" />
      </div>
    );
  }
}

export default App;
