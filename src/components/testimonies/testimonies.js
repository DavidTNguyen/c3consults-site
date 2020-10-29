import React from 'react'
import styled from 'styled-components'
import { testimonials } from '../../../data/testimonials'
import Testimony from './Testimony'

const Testimonies = () => {
  return (
    <>
      <h1>Testimonies</h1>
      <ul className="card-list">
        {testimonials.map(testimony => (
          <Testimony
            key={testimony.id}
            {...testimony}
            className="testimony__item"
          />
        ))}
      </ul>
    </>
  )
}

export default styled(Testimonies)`
  position: relative;
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin: 70px 0 0 -1px;
    width: 1px;
    height: calc(100% - 70px);
    background: ${({ theme }) => theme.colors.primary};
  }
  .testimony__item {
    width: 100%;
    margin: 0 0 20px 0;
    position: relative;
  }
  .testimony__item:after {
    content: '';
    display: block;
    clear: both;
  }
  .testimony__item div.inner {
    width: 100%;
    float: left;
    margin: 85px 0 0 0;
  }
`
