import React, { Component } from "react";
import PropTypes from "prop-types";

class Downloads extends Component {
  render() {
    const {
      title,
      firstColumn,
      secondColumn,
      thirdColumn,
      fourthColumn,
      titleId
    } = this.props;

    return (
      <div className="w-90 center pv5">
        <div className=" center flex flex-column flex-row-ns">
          <div className="w-50-ns">
            <h4 className="mt0" id={titleId}>
              {title}
            </h4>
            {firstColumn}
          </div>

          <div className="w-10" />

          <div className="w-50-ns flex">{secondColumn}</div>

          <div className="w-10" />

          <div className="w-50-ns flex">{thirdColumn}</div>

          <div className="w-10" />

          <div className="w-50-ns flex">{fourthColumn}</div>
        </div>
      </div>
    );
  }
}

Downloads.propTypes = {
  title: PropTypes.string.isRequired,
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node.isRequired,
  thirdColumn: PropTypes.node.isRequired,
  fourthColumn: PropTypes.node
};

export default Downloads;
