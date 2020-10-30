import React, { useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import { offerings } from '../../../data/offerings'
import Banner from './Banner'

const TrainingFormat = ({ className }) => {
  const [autoPlay, setAutoPlay] = useState(true)
  const [timer, setTimer] = useState(1000)
  const [animation, setAnimation] = useState('slide')
  const [indicators, setIndicators] = useState(true)
  const [timeout, setTimeout] = useState(1000)
  const [navButtonsAlwaysVisible, setNavButtonsAlwaysVisible] = useState(false)
  const [navButtonsAlwaysInvisible, setNavButtonsAlwaysInvisible] = useState(
    false
  )

  console.log(className)
  return (
    <Carousel
      className="carousel"
      autoPlay={autoPlay}
      timer={timer}
      animation={animation}
      indicators={indicators}
      timeout={timeout}
      navButtonsAlwaysVisible={navButtonsAlwaysVisible}
      navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
      next={(now, previous) =>
        console.log(
          `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
      prev={(now, previous) =>
        console.log(
          `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
      onChange={(now, previous) =>
        console.log(
          `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
    >
      {offerings.map((offering, index) => {
        return (
          <Banner
            item={offering}
            key={index}
            contentPosition={offering.contentPosition}
          />
        )
      })}
    </Carousel>
  )
}

export default styled(TrainingFormat)`
  .carousel {
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    position: relative;
    background-color: red;
  }
`
