import React from 'react'
import { testimonials } from '../../../data/testimonials'
import Testimony from './Testimony'

const Testimonies = () => {
  return (
    <>
      <h1>Testimonies</h1>
      <ul className="card-list">
        {testimonials.map(testimony => (
          <Testimony key={testimony.id} {...testimony} />
        ))}
      </ul>
    </>
  )
}

export default Testimonies
