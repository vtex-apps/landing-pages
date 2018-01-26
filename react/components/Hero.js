import React, { Component } from "react";
import PropTypes from "prop-types";

class Hero extends Component {
  render() {
    return (
      <div
        className="hero pv5"
        style={{
          backgroundColor: "#F71963",
          color: "white",
          textAlign: "center"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hero;
