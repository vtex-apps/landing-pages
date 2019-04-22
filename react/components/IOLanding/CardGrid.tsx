import React, { FunctionComponent } from 'react'

import Card from './Card'
import FlowerGround from './icons/FlowerGround'
import Video from './icons/Video'
import DesignDev from './icons/DesignDev'
import RunningShoes from './icons/RunnigShoes'

const CardGrid: FunctionComponent = () => {
  const cardsConfig = [
    {
      icon: <FlowerGround />,
      titleId: 'cards.first.title',
      textId: 'cards.first.text',
    },
    {
      icon: <Video />,
      titleId: 'cards.second.title',
      textId: 'cards.second.text',
    },
    {
      icon: <DesignDev />,
      titleId: 'cards.third.title',
      textId: 'cards.third.text',
    },
    {
      icon: <RunningShoes />,
      titleId: 'cards.fourth.title',
      textId: 'cards.fourth.text',
    },
  ]

  return (
    <section className="w-90 center flex justify-center flex-wrap mv7">
      {cardsConfig.map((card, index) => (
        <Card
          icon={card.icon}
          title={card.titleId}
          text={card.textId}
          index={index}
          key={card.titleId}
        />
      ))}
    </section>
  )
}

export default CardGrid
