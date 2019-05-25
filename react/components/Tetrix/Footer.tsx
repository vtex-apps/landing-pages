import React, { FunctionComponent } from 'react'

import Logo from '../../images/tetrix_logo_dark.svg'

const Footer: FunctionComponent = () => (
  <footer className="pa10 bg-white">
    <div className="flex justify-between items-center w-90 center">
      <img src={Logo} alt="TETRIX" />
      <div className="flex justify-between">
        <p className="ph5">VTEX.COM</p>
        <p className="ph5">TERMOS E CONDIÇÕES</p>
        <p className="ph5">CAREERS</p>
        <p className="ph5">CONTACT US</p>
      </div>
    </div>
  </footer>
)

export default Footer
