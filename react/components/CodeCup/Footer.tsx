import React, { FunctionComponent } from 'react'

import Logo from '../../images/logo_codecup_03@2x.png'

const Footer: FunctionComponent = () => (
  <footer className="flex justify-around pa8">
    <div className="flex flex-column w-25 justify-around">
      <img src={Logo} className="w-70" />
      <div className="flex justify-around mt7">
        <div>Twitter</div>
        <div>Facebook</div>
        <div>Instagram</div>
      </div>
    </div>
    <div className="flex flex-column justify-around w-30 c-on-base">
      <ul className="flex list justify-around">
        <li>vtex.com</li>
        <li>termos e condições</li>
        <li>careers</li>
        <li>contact us</li>
      </ul>
      <p>
        VTEX - The True Cloud Commerce ™ Platform. We manage billions of
        sessions with an estimated GMV of over $2 billion across 2.000 stores
      </p>
    </div>
  </footer>
)

export default Footer
