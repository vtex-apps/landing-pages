import React, { FunctionComponent } from 'react'

import { baseClassname } from './utils'

const Workspaces: FunctionComponent<{ colorToken?: string }> = ({
  colorToken,
}) => (
  <svg
    className={`${baseClassname('workspaces')} ${colorToken ? colorToken : ''}`}
    width="35"
    height="34"
    viewBox="0 0 35 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.4667 9.5332H1V32.9999H24.4667V9.5332Z"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M5.26611 6.86709V5.26709H28.7328V28.7338H27.1328"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M9.53625 2.6V1H33.0029V24.4667H31.4029"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
)

export default Workspaces
