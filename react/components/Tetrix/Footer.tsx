import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../images/tetrix_logo_dark.svg'

const Footer: FunctionComponent = () => (
  <footer className="pa10-l pa7 bg-white">
    <div className="flex flex-row-l flex-column justify-between items-center-l w-90 center">
      <div className="w-90 w-33-l center">
        <img src={Logo} alt="TETRIX" />
        <div className="flex items-center justify-center mv4">
          <a
            className="link c-muted-5 mh5"
            href="https://www.facebook.com/desafiotetrix/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="link c-muted-5 mh5"
            href="https://www.instagram.com/desafiotetrix/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="flex flex-row-l flex-column justify-between mt5 mt0-l">
        <p className="ph5-l">
          <a className="link c-muted-5" href="https://vtex.com">
            VTEX.COM
          </a>
        </p>
        <p className="ph5-l">
          <a
            className="link c-muted-5"
            href="https://docs.google.com/document/d/1xYkaEzYSlB-aqAZj2JYpBXhJqTeG1d-KlKCNPPfsQNE"
          >
            TERMOS E CONDIÇÕES
          </a>
        </p>
        <p className="ph5-l">
          <a className="link c-muted-5" href="https://careers.vtex.com">
            CAREERS
          </a>
        </p>
        <p className="ph5-l">
          <a className="link c-muted-5" href={'mailto:tetrix@vtex.com'}>
            CONTACT US
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
