import React, { FunctionComponent, useState } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'
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
  const [open, setOpen] = useState(false)
  const [selectedLocale, setSelectedLocale] = useState(
    findLocale(culture.locale)
  )

  const handleLocaleClick = ({ target: { id } }: { target: any }) => {
    emitter.emit('localesChanged', id)
    setOpen(false)
    setSelectedLocale(findLocale(id))
  }

  return (
    <nav>
      <ul
        className="flex flex-column flex-row-m justify-between list mt0 c-muted-1 items-center bg-base mb0 relative"
        style={{
          boxShadow: `0px 3px 20px rgba(0, 0, 0, 0.3)`,
        }}
      >
        <div className="flex items-center">
          <img src={logoPath} className="h3" alt="VTEX" />
          <p>|</p>
          <p className="ml3">Developer</p>
        </div>
        <div className="flex items-center">
          <li className="mh5">
            {intl.formatMessage({ id: 'io.navbar.learn' })}
          </li>
          <li className="mh5">
            {intl.formatMessage({ id: 'io.navbar.make' })}
          </li>
          <li className="mh5">
            {intl.formatMessage({ id: 'io.navbar.keepup' })}
          </li>
          <li className="flex items-center">
            <div className="h-100 relative w3">
              <button
                onClick={() => setOpen(!open)}
                className="c-muted-1 bg-base bn flex items-center"
              >
                <p className="ttu mr4">{splitLocale(selectedLocale.id)}</p>
                {open ? <IconCaretUp /> : <IconCaretDown />}
              </button>
              <div hidden={!open} className="z-5 bg-base pa3 absolute">
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
            <div className="bg-rebel-pink pa6">
              {intl.formatMessage({ id: 'io.navbar.build' })}
            </div>
          </li>
        </div>
      </ul>
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
