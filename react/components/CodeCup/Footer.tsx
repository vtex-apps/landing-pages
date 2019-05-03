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
          <a className="link c-on-base" href="https://twitter.com/vtexonline">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div>
          <a
            className="link c-on-base"
            href="https://www.facebook.com/vtexonline/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div>
          <a
            className="link c-on-base"
            href="https://www.instagram.com/vtextruecloud/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-column justify-around w-40-l c-on-base">
      <div className="flex-l list justify-between">
        <p className="ttu">
          <strong>
            <a className="link c-on-base" href="https://vtex.com">
              vtex.com
            </a>
          </strong>
        </p>
        <p className="ttu">
          <strong>
            <a className="link c-on-base" href="https://vtex.com">
              termos e condições
            </a>
          </strong>
        </p>
        <p className="ttu">
          <strong>
            <a className="link c-on-base" href="https://careers.vtex.com">
              careers
            </a>
          </strong>
        </p>
        <p className="ttu">
          <strong>
            <a className="link c-on-base">contact us</a>
          </strong>
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
