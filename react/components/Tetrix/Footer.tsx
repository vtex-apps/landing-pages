import React, { FunctionComponent } from 'react'

import Logo from '../../images/tetrix_logo_dark.svg'

const Footer: FunctionComponent = () => (
  <footer className="pa10-l pa7 bg-white">
    <div className="flex flex-row-l flex-column justify-between items-center-l w-90 center">
      <img src={Logo} alt="TETRIX" className="w-90 w-33-l center" />
      <div className="flex flex-row-l flex-column justify-between mt5 mt0-l">
        <p className="ph5-l">
          <a className="link c-muted-5" href="https://vtex.com">
            VTEX.COM
          </a>
        </p>
        <p className="ph5-l">
          <a
            className="link c-muted-5"
            href="https://drive.google.com/file/d/1RUtzx23oaKNklXCMC_up-7ha2hV_grn-/view?usp=sharing"
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
