import React, { Component } from "react"; // eslint-disable-next-line
import PropTypes from "prop-types";

import CenteredContent from "./components/CenteredContent";
import CoolTwoColumns from "./components/CoolTwoColumns";
import SemiCoolTwoColumns from "./components/SemiCoolTwoColumns";
import Downloads from "./components/Downloads";

import print from "./assets/images/print.svg";
import logo from "./assets/images/VTEX_pink_RGB.svg";
import icon from "./assets/images/VTEX_icon_pink_RGB.svg";
import wrong from "./assets/images/never.svg";
import sometimes from "./assets/images/sometimes.svg";
import correct from "./assets/images/always.svg";
import iconBlueprint from "./assets/images/icon_construction.svg";
import digital from "./assets/images/screen.svg";
import folder from "./assets/images/folder.svg";
import avatar from "./assets/images/avatar.svg";
import bundle from "./assets/images/bundle.svg";
import chest from "./assets/images/chest.svg";
import margins from "./assets/images/margins.svg";
import signatureBlueprint from "./assets/images/signature.svg";
import avatarExample from "./assets/images/avatar-example.svg";

class Identity extends Component {
  translate = id => this.props.intl.formatMessage({ id: `home.${id}` });

  render() {
    return (
      <div>
        <CenteredContent id="logo">
          <h2 id="logo">Logo</h2>
          <p>
            The logo is the core of the brand system. It's role is to express
            everything we stand for and believe in––without words. In order to
            do so, the logo represent our principles and our personality while
            being unique and recognizable.
          </p>
        </CenteredContent>

        <CoolTwoColumns
          title="Concept"
          id="concept"
          firstColumn={
            <div>
              <p>
                VTEX is an organism that enables sum, trade and encounters while
                creating value. This core concept serves as a foundation to
                expand VTEX’s experience across all communications, products and
                touch points with our audiences.
              </p>
            </div>
          }
          secondColumn={
            <div className="self-center">
              <img className="w-100" src={logo} alt="VTEX Logo" />
            </div>
          }
        />

        <CoolTwoColumns
          title="Structure"
          id="structure"
          firstColumn={
            <div>
              <p>
                VTEX logo is made out of two elements: the icon and the
                lettering.
              </p>
              <h5 className="pt3">Usage</h5>
              <ul className="pl0">
                <li className="flex flex-row pl0 pb3">
                  <img src={wrong} alt="wrong icon" />
                  <span className="self-center pl3">Just the lettering</span>
                </li>
                <li className="flex flex-row pl0 pb3">
                  <img src={sometimes} alt="attention icon" />
                  <span className="self-center pl3">Just the icon</span>
                </li>
                <li className="flex flex-row pl0 pb3">
                  <img src={correct} alt="correct icon" />
                  <span className="self-center pl3">Icon and lettering</span>
                </li>
              </ul>
            </div>
          }
          secondColumn={
            <div className="self-center">
              <div className="w-80 center">
                <div className="pb2 mb3 bb b--light-gray">Logo</div>
                <div className="flex">
                  <div className="w-40 center pb2 bb b--light-gray">Icon</div>
                  <div className="w-50 center pb2 bb b--light-gray">
                    Lettering
                  </div>
                </div>
              </div>
              <img className="w-100" src={logo} alt="VTEX Logo" />
            </div>
          }
        />

        <CoolTwoColumns
          title="Icon"
          id="icon"
          firstColumn={
            <div>
              <p>
                Understanding that the whole is greater than the sum of its
                parts, we can find in the icon this idea graphically represented
                by the intersection between two triangular shapes. The form,
                based on our initial letter, comes with a whole set of
                possibilities to explore new intersections, sums and shapes.
              </p>
            </div>
          }
          secondColumn={
            <img
              className="center self-center pt4 pt0-ns"
              src={iconBlueprint}
              alt="Icon Blueprint"
            />
          }
        />

        <SemiCoolTwoColumns
          title="Icon usage"
          id="icon-usage"
          firstColumn={
            <div>
              <p>
                The icon represents our core, but it's a young symbol yet. The
                day will come when it will be widely known through the seven
                continents and celebrated in many cultures and languages that a
                lettering will no longer be necessary to associate it with VTEX.
              </p>
              <p>
                But, truth be said, it will take a while. And until the time
                comes, we use it only along with the lettering and/or when VTEX
                is written aside, in cases as social media avatars.
              </p>
              <h5 className="pt3">Usage</h5>
              <ul className="pl0">
                <li className="flex flex-row pl0 pb3">
                  <img src={wrong} alt="wrong icon" />
                  <span className="self-center pl3">
                    Never use it without the lettering
                  </span>
                </li>
                <li className="flex flex-row pl0 pb3">
                  <img src={wrong} alt="attention icon" />
                  <span className="self-center pl3">Never use it alone</span>
                </li>
                <li className="flex flex-row pl0 pb3">
                  <img src={correct} alt="correct icon" />
                  <span className="self-center pl3">
                    In social media avatars
                  </span>
                </li>
              </ul>
            </div>
          }
          secondColumn={
            <img
              className="center self-center pt4 pt0-ns"
              src={avatarExample}
              alt="Icon usage as avatar"
            />
          }
        />

        <CoolTwoColumns
          title="Writing"
          id="writing"
          firstColumn={
            <div>
              <p>
                VTEX is always written with ALL CAPS. It's very common to see it
                written in a wide range of variations but know this: all of them
                are wrong. We all have the duty to look after our company name
                so every time you see VTEX written in a wrong way, raise your
                hand and/or change it!
              </p>
              <p>
                Also, pay attention to this (not so) little detail when you are
                typing.
              </p>

              <h5>Usage</h5>
              <ul className="pl0">
                <li className="flex flex-row pl0 pb3">
                  <img src={wrong} alt="wrong icon" />
                  <span className="self-center pl3">Small caps</span>
                </li>
                <li className="flex flex-row pl0 pb3">
                  <img src={wrong} alt="wrong icon" />
                  <span className="self-center pl3">Crazy caps</span>
                </li>
                <li className="flex flex-row pl0 pb3">
                  <img src={correct} alt="correct icon" />
                  <span className="self-center pl3">All caps</span>
                </li>
              </ul>
            </div>
          }
          secondColumn={
            <div className="center self-center">
              <div className="flex">
                <img src={wrong} alt="wrong icon" />
                <h4 className="pl3 fw4 self-center">vtex</h4>
              </div>
              <div className="flex">
                <img src={wrong} alt="wrong icon" />
                <h4 className="pl3 fw4 self-center">Vtex</h4>
              </div>
              <div className="flex">
                <img src={wrong} alt="wrong icon" />
                <h4 className="pl3 fw4 self-center">VteX</h4>
              </div>
              <div className="flex">
                <img src={correct} alt="correct icon" />
                <h4 className="pl3 fw4 self-center">VTEX</h4>
              </div>
            </div>
          }
        />

        <CoolTwoColumns
          title="Margins"
          id="margins"
          firstColumn={
            <div>
              <p>
                When a logo goes outside to the real world, it needs space to
                breathe and shine to look at it’s best. This is why we establish
                a security margin, based on the logo itself, that enables it to
                have the space it needs.
              </p>
              <p>
                In our case the reference measure is the vertical axis of the
                intersection triangle. Every other visual element must be placed
                beyond this margin size, in every application.
              </p>
            </div>
          }
          secondColumn={
            <img
              className="center self-center pt4 pt0-ns"
              src={margins}
              alt="Margins"
            />
          }
        />

        <CoolTwoColumns
          title="Reduction"
          id="reduction"
          firstColumn={
            <div>
              <p>
                Considering a broad range of usage, the logo will have some big
                applications, as well as tiny ones. In the first case there are
                no rules of scale, it can go as big as we want (respecting the
                other rules, of course) but when we go small, it requires some
                atention.
              </p>
              <p>
                For example, when we are printing it the ink might leak or be
                absorbed by the surface and modify the legibility. In digital
                applications the display definition can also make it unreadable.
                This is why we defined the minimum sizes for the logo, both in
                pixels (digital) and centimeters (print).
              </p>
            </div>
          }
          secondColumn={
            <div className="self-center">
              <div className="w-40 center">
                <div className="w-80 center pb2 mb1 mr0 bb b--light-gray">
                  60px
                </div>
                <img className="w-100 center" src={logo} alt="VTEX Logo" />
              </div>
              <div className="w-40 center mt3">
                <div className="w-80 center pb2 mb1 mr0 bb b--light-gray">
                  1cm
                </div>
                <img className="w-100 center" src={logo} alt="VTEX Logo" />
              </div>
            </div>
          }
        />

        <CoolTwoColumns
          title="Signature Rules"
          id="signature-rules"
          firstColumn={
            <div>
              <p>
                As a brand we have a few manifestations, according to our
                architecture. The signature is the default brand choice for
                almost everything we communicate.
              </p>
              <p>
                To make it consistent the following structure must be used. The
                reference measure is the vertical axis of the intersection
                triangle, the x of our blueprint.
              </p>
              <p>The type used is Fabriga Medium.</p>
            </div>
          }
          secondColumn={
            <img
              className="center self-center pt4 pt0-ns"
              src={signatureBlueprint}
              alt="Signature Blueprint"
            />
          }
        />

        <CenteredContent id="downloads">
          <h2>Downloads</h2>
          <p>
            Above you can find a few guidelines for using our brand resources.
            Please take a moment to familiarize yourself with them before
            getting your hands dirty.
          </p>
          <p>
            Each zip contains all colors, versions, formats and sizes you’ll
            need for each application.
          </p>
        </CenteredContent>

        <Downloads
          title="Full Logo"
          firstColumn={
            <div className="flex flex-column tl">
              <img className="w-80 nl3" src={logo} alt="VTEX full logo" />
              <div>
                <ul className="pl0">
                  <li className="flex flex-row pl0 pb3">
                    <img src={correct} alt="correct icon" />
                    <span className="self-center pl3">
                      Files with and without trademark
                    </span>
                  </li>
                  <li className="flex flex-row pl0 pb3">
                    <img src={correct} alt="correct icon" />
                    <span className="self-center pl3">
                      Vector and image files
                    </span>
                  </li>
                  <li className="flex flex-row pl0 pb3">
                    <img src={correct} alt="correct icon" />
                    <span className="self-center pl3">
                      Branding colors-ready
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
          secondColumn={
            <div className="w-100 center mt4 mt0-ns">
              <h5 className="mv0">Print</h5>
              <div className="ba b--light-gray w-100 mt4 pv3 tc">
                <img className="w-40 h4" src={print} alt="print icon" />
              </div>
              <a
                href="https://drive.google.com/a/vtex.com.br/uc?authuser=0&id=0BzOGumK-fxFJU2oyZC1lVUNxUkk&export=download"
                className="button-link link w-100 mt4 pointer"
              >
                Download
              </a>
            </div>
          }
          thirdColumn={
            <div className="w-100 center mt4 mt0-ns">
              <h5 className="mv0">Screen</h5>
              <div className="ba b--light-gray w-100 mt4 pv3 tc">
                <img
                  className="w-40 h4"
                  src={digital}
                  alt="computer screen and cellphone icons"
                />
              </div>
              <a
                href="https://drive.google.com/a/vtex.com.br/uc?authuser=0&id=0BzOGumK-fxFJd3hJNnhKU1VBN28&export=download"
                className="button-link link w-100 mt4 pointer"
              >
                Download
              </a>
            </div>
          }
          fourthColumn={
            <div className="w-100 center mt4 mt0-ns">
              <h5 className="mv0">All</h5>
              <div className="ba b--light-gray w-100 mt4 pv3 tc">
                <img
                  className="w-40 h4"
                  src={folder}
                  alt="computer folder icon"
                />
              </div>
              <a
                href="https://drive.google.com/a/vtex.com.br/uc?authuser=0&id=0BzOGumK-fxFJOWpOalQ2UGMyOEk&export=download"
                className="button-link link w-100 mt4 pointer"
              >
                Download
              </a>
            </div>
          }
        />

        <Downloads
          title="Just the icon"
          firstColumn={
            <div className="flex flex-column tl">
              <img className="w-50 nl3" src={icon} alt="VTEX icon" />
              <div>
                <ul className="pl0">
                  <li className="flex flex-row pl0 pb3">
                    <img src={correct} alt="correct icon" />
                    <span className="self-center pl3">
                      Vector and image files
                    </span>
                  </li>
                  <li className="flex flex-row pl0 pb3">
                    <img src={correct} alt="correct icon" />
                    <span className="self-center pl3">
                      Branding colors-ready
                    </span>
                  </li>
                  <li className="flex flex-row pl0 pb3">
                    <img src={wrong} alt="incorrect icon" />
                    <span className="self-center pl3">
                      Social media avatars
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
          secondColumn={
            <div className="w-100 center mt4 mt0-ns">
              <h5 className="mv0">Print</h5>
              <div className="ba b--light-gray w-100 mt4 pv3 tc">
                <img className="w-40 h4" src={print} alt="print icon" />
              </div>
              <a
                href="https://drive.google.com/a/vtex.com.br/uc?authuser=0&id=0BzOGumK-fxFJRGp0ODc0cXNlb2s&export=download"
                className="button-link link w-100 mt4 pointer"
              >
                Download
              </a>
            </div>
          }
          thirdColumn={
            <div className="w-100 center mt4 mt0-ns">
              <h5 className="mv0">Screen</h5>
              <div className="ba b--light-gray w-100 mt4 pv3 tc">
                <img
                  className="w-40 h4"
                  src={digital}
                  alt="computer screen and cellphone icons"
                />
              </div>
              <a
                href="https://drive.google.com/a/vtex.com.br/uc?authuser=0&id=0BzOGumK-fxFJTEZwQlM4XzVIS0U&export=download"
                className="button-link link w-100 mt4 pointer"
              >
                Download
              </a>
            </div>
          }
          fourthColumn={
            <div className="w-100 center mt4 mt0-ns">
              <h5 className="mv0">All</h5>
              <div className="ba b--light-gray w-100 mt4 pv3 tc">
                <img
                  className="w-40 h4"
                  src={folder}
                  alt="computer folder icon"
                />
              </div>
              <a
                href="https://drive.google.com/a/vtex.com.br/uc?authuser=0&id=0BzOGumK-fxFJV3RCdjlRUHRlRGs&export=download"
                className="button-link link w-100 mt4 pointer"
              >
                Download
              </a>
            </div>
          }
        />

        <Downloads
          title="Other bundles"
          firstColumn={
            <div className="flex flex-column tl">
              <img className="w-40 h4" src={bundle} alt="box icon" />
              <p>Collection of practical bundles for specific brand needs.</p>
            </div>
          }
          secondColumn={
            <div className="w-100 center mt4 mt0-ns">
              <h5 className="mv0">Avatars</h5>
              <div className="ba b--light-gray w-100 mt4 pv3 tc">
                <img
                  className="w-40 h4"
                  src={avatar}
                  alt="social media avatar icon"
                />
              </div>
              <a
                href="https://drive.google.com/a/vtex.com.br/uc?authuser=0&id=0BzOGumK-fxFJVGh6QjB4QWY1bVk&export=download"
                className="button-link link w-100 mt4 pointer"
              >
                Download
              </a>
            </div>
          }
          thirdColumn={
            <div className="w-100 center mt4 mt0-ns">
              <h5 className="mv0">Complete</h5>
              <div className="ba b--light-gray w-100 mt4 pv3 tc">
                <img className="w-40 h4" src={chest} alt="chest icon" />
              </div>
              <a
                href="https://drive.google.com/a/vtex.com.br/uc?authuser=0&id=0BzOGumK-fxFJYmcyYm82OHY4d1k&export=download"
                className="button-link link w-100 mt4 pointer"
              >
                Download
              </a>
            </div>
          }
        />
      </div>
    );
  }
}

Identity.propTypes = {
  intl: intlShape
};

export default injectIntl(Identity);
