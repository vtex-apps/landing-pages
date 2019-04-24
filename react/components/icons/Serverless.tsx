import React, { FunctionComponent } from 'react'

import { baseClassname } from './utils'

const Serverless: FunctionComponent<{ colorToken?: string }> = ({
  colorToken,
}) => (
  <svg
    className={`${baseClassname('serverless')} ${colorToken ? colorToken : ''}`}
    width="34"
    height="32"
    viewBox="0 0 34 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0667 1H1V30.8667H10.0667V1Z"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      opacity="0.8"
      d="M20.739 1H14.339V30.8667H20.739V1Z"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      opacity="0.6"
      d="M28.7333 1H25V30.8667H28.7333V1Z"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      opacity="0.4"
      d="M33 1V30.8667"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
)

export default Serverless
