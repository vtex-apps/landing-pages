import React from 'react'
import * as typeformEmbed from '@typeform/embed'

class Form extends React.Component {
  constructor(props: any) {
    super(props)
  }

  private el: HTMLDivElement | null = null

  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(
        this.el,
        'https://codecup.typeform.com/to/yO8hNP',
        {
          hideFooter: true,
          hideHeaders: true,
          opacity: 0,
        }
      )
    }
  }
  render() {
    return (
      <section id="form" className="pv7 w-90 ml-auto-l center">
        <h1 className="c-emphasis">Inscrição</h1>
        <div ref={el => (this.el = el)} className="w-100 vh-50-l vh-25" />
      </section>
    )
  }
}

export default Form
