import React, { FunctionComponent } from 'react'

import { baseClassname } from './utils'

const Sync: FunctionComponent<{ colorToken?: string }> = ({ colorToken }) => (
  <svg
    className={`${baseClassname('sync')} ${colorToken ? colorToken : ''}`}
    width="34"
    height="36"
    viewBox="0 0 34 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17.9999C1 9.1634 8.1634 2 16.9999 2C23.4485 2 29.0736 5.98399 31.6062 11.48"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M32.8768 2L31.6065 11.48L22.1271 10.2097"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M32.9973 18C32.9973 26.8365 25.8339 33.9999 16.9973 33.9999C10.5488 33.9999 4.92368 30.016 2.39111 24.52"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M1.12305 34L2.39333 24.52L11.8727 25.7903"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
)

export default Sync
