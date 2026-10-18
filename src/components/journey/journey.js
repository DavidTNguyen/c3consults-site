import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const JourneySection = styled.section`
  padding-block: clamp(1.5rem, 4vw, 3rem);

  .journey__card {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    border-radius: var(--radius);
    background: #1a1214;
    box-shadow: var(--shadow);
    color: #fff;
  }

  /* Matches the photo's own 3:2 shape so nothing is cropped on phones. */
  .journey__image {
    aspect-ratio: 3 / 2;
  }

  .journey__content {
    padding: 1.75rem 1.5rem 2rem;
  }

  .eyebrow {
    color: #ffd2d4;
  }

  .eyebrow::before {
    background: #ffd2d4;
  }

  h2 {
    color: #fff;
    font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  }

  p:not(.eyebrow) {
    margin-top: 0.85rem;
    color: rgba(255, 255, 255, 0.88);
    font-size: clamp(1rem, 0.5vw + 0.9rem, 1.15rem);
  }

  @media (min-width: 960px) {
    /* A fixed 16:9 frame keeps the mountains, a strip of sky, and the whole motorbike in view at every width. */
    .journey__card {
      display: flex;
      align-items: flex-end;
      aspect-ratio: 16 / 9;
    }

    .journey__image {
      position: absolute !important;
      inset: 0;
      z-index: -2;
      aspect-ratio: auto;
    }

    .journey__card::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: linear-gradient(
          90deg,
          rgba(15, 10, 10, 0.8) 0%,
          rgba(15, 10, 10, 0.45) 38%,
          rgba(15, 10, 10, 0) 60%
        ),
        linear-gradient(0deg, rgba(15, 10, 10, 0.45), rgba(15, 10, 10, 0) 35%);
    }

    .journey__content {
      max-width: 26rem;
      padding: clamp(2rem, 3.5vw, 3rem);
    }
  }
`

const Journey = () => (
  <JourneySection aria-labelledby="journey-title">
    <div className="container">
      <div className="journey__card">
        <StaticImage
          className="journey__image"
          src="../../images/heroes/road-journey.jpg"
          alt="A motorbike carrying a load of firewood along a winding road through green, mountainous hills"
          layout="fullWidth"
          objectPosition="50% 85%"
        />
        <div className="journey__content reveal">
          <p className="eyebrow">The journey</p>
          <h2 id="journey-title">Every journey carries a story</h2>
          <p>
            From a refugee family settling in the Twin Cities to service in
            20+ countries, I bring a lived, global perspective to every training.
          </p>
        </div>
      </div>
    </div>
  </JourneySection>
)

export default Journey
