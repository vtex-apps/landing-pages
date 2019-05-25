import React, { FunctionComponent, useState } from 'react'
import { IconBars } from 'vtex.styleguide'

import Logo from '../../images/tetrix_logo.svg'

const Nav: FunctionComponent = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <nav className="flex">
      <div className="c-muted-1 w-100 flex flex-column flex-row-l justify-between">
        <div className="flex flex-column items-center">
          <img src={Logo} className="h3-l" alt="TETRIX - O DESAFIO" />
          <button
            className="dn-l c-on-base w-33 mv7 bg-0 bn bg-transparent"
            onClick={() => setOpenNav(!openNav)}
          >
            <IconBars />
          </button>
        </div>
        <div className="flex-l" hidden={!openNav}>
          <div className="flex flex-column flex-row-l justify-center list mt0 items-center mb0">
            <p className="mh5-l mv5 mv0-l">
              <a className="link c-muted-1" href="https://tetrix.vtex.com">
                <strong>HOME</strong>
              </a>
            </p>
            <p className="mh5-l mv5 mv0-l bold">
              <a className="link c-muted-1" href="#about">
                <strong>O QUE É?</strong>
              </a>
            </p>
            <p className="mh5-l mv5 mv0-l bold">
              <a className="link c-muted-1" href="#prize">
                <strong>PRÊMIO</strong>
              </a>
            </p>
            <p className="mh5-l mv5 mv0-l bold">
              <a className="link c-muted-1" href="#faq">
                <strong>FAQ</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
