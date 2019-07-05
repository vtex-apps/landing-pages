import React from 'react'

import First from '../../images/CodeCupResults1.jpg'
import Second from '../../images/CodeCupResults2.jpg'
import Third from '../../images/CodeCupResults3.jpg'

const Results = () => (
  <section id="about" className="bg-white w-90 w-75-l center pv9">
    <h1 className="c-emphasis t-heading-1">
      Resultados VTEX Code Cup 2019
    </h1>
    <div className="flex flex-column justify-around">
      <article className="bg-muted-1 mv3 ph6 pv5 w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={First} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">1º Lugar</p>
            <p className="t-body c-muted-2">Arthur Nascimento</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={Second} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">2º Lugar</p>
            <p className="t-body c-muted-2">Arthur Pratti Dadalto</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={Third} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">3º Lugar</p>
            <p className="t-body c-muted-2">Gabriel Pessoa</p>
          </div>
        </div>
      </article>
    </div>
  </section>
)

export default Results
