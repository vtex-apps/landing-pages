import React, { Component } from "react"; // eslint-disable-next-line
import PropTypes from "prop-types";

import decisionMatrix from "./assets/images/Brand_Decision_Matrix.jpg";

import CenteredContent from "./components/CenteredContent";
import FullWidth from "./components/FullWidth";
import CoolTwoColumns from "./components/CoolTwoColumns";
import SemiCoolTwoColumns from "./components/SemiCoolTwoColumns";
import Downloads from "./components/Downloads";

class DecisionMatrix extends Component {
  render() {
    return (
      <div className="ml7-l mb5-l mb6">
        <FullWidth id="intro-video">
          <img
            className="center self-center pt4 pt0-ns"
            src={decisionMatrix}
            alt="Brand decision matrix"
          />
        </FullWidth>
      </div>
    );
  }
}

DecisionMatrix.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired
};

export default DecisionMatrix;
