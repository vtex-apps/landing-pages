import React from 'react'

import First from '../../images/Tiago1.jpg'
import Second from '../../images/Artur2.jpg'
import Third from '../../images/Gabriel3.jpg'
import Fourth from '../../images/Cezar4.jpg'
import Fifth from '../../images/Ivan5.jpg'
import Sixth from '../../images/Misael6.jpg'
import Seventh from '../../images/Lucas7.jpg'
import Eighth from '../../images/Arthur8.png'
import Nineth from '../../images/Luis9.jpg'
import Tenth from '../../images/Lucas10.jpg'

const ToTheSubscribed = () => (
  <section id="about" className="bg-white w-90 w-75-l center pv9">
    <h1 className="c-emphasis t-heading-1">
      Selecionados para a final no Rio de Janeiro
    </h1>
    <div className="flex flex-wrap justify-around">
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={First} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">1º Lugar</p>
            <p className="t-body c-muted-2">Tiago Gonçalves</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
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
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
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
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
        <div className="flex items-center justify-around link">
          <div className="mr7">
            <img src={Fourth} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">4º Lugar</p>
            <p className="t-body c-muted-2">
              Cezar Abadio Correia Guimarães Filho
            </p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={Fifth} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">5º Lugar</p>
            <p className="t-body c-muted-2">Ivan Henrique Costa Petrin</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={Sixth} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">6º Lugar</p>
            <p className="t-body c-muted-2">Misael Mateus Oliveira de Moraes</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={Seventh} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">7º Lugar</p>
            <p className="t-body c-muted-2">Lucas Soares Ferreira</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={Eighth} className="h4 w4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">8º Lugar</p>
            <p className="t-body c-muted-2">Artur Nascimento</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={Nineth} className="h4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">9º Lugar</p>
            <p className="t-body c-muted-2">Luís Felipe Braga Gebrim Silva</p>
          </div>
        </div>
      </article>
      <article className="bg-muted-1 mv3 ph6 pv5 w-40-l w-90 br3">
        <div className="flex items-center link">
          <div className="mr7">
            <img src={Tenth} className="h4" />
          </div>
          <div>
            <p className="t-heading-4 c-muted-5 c-emphasis">10º Lugar</p>
            <p className="t-body c-muted-2">Lucas Turci</p>
          </div>
        </div>
      </article>
    </div>
    <p className="tc">
      Lista de competidores de ganharam camisetas da VTEX Code Cup está nesse
      link:{' '}
      <a href="https://drive.google.com/file/d/1DeNMqMH7teDBCnM4jVFGVgrFYhCZl0AL/view?usp=sharing">
        Camisetas VTEX Code Cup 2019
      </a>
    </p>
  </section>
)

export default ToTheSubscribed
