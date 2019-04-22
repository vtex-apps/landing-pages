import React, { FunctionComponent } from 'react'

import { baseClassname } from './utils'

const Video: FunctionComponent<{ colorToken?: string }> = ({ colorToken }) => (
  <svg
    className={`${baseClassname('video')} ${colorToken ? colorToken : ''}`}
    width="60"
    height="62"
    viewBox="0 0 60 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 34.0001L40 44.0001L24 54.0001V34.0001Z"
      stroke="#F71963"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M59 26.0001H3V61.0001H59V26.0001Z"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M51.0425 12.0741L43.6465 2.99512"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M39.1653 13.786L31.7773 4.71802"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M27.2882 15.498L19.9102 6.44104"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M15.4121 17.211L7.99414 8.17004"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M2.99927 19.0001L57.1783 11.1891L55.6163 1.25806L1.57227 9.10206L2.99927 19.0001Z"
      stroke="#142032"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
)

export default Video
