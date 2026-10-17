import React from 'react'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

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
    </ExperienceSection>
  )
}

export default Experience
