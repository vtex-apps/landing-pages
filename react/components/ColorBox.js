import React, { Component } from "react";
import PropTypes from "prop-types";

class ColorBox extends Component {
  render() {
    const { name, hex, pantone, rgb, cmyk, light, withBorder } = this.props;

    return (
      <div
        className="center mb3"
        style={{
          backgroundColor: hex,
          color: light ? "#142032" : "#fff",
          border: withBorder ? "solid 1px #D6D8E0" : "none"
        }}
      >
        <div className="pv3 ph2 flex">
          <div className="center self-center w-60">
            <h4 className="mv0 pb3">{name}</h4>
            <div className="pb2">{hex}</div>
            <div>{pantone && `PANTONE ${pantone}`}</div>
          </div>

          <div className="center self-start">
            <table>
              <tbody>
                <tr>
                  <td>R</td>
                  <td>{rgb[0]}</td>
                </tr>
                <tr>
                  <td>G</td>
                  <td>{rgb[1]}</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>{rgb[2]}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="center self-start">
            <table>
              <tbody>
                <tr>
                  <td>C</td>
                  <td>{cmyk[0]}</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>{cmyk[1]}</td>
                </tr>
                <tr>
                  <td>Y</td>
                  <td>{cmyk[2]}</td>
                </tr>
                <tr>
                  <td>K</td>
                  <td>{cmyk[3]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

ColorBox.defaultProps = {
  light: false,
  border: false
};

ColorBox.propTypes = {
  light: PropTypes.bool,
  withBorder: PropTypes.bool,
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  pantone: PropTypes.string,
  rgb: PropTypes.array.isRequired,
  cmyk: PropTypes.array.isRequired
};

export default ColorBox;
