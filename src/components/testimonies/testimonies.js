import React from 'react'
import { testimonials } from '../../../data/testimonials'
import Card from './card'

const Testimonies = ({ selectedId }) => {
  return (
    <>
      <h1>Testimonies</h1>
      <ul className="card-list">
        {testimonials.map(card => (         
          <Card key={card.id} {...card} />
          // <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </ul>
    </>
  )
}

export default Testimonies
