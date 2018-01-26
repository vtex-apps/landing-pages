import React, { Component } from "react"; // eslint-disable-next-line
import { BASE_URL, ARCHITECTURE } from "./constants";

import CenteredContent from "./components/CenteredContent";

class Architecture extends Component {
  render() {
    return (
      <div className="mb6">
        <CenteredContent id="logo">
          <h2 id="graphic-system">Brand architecture</h2>
          <p>
            The creation of new expressions of our main brand is always an
            strategic decision. When it comes to create a new signature,
            product, event or anything that goes along with our brand, the
            decision must be thoughtful. The goal of having a good brand
            architecture is to ensure consistency. Everytime you think 'I need a
            brand', breathe. Then come here, check the rules and carefully
            choose a path, if a brand is what you really need.
          </p>

          <h3 className="f4 pt4">
            <a href={`${BASE_URL}${ARCHITECTURE}/decision-matrix`} />Check the
            Brand Decision Matrix if you think you need a brand
          </h3>
        </CenteredContent>
      </div>
    );
  }
}

export default Architecture;
