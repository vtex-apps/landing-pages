import React from 'react'

import First from '../../images/CodeCupResults1.jpg'
import Third from '../../images/CodeCupResults2.jpg'
import Second from '../../images/CodeCupResults3.jpg'

const Results = () => (
  <section id="about" className="bg-white w-90 w-75-l center pv9">
    <h1 className="c-emphasis t-heading-1">
      Resultados VTEX Code Cup 2019
    </h1>
    <div className="flex flex-column">
      <article className="bg-muted-1 mv3 ph6 pv5 w-90 br3">
        <div className="items-center link flex">
          <div className="mr7">
            <img src={First} className="vw-50 br2" />
          </div>
          <div className="flex flex-column items-center">
            <p className="t-heading-4 c-muted-5 c-emphasis">1º Lugar</p>
            <p className="t-body c-muted-2">Arthur Nascimento</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-90 br3">
        <div className="items-center link flex">
          <div className="mr7">
            <img src={Second} className="vw-50 br2" />
          </div>
          <div className="flex flex-column items-center">
            <p className="t-heading-4 c-muted-5 c-emphasis">2º Lugar</p>
            <p className="t-body c-muted-2">Tiago Gonçalves</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-90 br3">
        <div className="items-center link flex">
          <div className="mr7">
            <img src={Third} className="vw-50 br2" />
          </div>
          <div className="flex flex-column items-center">
            <p className="t-heading-4 c-muted-5 c-emphasis center">3º Lugar</p>
            <p className="t-body c-muted-2 center">Arthur Pratti Dadalto</p>
          </div>
        </div>
      </article>
    </div>
    <h1 className="c-emphasis t-heading-2 center">
      Agradecemos a todos pela presença e até a próxima edição!
    </h1>
    <section className="mv7 flex justify-center items-center">
      <iframe
        className="w-70-l w-90 vh-75"
        src="https://www.youtube.com/embed/CWA0cWdkMOo"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  </section>
)

export default Results
