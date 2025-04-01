import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main>
        <h2>Benvingut a {this.props.title}</h2>
        <p>Aquesta és la pàgina principal de l'aplicació.</p>
      </main>
    );
  }
}

export default Main;
