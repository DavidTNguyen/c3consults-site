import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Offerings = ({ className }) => {
  return (
    <div className={className}>
      <h1>Speaking/Training Services</h1>
      <Carousel
        autoPlay
        showArrows
        showIndicators
        infiniteLoop
        showThumbs={false}
        stopOnHover
        swipeable
        emulateTouch
        dynamicHeight
      >
        <div>
          <img src="/images/Preaching.png" alt="Khanh's Preaching" />
          <h1 className="legend">Speaking Engagement</h1>
        </div>
        <div>
          <img src="/images/Webinar.jpg" alt="Zoom Webinar"/>
          <h1 className="legend">Webinar</h1>
        </div>
        <div>
          <a
            href="https://www.staceybjones.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/images/Pastor-Hip-Hop.png" alt="Khanh's at launch event for Pastor's Kevin's book"/>
            <h1 className="legend">Writing</h1>
          </a>
        </div>
        <div>
          <img src="/images/Editorial.jpg" alt="Pastor Kevin's book" />
          <h1 className="legend">www.staceybjones.com</h1>
        </div>
      </Carousel>
    </div>
  )
}

export default styled(Offerings)`
  position: relative;
    background: ${({ theme }) => theme.colors.primary};
  }
  .offering-background {
    background-color: rgb(23, 233, 23);
  }
`
