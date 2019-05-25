import React, { FunctionComponent } from 'react'

import Logo from '../../images/tetrix_logo_dark.svg'

const Footer: FunctionComponent = () => (
  <footer className="pa10-l pa7 bg-white">
    <div className="flex flex-row-l flex-column justify-between items-center-l w-90 center">
      <img src={Logo} alt="TETRIX" className="w-90 center" />
      <div className="flex flex-row-l flex-column justify-between mt5 mt0-l">
        <p className="ph5-l">VTEX.COM</p>
        <p className="ph5-l">TERMOS E CONDIÇÕES</p>
        <p className="ph5-l">CAREERS</p>
        <p className="ph5-l">CONTACT US</p>
      </div>
    </div>
  </footer>
)

export default Footer
