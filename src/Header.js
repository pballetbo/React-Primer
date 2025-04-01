import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Inici</a>
            </li>
            <li>
              <a href="#">Sobre nosaltres</a>
            </li>
            <li>
              <a href="#">Contacte</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
