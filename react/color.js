import React, { Component } from "react";
import PropTypes from "prop-types";

import logo from "./assets/images/VTEX_pink_RGB.svg";
import icon from "./assets/images/VTEX_icon_pink_RGB.svg";
import wrong from "./assets/images/never.svg";
import sometimes from "./assets/images/sometimes.svg";
import correct from "./assets/images/always.svg";
import gradient from "./assets/images/gradient.svg";
import badContrast from "./assets/images/contrast.svg";
import colorwheel from "./assets/images/color-wheel.png";
import colorRatio from "./assets/images/color_usage_ratio.svg";
import mockupWhitespace from "./assets/images/mockup_whitespace.png";
import rectangleColor from "./assets/images/rectangle_color_usage.svg";

import Hero from "./components/Hero";
import ColorBox from "./components/ColorBox";
import CenteredContent from "./components/CenteredContent";
import CoolTwoColumns from "./components/CoolTwoColumns";
import SemiCoolTwoColumns from "./components/SemiCoolTwoColumns";
import Downloads from "./components/Downloads";

class Color extends Component {
  render() {
    return (
      <div className="ml7-l mb5-l mb6">
        <CoolTwoColumns
          title="Color"
          id="color"
          firstColumn={
            <div>
              <p>
                Color is a brand’s fundamental expression tool. It helps to set
                the mood or the feeling, while bringing our brand to life. We
                use it with balance and simplicity to achieve a consistent
                system and left some space to play with color highlights and
                contrasts. The colors must be used with our principles and
                personality traits in mind.
              </p>
            </div>
          }
          secondColumn={
            <div className="center self-center">
              <img src={colorwheel} alt="color wheel" />
            </div>
          }
        />

        <CoolTwoColumns
          title="Color palette"
          id="palette"
          firstColumn={
            <div>
              <p>
                In terms of palette, the digital world is pretty boring: most of
                the brands are gray or blue. We mutiny against this boredom and
                set ourselves appart from everyone else through color: we’re
                pink.
              </p>
            </div>
          }
          secondColumn={
            <div className="w-100 pt5 pt0-ns">
              <ColorBox
                name="Rebel Pink"
                hex="#F71963"
                pantone="Rubine Red"
                rgb={[247, 25, 99]}
                cmyk={[0, 100, 45, 0]}
              />

              <ColorBox
                name="Serious Black"
                hex="#142032"
                pantone="296 C"
                rgb={[20, 32, 50]}
                cmyk={[90, 80, 50, 60]}
              />

              <ColorBox
                light
                name="Cold Gray"
                hex="#D6D8E0"
                pantone="538 C"
                rgb={[214, 215, 50]}
                cmyk={[5, 2, 0, 15]}
              />

              <ColorBox
                light
                withBorder
                name="Plain White"
                hex="#FFFFFF"
                rgb={[255, 255, 255]}
                cmyk={[0, 0, 0, 0]}
              />

              <ColorBox
                name="Young Blue"
                hex="#00BBD4"
                pantone="3115 C"
                rgb={[0, 187, 212]}
                cmyk={[70, 0, 15, 0]}
              />

              {/* <ColorBox
                name="Elite Purple"
                hex="#8914CC"
                pantone="2602 C"
                rgb={[137, 20, 204]}
                cmyk={[70, 95, 0, 0]}
              /> */}
            </div>
          }
        />

        <CoolTwoColumns
          title="Usage Ratio"
          id="color-usage-ratio"
          firstColumn={
            <div>
              <p>
                <b>(1)</b> Rebel Pink is the main color and what identifies
                VTEX. Must be always present in all communication
              </p>
              <p>
                <b>(2)</b> White is our second color. It has the role of
                balancing Pink's rebellion with the authority and elite that a
                light and clean communication brings to our brand – as described
                in the segment "White Space"
              </p>
              <p>
                <b>(3)</b> At the third level of hierarchy, the Serious Black is
                our contrast color, the darker tone in the pallete.
              </p>
              <p>
                <b>(4)</b> Cold Gray is a support color, used as an overtone to
                the white.
              </p>
            </div>
          }
          secondColumn={
            <img
              className="w-100 center self-center pt4 pt0-ns"
              src={colorRatio}
              alt="Margins"
            />
          }
        />

        <CoolTwoColumns
          title="White Space"
          id="white-space"
          firstColumn={
            <div>
              <p>
                To guarantee that even with the rebelliousness of our Pink the
                brand is perceived as authority - elite in its segment, is the
                purpose of our communication. Well balanced parts, with a simple
                and direct message are the way to conquer this perception. For
                this, the use of whitespace, free of noise or information, is
                fundamental.
              </p>
              <p>
                Communications should maintain a minimum of clean area with no
                information.
              </p>
              <p>
                The brand must respect its margin of protection, as well as the
                use of the tagline.
              </p>
              <p>
                The photographic standard was designed to guarantee this
                balance, ensuring that even with large photos the free areas
                remain
              </p>
            </div>
          }
          secondColumn={
            <img
              className="w-100 center self-center pt4 pt0-ns"
              src={mockupWhitespace}
              alt="Margins"
            />
          }
        />

        <CoolTwoColumns
          title="Rectangles Color Usage"
          id="rectangles-color"
          firstColumn={
            <div>
              <p>
                The pink should be used in the balloon of the most important
                information whenever possible.
              </p>
              <p>
                The logo should not be applied inside a balloon wherever
                possible.
              </p>
              <p>
                One of the balloons should always have a light background (white
                or gray)
              </p>
              <p>
                The color of the intersection can not be the same color as the
                background.
              </p>
            </div>
          }
          secondColumn={
            <img
              className="w-100 center self-center pt4 pt0-ns"
              src={rectangleColor}
              alt="Margins"
            />
          }
        />

        <CoolTwoColumns
          title="Color crimes"
          id="color-crimes"
          firstColumn={
            <div>
              <p>
                It’s not always obvious how to use colors and match them to get
                eye-candy results. If you’re not a color expert, avoid doing
                this things and you might be good.
              </p>

              <h5>Usage</h5>
              <ul className="pl0">
                <li className="flex flex-row pl0 pb3">
                  <img src={wrong} alt="wrong icon" />
                  <span className="self-center pl3">Don't use gradient</span>
                </li>
                <li className="flex flex-row pl0 pb3">
                  <img src={wrong} alt="wrong icon" />
                  <span className="self-center pl3">
                    Don't use bad contrast
                  </span>
                </li>
              </ul>
            </div>
          }
          secondColumn={
            <div className="w-60 w-100-ns self-center">
              <div className="flex">
                <img src={gradient} alt="no gradients" />
                <h5 className="self-center pl3">gradient</h5>
              </div>
              <div className="flex">
                <img src={badContrast} alt="no gradients" />
                <h5 className="self-center pl3">bad contrast</h5>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default Color;
