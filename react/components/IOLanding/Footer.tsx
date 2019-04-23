import React from 'react'
import { FormattedMessage } from 'react-intl'

import Logo from '../../images/VTEX_footer.svg'
import VTEXOffices from '../../VTEXOffices.json'

const footerLinks = [
  {
    id: 'pricing',
    options: [],
  },
  {
    id: 'company',
    options: ['carrers', 'partnersAWS', 'dmca', 'blog'],
  },
  {
    id: 'resources',
    options: [
      'devdocs',
      'support',
      'announcements',
      'releases',
      'status',
      'health',
      'vtexio',
    ],
  },
  {
    id: 'partners',
    options: ['vtex', 'find', 'program', 'appstore'],
  },
]

const Footer = () => (
  <footer className="bg-base pa10 c-muted-1">
    <div className="flex justify-between">
      <div className="w-33">
        <img src={Logo} alt="VTEX" />
        <p>
          <FormattedMessage id="io.footer.vtex" />
        </p>
      </div>

      {footerLinks.map(category => {
        const baseMessageId = `io.footer.${category.id}`
        return (
          <ul key={category.id}>
            <p className="fw7">
              <FormattedMessage id={baseMessageId} />
            </p>
            {category.options.map(option => (
              <li className="list" key={option}>
                <p>
                  <FormattedMessage id={`${baseMessageId}.${option}`} />
                </p>
              </li>
            ))}
          </ul>
        )
      })}
    </div>
    <p className="fw7">© VTEX, 2018</p>
    <div className="flex flex-wrap center mv7">
      {VTEXOffices.Offices.map(office => (
        <div key={office.short} className="ph4 w-20">
          <p className="t-heading-3">{office.short}</p>
          <p>{office.address1}</p>
          <p>{office.address2}</p>
          {office.address3 && <p>{office.address3}</p>}
          <p>{office.city}</p>
        </div>
      ))}
    </div>
  </footer>
)

export default Footer
