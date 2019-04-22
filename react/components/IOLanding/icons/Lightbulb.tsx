import React, { FunctionComponent } from 'react'

import { baseClassname } from './utils'

const Lightbulb: FunctionComponent<{ colorToken?: string }> = ({
  colorToken,
}) => (
  <svg
    className={`${baseClassname('lightbulb')} ${colorToken ? colorToken : ''}`}
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17H4.2"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M5.68549 5.68652L7.94789 7.94893"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M17 1V4.2"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M28.3148 5.68652L26.0524 7.94893"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M33.0004 17H29.8004"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M13.2661 33H20.7328"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M26.0668 16.9998C26.0668 11.9923 22.0076 7.93311 17.0001 7.93311C11.9927 7.93311 7.93347 11.9923 7.93347 16.9998C7.93347 20.675 10.1239 23.8318 13.2668 25.2558V29.7998H20.7335V25.2558C23.8764 23.8318 26.0668 20.675 26.0668 16.9998Z"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
)

export default Lightbulb
