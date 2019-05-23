import React, { FunctionComponent } from 'react'

import Icon1 from '../../images/icone1.png'
import Icon2 from '../../images/icone2.png'
import Icon3 from '../../images/icone3.png'
import Icon4 from '../../images/icone4.png'
import Icon5 from '../../images/icone5.png'
import Icon6 from '../../images/icone6.png'
import Icon7 from '../../images/icone7.png'
import Icon8 from '../../images/icone8.png'

const About: FunctionComponent = () => (
  <section className="pa7 flex justify-around">
    <div className="w-40">
      <p className="t-heading-2 c-emphasis">O QUE É TETRIX?</p>
      <p className="t-body lh-copy">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam
        ipsa nihil vitae sint? Tempore exercitationem repudiandae blanditiis ut
        quo iure recusandae, totam aut distinctio, possimus tenetur quam aliquam
        ipsa.
      </p>
    </div>
    <div className="flex justify-around flex-wrap">
      <img src={Icon1} className="w-15 mh2 h4" />
      <img src={Icon2} className="w-15 mh2 h4" />
      <img src={Icon3} className="w-15 mh2 h4" />
      <img src={Icon4} className="w-15 mh2 h4" />
      <img src={Icon5} className="w-15 mh2 h4" />
      <img src={Icon6} className="w-15 mh2 h4" />
      <img src={Icon7} className="w-15 mh2 h4" />
      <img src={Icon8} className="w-15 mh2 h4" />
    </div>
  </section>
)

export default About
