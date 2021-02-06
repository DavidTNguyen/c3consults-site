import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Offerings = ({ className }) => {
  return (
    <div className={className}>
      <h2>Speaking/Training Services</h2>
      <Carousel
        autoPlay
        centermode
        showArrows
        showIndicators
        infiniteLoop
        showThumbs={false}
        stopOnHover
        swipeable
        emulateTouch
        dynamicHeight
        className="carousel-background"
      >
        <div>
          <h4>Speaking Engagement</h4>
          <img src="/images/Preaching.png" alt="Khanh's Preaching" />
        </div>
        <div>
          <h4>Workshop</h4>
          <img src="/images/Linked-Workshop.jpg" alt="Linked Workshop" />
        </div>
        <div>
          <h4>Webinar</h4>
          <img src="/images/Webinar.jpg" alt="Zoom Webinar" />
        </div>
        <div>
          <h4>Writing</h4>
          <a
            href="https://www.staceybjones.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/images/Pastor-Hip-Hop.png"
              alt="Khanh's at launch event for Pastor's Kevin's book"
            />
          </a>
        </div>
        <div>
          <h4>Pastor Hip-Hop</h4>
          <a
            href="https://www.staceybjones.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/images/Signed-Book.jpg" alt="Pastor Kevin's book" />
          </a>
        </div>
      </Carousel>
    </div>
  )
}

export default styled(Offerings)`
  position: relative;
  margin: auto;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};

  .carousel-background {
    margin: auto;
    width: 100%;
  }
`
