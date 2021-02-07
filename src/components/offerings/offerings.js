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
        interval="2000"
        centermode
        showArrows
        showIndicators
        infiniteLoop
        showThumbs={false}
        stopOnHover
        swipeable
        emulateTouch
        dynamicHeight={true}
        className="carousel-background"
      >
        <div>
          <h3>Speaking Engagement</h3>
          <img src="/images/Preaching.png" alt="Khanh's Preaching" />
        </div>
        <div>
          <h3>Workshop</h3>
          <img src="/images/Linked-Workshop.png" alt="Linked Workshop" />
        </div>
        <div>
          <h3>Webinar</h3>
          <img src="/images/Webinar.jpg" alt="Zoom Webinar" />
        </div>
        <div>
          <a
            href="https://www.staceybjones.com/"
            rel="noreferrer"
            target="_blank"
          >
            <h3>Writing</h3>
            <img
              src="/images/Pastor-Hip-Hop.png"
              alt="Khanh's at launch event for Pastor's Stacy's book"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.staceybjones.com/"
            rel="noreferrer"
            target="_blank"
          >
            <h3>Book Endorsement</h3>
            <img src="/images/Signed-Book.jpg" alt="Pastor Stacy's book" />
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
  }

  a {
    display: inline-block;
  }

  a img {
    display: block;
  }
`
