import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Copyright © {new Date().getFullYear()} {this.props.title}
        </p>
      </footer>
    );
  }
}

export default Footer;
