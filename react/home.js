import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import Hero from "./components/Hero";

class Home extends Component {
  translate = id => this.props.intl.formatMessage({ id: `home.${id}` });

  render() {
    return (
      <div>
        <Hero>
          <h1 className="fw6 f1 mt0">{this.translate("welcome")}</h1>
          <h2 className="fw2 f3 f2-ns">{this.translate("vtexBrandLand")}</h2>
          <p className="center w-50-m w-20-l pb4">
            {this.translate("explore")}
          </p>
        </Hero>

        <div className="center w-90 w-60-m w-60-l mb6">
          <div className="pt5">
            <h2 id="what-is-this">{this.translate("whatIsThis")}</h2>
            <p>{this.translate("whatIsThis.paragraph1")}</p>
            <p>{this.translate("whatIsThis.paragraph2")}</p>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  intl: intlShape
};

export default injectIntl(Home);
