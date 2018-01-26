import React, { Component } from "react";
import PropTypes from "prop-types";

class CoolTwoColumns extends Component {
  render() {
    const { title, firstColumn, secondColumn, id } = this.props;

    return (
      <div className="w-90 center pt6" id={id}>
        <div className="w-70-l center flex flex-column flex-row-ns">
          <div className="w-50-ns">
            <h3 className="mt0">{title}</h3>
            {firstColumn}
          </div>

          <div className="w-10" />

          <div className="w-40-ns flex center self-center pt4 pt0-ns">
            {secondColumn}
          </div>
        </div>
      </div>
    );
  }
}

CoolTwoColumns.propTypes = {
  title: PropTypes.string.isRequired,
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
};

export default CoolTwoColumns;
