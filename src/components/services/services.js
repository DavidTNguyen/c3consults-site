import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { FiArrowUpRight } from 'react-icons/fi'

const ServicesSection = styled.section`
  .services__grid {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  }

  .service {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    color: var(--text);
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  a.service:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
    color: var(--text);
  }

  .service__media {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--surface-2);
  }

  .service__media .gatsby-image-wrapper {
    position: absolute;
    inset: 0;
    max-width: none !important;
  }

  .service__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1rem 1.1rem 1.15rem;
  }

  .service__title {
    font-size: 1.05rem;
  }

  .service__link {
    color: var(--accent);
  }
`

const services = [
  {
    title: 'Speaking Engagements',
    image: (
      <StaticImage
        src="../../images/services/Preaching.png"
        alt="Khanh speaking from a stage"
        width={480}
        aspectRatio={4 / 3}
        transformOptions={{ cropFocus: 'attention' }}
      />
    ),
  },
  {
    title: 'Workshops',
    image: (
      <StaticImage
        src="../../images/services/Linked-Workshop.png"
        alt="Khanh leading an in-person workshop"
        width={480}
        aspectRatio={4 / 3}
      />
    ),
  },
  {
    title: 'Webinars',
    image: (
      <StaticImage
        src="../../images/services/Webinar.jpg"
        alt="Khanh presenting a webinar over Zoom"
        width={480}
        aspectRatio={4 / 3}
      />
    ),
  },
  {
    title: 'Writing',
    image: (
      <StaticImage
        src="../../images/services/Pastor-Hip-Hop.png"
        alt="Khanh at the launch event for Pastor Stacey Jones's book"
        width={480}
        aspectRatio={4 / 3}
        transformOptions={{ cropFocus: 'north' }}
      />
    ),
  },
  {
    title: 'Book Endorsement',
    image: (
      <StaticImage
        src="../../images/services/Signed-Book.jpg"
        alt="Signed copy of Pastor Stacey Jones's book, (i)Pastor Hip-Hop"
        width={320}
        objectFit="contain"
      />
    ),
  },
]

const Services = () => (
  <ServicesSection
    id="services"
    className="section section--alt"
    aria-labelledby="services-title"
  >
    <div className="container">
      <div className="section-head">
        <p className="eyebrow">Services</p>
        <h2 id="services-title">Speaking &amp; training services</h2>
        <p>
          In person or virtual, for organizations, campuses, nonprofits,
          churches, and workplaces.
        </p>
      </div>

      <div className="services__grid">
        {services.map(({ title, href, image }) => {
          const content = (
            <>
              <div className="service__media">{image}</div>
              <div className="service__body">
                <h3 className="service__title">{title}</h3>
                {href && (
                  <FiArrowUpRight
                    className="service__link"
                    size={20}
                    aria-hidden="true"
                  />
                )}
              </div>
            </>
          )

          return href ? (
            <a
              key={title}
              className="service reveal"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} (opens in a new tab)`}
            >
              {content}
            </a>
          ) : (
            <div key={title} className="service reveal">
              {content}
            </div>
          )
        })}
      </div>
    </div>
  </ServicesSection>
)

export default Services
