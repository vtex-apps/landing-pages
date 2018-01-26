import React, { Component } from "react";
import PropTypes from "prop-types";

class FullWidth extends Component {
  render() {
    return (
      <div id={this.props.id} className="w-100 center tc pt5">
        {this.props.children}
      </div>
    );
  }
}

FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
};

export default FullWidth;
