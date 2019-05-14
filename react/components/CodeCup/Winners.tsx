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

const Winners = () => (
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
    <h3 className="mt7 w-90 center">Esclarecimento VTEX Code Cup T-Shirt</h3>
    <p className="lh-copy w-90 center">
      <em>
        Você estará eleito a receber (1) t-shirt se pertencer aos 20% dos
        melhores colocados do ranking no Round 1”.
      </em>{' '}
      <strong>
        Considerando os melhores colocados os participantes que submeteram pelo
        menos uma vez.
      </strong>{' '}
      <br />
      Lista de competidores que ganharam camisetas da VTEX Code Cup está nesse
      link:{' '}
      <a href="https://drive.google.com/file/d/1DeNMqMH7teDBCnM4jVFGVgrFYhCZl0AL/view?usp=sharing">
        Camisetas VTEX Code Cup 2019
      </a>
      .<br />A produção do VTEX Code Cup irá entrar em contato e agendar a data
      de entrega das camisetas. <br />
      Confira o resultado completo em{' '}
      <a href="https://vtexcc19.kattis.com/">https://vtexcc19.kattis.com/</a>.
    </p>
    <p className="w-90 center">
      <em>
        Nota: O competidor Artur Vinicus Tomé Rodrigues não preencheu os
        pré-requisitos para a etapa presencial, seguindo o regulamento abriu-se
        uma vaga para o próximo competidor do ranking. Agradecemos a
        participação e fica a menção honrosa pelo belo espírito competitivo!
      </em>
    </p>
    <h3 className="mt7 w-90 center">Edital</h3>
    <p className="w-90 center">
      O link a seguir possui um edital descrevendo a solução de todos os
      problemas da primeira fase:{' '}
      <a href="https://docs.google.com/document/d/14UlgDhjDOtvcRakR0fkxX-KhCzco5FzIsuypgZKz63c/edit?usp=sharing">
        Edital VTEX Code Cup Primeira Fase
      </a>
    </p>
  </section>
)

export default Winners
