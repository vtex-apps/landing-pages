import React, { Component } from "react";
import PropTypes from "prop-types";

import wrong from "./assets/images/never.svg";
import correct from "./assets/images/always.svg";
import gridSystem from "./assets/images/grid-simple.png";
// import animationRectangles from "./assets/images/animacao_baloes.gif";

import CenteredContent from "./components/CenteredContent";
import FullWidth from "./components/FullWidth";
import CoolTwoColumns from "./components/CoolTwoColumns";
import SemiCoolTwoColumns from "./components/SemiCoolTwoColumns";
import Downloads from "./components/Downloads";

class GraphicSystem extends Component {
  render() {
    return (
      <div className="ml7-l mb5-l mb6">
        <CenteredContent id="logo">
          <h2 id="graphic-system">Graphic System</h2>
          <p>
            Everything in our brand identity is based on intersections. The
            central idea that VTEX generates encounters and make them valuable
            is core to our communications. The graphic system is made to fit the
            needs of several manifestations that our brand demands. Watch the
            following introductory film.
          </p>
        </CenteredContent>

        <FullWidth id="intro-video">
          <iframe
            className="w-90 vh-25 vh-50-ns vh-75-l bn"
            src="https://www.youtube.com/embed/DXxPFMoYMnU"
            allowfullscreen
          />
        </FullWidth>

        <CoolTwoColumns
          title="Grid System"
          id="grid-system"
          firstColumn={
            <div>
              <p>
                Our graphic system was created to fit every communication needs
                that we might have. It's goal is to clarify and simplify the
                information and as you can notice in the next section it was
                based on a conversational logic where dialogs are short and
                objective. But it have a wide range of possibilities.
              </p>
              <p>
                It can contract and expand in boxes that might (or not)
                intersect with each other. The system moves toward the union of
                everyone that somehow connects with VTEX making a throughful use
                of the intersection to express it's intent.
              </p>
            </div>
          }
          secondColumn={
            <img
              className="center self-center pt4 pt0-ns"
              src={animationRectangles}
              alt="Rectangles animation"
            />
          }
        />

        <CoolTwoColumns
          title="Simple Grid"
          id="simple-grid"
          firstColumn={
            <div>
              <p>
                The simplest manifestation of this grid system is based on the
                idea of creating a conversation through the use of graphic
                elements that forces us to simplify the textual message and make
                the message clearer and easier to read.
              </p>
              <p>
                Here on this image aside, you can see an example of this simple
                grid blueprint, respecting the color usage and using an adequate
                image to make the point. Note that all rectangles have an
                central alignment that guides the eye of the viewer through the
                conversation.
              </p>
            </div>
          }
          secondColumn={
            <img
              className="center self-center pt4 pt0-ns"
              src={gridSystem}
              alt="Signature Blueprint"
            />
          }
        />

        <CoolTwoColumns
          title="Border Radius"
          id="border-radius"
          firstColumn={
            <div>
              <p>
                To keep consistency is very important that all elements of the
                system stay true to their nature. The nature of the box is to
                have a balanced border radius, that's not too rounded or
                squared, but somewhere between those two variations. Here you
                can feel the difference of what is this balance and must use
                these as reference when creating boxes.
              </p>
            </div>
          }
          secondColumn={
            <div className="center self-center w-80">
              <div className="flex">
                <img src={wrong} alt="wrong icon" />
                <h4 className="w-100 ml3 pv4 br4 fw4 self-center bg-black" />
              </div>
              <div className="flex">
                <img src={correct} alt="correct icon" />
                <h4 className="w-100 ml3 pv4 br3 fw4 self-center bg-black" />
              </div>
              <div className="flex">
                <img src={wrong} alt="wrong icon" />
                <h4 className="w-100 ml3 pv4 br2 fw4 self-center bg-black" />
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default GraphicSystem;
