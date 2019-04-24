import React, { FunctionComponent } from 'react'

import { baseClassname } from './utils'

const RunningShoes: FunctionComponent<{ colorToken?: string }> = ({
  colorToken,
}) => (
  <svg
    className={`${baseClassname('runningshoes')} ${
      colorToken ? colorToken : ''
    }`}
    width="62"
    height="50"
    viewBox="0 0 62 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 49H22"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M1 39H9"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M42.6009 21.238L36.0469 23.347"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M44.8012 28.123L38.4082 30.181"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M38.7064 9.06098L46.9994 35H54.9994C56.5907 35 58.1168 35.6321 59.2421 36.7573C60.3673 37.8826 60.9994 39.4087 60.9994 41V45C60.9994 46.0609 60.578 47.0783 59.8278 47.8284C59.0777 48.5786 58.0603 49 56.9994 49H38.9994L2.67041 25.106C1.80975 24.4874 1.22885 23.5533 1.0546 22.5078C0.880354 21.4623 1.12691 20.3903 1.74041 19.526L14.2094 2.06598C14.6017 1.51674 15.1961 1.14582 15.8618 1.0348C16.5276 0.923778 17.2101 1.08176 17.7594 1.47398L17.7764 1.48598C18.1143 1.73198 18.3877 2.0561 18.5731 2.43067C18.7586 2.80524 18.8506 3.21912 18.8414 3.63698C18.8174 5.75698 19.1234 12.278 23.9924 15.193C25.6032 16.1365 27.402 16.7141 29.261 16.8847C31.12 17.0552 32.9938 16.8147 34.7494 16.18"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
)

export default RunningShoes
