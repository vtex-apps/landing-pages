import React, { Component } from "react";
import PropTypes from "prop-types";

class CenteredContent extends Component {
  render() {
    return (
      <div id={this.props.id} className="w-90 w-60-m w-40-l center tc pt5">
        {this.props.children}
      </div>
    );
  }
}

CenteredContent.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
};

export default CenteredContent;
