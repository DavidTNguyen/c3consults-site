import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'
import clientSources from '../../../static/images/clients/sources.json'

const ExperienceSection = styled.section`
  .experience__grid {
    display: grid;
    gap: clamp(2rem, 5vw, 4rem);
  }

  .timeline {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    left: 7px;
    width: 2px;
    background: linear-gradient(var(--accent), var(--border));
    border-radius: 2px;
  }

  .timeline__item {
    position: relative;
    padding-left: 2.5rem;
  }

  .timeline__item + .timeline__item {
    margin-top: 2.25rem;
  }

  .timeline__item::before {
    content: '';
    position: absolute;
    top: 0.4rem;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: var(--bg);
    border: 3px solid var(--accent);
  }

  .timeline__role {
    font-size: 1.2rem;
  }

  .timeline__org {
    margin-top: 0.15rem;
    color: var(--accent);
    font-weight: 600;
    font-size: 0.95rem;
  }

  .timeline__desc {
    margin-top: 0.6rem;
    color: var(--muted);
    max-width: 64ch;
  }

  .experience__clients {
    margin-top: clamp(2.5rem, 5vw, 4rem);
  }

  .clients__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
    gap: 1rem;
    padding: 0;
    margin-top: 1.5rem;
    list-style: none;
  }

  .client {
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
  }

  .client__logo {
    display: grid;
    place-items: center;
    height: 160px;
    padding: 1.5rem;
    background: #fff;
  }

  .client__logo--dark {
    background: #252021;
  }

  .client__logo img {
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: contain;
  }

  .client__name {
    padding: 1rem 1.25rem;
    border-top: 1px solid var(--border);
    font-size: 1rem;
    font-weight: 650;
    line-height: 1.45;
    text-align: center;
  }

  @media (min-width: 900px) {
    .experience__grid {
      grid-template-columns: 0.8fr 1.2fr;
    }

    .experience__intro {
      position: sticky;
      top: calc(var(--header-h) + 2rem);
      align-self: start;
    }
  }
`

const Experience = () => {
  const { jobs } = siteConfig
  if (!jobs || !jobs.length) return null

  return (
    <ExperienceSection
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="container experience__grid">
        <div className="experience__intro section-head">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">A career built across cultures</h2>
          <p>
            Over 25 years of multi-ethnic leadership in higher education,
            churches, and nonprofits – locally and across five continents.
          </p>
        </div>

        <ol className="timeline">
          {jobs.map(job => {
            const org = job.company && job.company.trim()
            return (
              <li className="timeline__item reveal" key={`${job.occupation}-${org}`}>
                <h3 className="timeline__role">{job.occupation}</h3>
                {org && <p className="timeline__org">{org}</p>}
                <p className="timeline__desc">{job.description}</p>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="container experience__clients">
        <h3 id="clients-title">Clients I have worked with</h3>
        <ul className="clients__grid" aria-labelledby="clients-title">
          {clientSources.logos.map(client => (
            <li className="client reveal" key={client.file}>
              <div
                className={`client__logo${client.background === 'dark' ? ' client__logo--dark' : ''}`}
              >
                <img
                  src={withPrefix(`/images/clients/${client.file}`)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="client__name">{client.organization}</p>
            </li>
          ))}
        </ul>
      </div>
    </ExperienceSection>
  )
}

export default Experience
