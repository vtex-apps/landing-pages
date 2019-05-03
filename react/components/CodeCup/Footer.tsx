import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import Logo from '../../images/logo_codecup_03@2x.png'

const Footer: FunctionComponent = () => (
  <footer className="flex flex-column flex-row-l justify-around pa8">
    <div className="flex flex-column w-25-l justify-around">
      <img src={Logo} className="w-70-l" />
      <div className="flex justify-around mv7 mb0-l c-on-base">
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
    <div className="flex flex-column justify-around w-40-l c-on-base">
      <div className="flex-l list justify-between">
        <p className="ttu">
          <strong>vtex.com</strong>
        </p>
        <p className="ttu">
          <strong>termos e condições</strong>
        </p>
        <p className="ttu">
          <strong>careers</strong>
        </p>
        <p className="ttu">
          <strong>contact us</strong>
        </p>
      </div>
      <p>
        VTEX - The True Cloud Commerce ™ Platform. We manage billions of
        sessions with an estimated GMV of over $2 billion across 2.000 stores
      </p>
    </div>
  </footer>
)

export default Footer
