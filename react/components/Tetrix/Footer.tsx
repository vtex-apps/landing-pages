import React, { FunctionComponent } from 'react'

import Logo from '../../images/tetrix_logo_dark.svg'

const Footer: FunctionComponent = () => (
  <footer className="pa10 bg-white" style={{ fontFamily: 'Space Mono' }}>
    <div className="flex justify-between items-center w-90 center">
      <img src={Logo} alt="TETRIX" />
      <div className="flex justify-between">
        <p>VTEX.COM</p>
        <p>TERMOS E CONDIÇÕES</p>
        <p>CAREERS</p>
        <p>CONTACT US</p>
      </div>
    </div>
  </footer>
)

export default Footer
