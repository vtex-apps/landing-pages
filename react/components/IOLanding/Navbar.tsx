import React, { FunctionComponent, useState } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { IconCaretDown, IconCaretUp, IconBars } from 'vtex.styleguide'
import { useRuntime } from 'vtex.render-runtime'

import logoPath from '../../images/VTEX_Cold_Gray_RGB.svg'

const supportedLangs = [
  {
    id: 'en-US',
  },
  {
    id: 'pt-BR',
  },
  {
    id: 'es-AR',
  },
]

const Navbar: FunctionComponent<InjectedIntlProps> = ({ intl }) => {
  const { culture, emitter } = useRuntime()
  const [openLocaleSelector, setOpenLocaleSelector] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [selectedLocale, setSelectedLocale] = useState(
    findLocale(culture.locale)
  )

  const handleLocaleClick = ({ target: { id } }: { target: any }) => {
    emitter.emit('localesChanged', id)
    setOpenLocaleSelector(false)
    setSelectedLocale(findLocale(id))
  }

  return (
    <nav className="flex">
      <div
        className="fixed bg-base c-muted-1 w-100 flex flex-column flex-row-l justify-between z-5"
        style={{
          boxShadow: `0px 3px 20px rgba(0, 0, 0, 0.3)`,
        }}
      >
        <div className="flex justify-between">
          <button
            className="dn-l bg-base c-on-base w-33 w-50-l bn"
            onClick={() => setOpenNav(!openNav)}
          >
            <IconBars />
          </button>
          <div className="flex items-center w-40 w-50-l">
            <img src={logoPath} className="h3" alt="VTEX" />
            <p className="dn-s flex-l">|</p>
            <p className="dn-s flex-l ml3">Developer</p>
          </div>
          <button className="c-muted-1 bg-rebel-pink bn t-body w-25 dn-l">
            {intl.formatMessage({ id: 'io.navbar.build' })}
          </button>
        </div>
        <div className="flex-l" hidden={!openNav}>
          <ul className="flex flex-column flex-row-l justify-center list mt0 items-center mb0 relative">
            <li className="mh5 mv5 mv0-l">
              {intl.formatMessage({ id: 'io.navbar.learn' })}
            </li>
            <li className="mh5 mv5 mv0-l">
              {intl.formatMessage({ id: 'io.navbar.make' })}
            </li>
            <li className="mh5 mv5 mv0-l">
              {intl.formatMessage({ id: 'io.navbar.keepup' })}
            </li>
            <li className="flex items-center">
              <div className="h-100 relative w3">
                <button
                  onClick={() => setOpenLocaleSelector(!openLocaleSelector)}
                  className="c-muted-1 bg-base bn flex items-center"
                >
                  <p className="ttu mr4">{splitLocale(selectedLocale.id)}</p>
                  {openLocaleSelector ? <IconCaretUp /> : <IconCaretDown />}
                </button>
                <div
                  hidden={!openLocaleSelector}
                  className="z-4 bg-base pa3 absolute"
                >
                  {supportedLangs.map(({ id }) => (
                    <button
                      className="tc ttu c-muted-1 pointer bn bg-base"
                      onClick={handleLocaleClick}
                      id={id}
                      key={id}
                    >
                      {splitLocale(id)}
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <button className="c-muted-1 bg-rebel-pink bn t-body pa6 dn flex-l">
                {intl.formatMessage({ id: 'io.navbar.build' })}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function splitLocale(locale: string) {
  return locale.split('-')[0]
}

function findLocale(locale: any) {
  const localeObj = supportedLangs.find(
    ({ id }) => splitLocale(id) === splitLocale(locale)
  )
  return localeObj || supportedLangs[0]
}

export default injectIntl(Navbar)
