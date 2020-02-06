import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
        />
        <p>Meme Generator</p>
      </header>
    );
  }
}

export default Header;
