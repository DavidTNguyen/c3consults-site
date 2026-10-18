import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { FiArrowRight } from 'react-icons/fi'
import siteConfig from '../../../data/siteConfig'

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  padding-block: clamp(3rem, 7vw, 6rem) clamp(4rem, 8vw, 7rem);
  background: radial-gradient(
      60rem 40rem at 85% -10%,
      var(--accent-soft),
      transparent 60%
    ),
    var(--bg);

  .hero__grid {
    display: grid;
    gap: clamp(2.5rem, 6vw, 4.5rem);
    align-items: center;
  }

  .hero__lead {
    max-width: 56ch;
    margin-top: 1.25rem;
    font-size: clamp(1.1rem, 0.6vw + 1rem, 1.3rem);
    color: var(--muted);
  }

  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .hero__stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem 2rem;
    max-width: 30rem;
    margin-top: 2.75rem;
    padding: 0;
    list-style: none;
  }

  .hero__stats strong {
    display: block;
    font-size: 1.6rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .hero__stats span {
    font-size: 0.9rem;
    color: var(--muted);
  }

  .hero__media {
    position: relative;
    max-width: 560px;
    width: 100%;
    margin-inline: auto;
  }

  .hero__media::before {
    content: '';
    position: absolute;
    inset: 8% -6% -6% 10%;
    border-radius: 32px;
    background: var(--accent);
    opacity: 0.9;
    transform: rotate(3deg);
  }

  .hero__image {
    position: relative;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: var(--shadow);
    aspect-ratio: 1 / 1;
  }

  .hero__badge {
    position: absolute;
    left: -4%;
    bottom: 8%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem 0.75rem 0.75rem;
    border-radius: 16px;
    background: var(--surface);
    box-shadow: var(--shadow);
    font-size: 0.9rem;
    line-height: 1.3;
  }

  .hero__badge strong {
    display: block;
    color: var(--text);
  }

  .hero__badge span {
    color: var(--muted);
  }

  @media (min-width: 900px) {
    .hero__grid {
      grid-template-columns: 1.1fr 0.9fr;
    }
  }
`

const Hero = () => (
  <HeroSection aria-labelledby="hero-title">
    <div className="container hero__grid">
      <div>
        <p className="eyebrow">C3: Cultural Competency Consulting</p>
        <h1 id="hero-title">{siteConfig.siteTitle}</h1>
        <p className="hero__lead">{siteConfig.heroLead}</p>
        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href={`mailto:${siteConfig.social.email}`}
          >
            Book a training
            <FiArrowRight aria-hidden="true" />
          </a>
          <a className="btn btn--ghost" href="#trainings">
            Explore trainings
          </a>
        </div>
        <ul className="hero__stats">
          <li>
            <strong>25+ years</strong>
            <span>multi-ethnic leadership</span>
          </li>
          <li>
            <strong>20+ countries</strong>
            <span>of global experience</span>
          </li>
          <li>
            <strong>IDI®</strong>
            <span>Intercultural Development Inventory Administrator</span>
          </li>
          <li>
            <strong>CQ®</strong>
            <span>Cultural Intelligence Facilitator</span>
          </li>
        </ul>
      </div>

      <div className="hero__media">
        <div className="hero__image">
          <StaticImage
            src="../../images/heroes/diverse-people-hand-stack.png"
            alt="A diverse group of colleagues stacking their fists together in a show of unity"
            loading="eager"
            fetchPriority="high"
            width={560}
            aspectRatio={1}
            transformOptions={{ cropFocus: 'center' }}
            style={{ height: '100%' }}
          />
        </div>
        <div className="hero__badge">
          <StaticImage
            src="../../images/c3-mark.png"
            alt=""
            width={36}
            height={36}
            placeholder="none"
          />
          <div>
            <strong>Motivate · Educate · Activate</strong>
            <span>Speaking · Training · Consulting</span>
          </div>
        </div>
      </div>
    </div>
  </HeroSection>
)

export default Hero
