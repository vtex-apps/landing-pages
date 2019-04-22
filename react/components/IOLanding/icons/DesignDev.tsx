import React, { FunctionComponent } from 'react'

import { baseClassname } from './utils'

const DesignDev: FunctionComponent<{ colorToken?: string }> = ({
  colorToken,
}) => (
  <svg
    className={`${baseClassname('design')} ${colorToken ? colorToken : ''}`}
    width="62"
    height="62"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 45H1V1H37V17"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M15 19L11 23L15 27"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M61 17H25V61H61V17Z"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M53 25H33V31H53V25Z"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M39 53H33V31"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M53 31V53H39V31"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
)

export default DesignDev
