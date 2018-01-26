import React, { Component } from "react";
import PropTypes from "prop-types";

class SemiCoolTwoColumns extends Component {
  render() {
    const { title, firstColumn, secondColumn } = this.props;

    return (
      <div className="w-90 center pt5">
        <div className="w-70-l center flex flex-column flex-row-ns">
          <div className="w-50-ns">
            <h4 className="mt0">{title}</h4>
            {firstColumn}
          </div>

          <div className="w-10" />

          <div className="w-50-ns flex">{secondColumn}</div>
        </div>
      </div>
    );
  }
}

SemiCoolTwoColumns.propTypes = {
  title: PropTypes.string.isRequired,
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node.isRequired
};

export default SemiCoolTwoColumns;
