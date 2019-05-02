import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import Logo from '../../images/logo_codecup_03@2x.png'

const Footer: FunctionComponent = () => (
  <footer className="flex justify-around pa8">
    <div className="flex flex-column w-25 justify-around">
      <img src={Logo} className="w-70" />
      <div className="flex justify-around mt7 c-on-base">
        <div>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
    <div className="flex flex-column justify-around w-40 c-on-base">
      <ul className="flex list justify-between">
        <li className="ttu">vtex.com</li>
        <li className="ttu">termos e condições</li>
        <li className="ttu">careers</li>
        <li className="ttu">contact us</li>
      </ul>
      <p>
        VTEX - The True Cloud Commerce ™ Platform. We manage billions of
        sessions with an estimated GMV of over $2 billion across 2.000 stores
      </p>
    </div>
  </footer>
)

export default Footer
