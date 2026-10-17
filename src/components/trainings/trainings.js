import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import { FiArrowRight, FiAward, FiCheck } from 'react-icons/fi'
import siteConfig from '../../../data/siteConfig'

const TrainingsSection = styled.section`
  .trainings__grid {
    display: grid;
    gap: 2rem clamp(2rem, 5vw, 4rem);
  }

  .training {
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
    min-width: 0;
  }

  .training__num {
    display: block;
    margin-bottom: 0.85rem;
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 750;
    letter-spacing: 0.1em;
  }

  .training h3 {
    font-size: clamp(1.25rem, 2vw, 1.6rem);
  }

  .training p {
    margin-top: 0.85rem;
    max-width: 70ch;
    color: var(--muted);
  }

  .trainings__coaching {
    display: grid;
    gap: 2rem;
    margin-top: clamp(2.5rem, 5vw, 4rem);
    padding: clamp(1.5rem, 4vw, 3rem);
    border-radius: var(--radius);
    background: var(--surface-2);
  }

  .coaching__intro,
  .coaching__details,
  .coaching__assessment {
    min-width: 0;
  }

  .coaching__intro h3 {
    font-size: clamp(1.65rem, 2.5vw, 2.2rem);
  }

  .coaching__details h4 {
    font-size: 1.15rem;
  }

  .coaching__details p {
    margin-top: 0.85rem;
    color: var(--muted);
  }

  .coaching__assessment {
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }

  .certifications {
    display: grid;
    gap: 0.75rem;
    margin: 1.25rem 0 0;
    padding: 0;
    list-style: none;
  }

  .certifications li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--surface);
    line-height: 1.35;
  }

  .certifications__icon {
    flex-shrink: 0;
    margin-top: 0.1rem;
    font-size: 1.25rem;
    color: var(--accent);
  }

  .certifications strong {
    display: block;
  }

  .certifications__issuer {
    display: block;
    margin-top: 0.15rem;
    color: var(--muted);
    font-size: 0.875rem;
  }

  @media (min-width: 720px) {
    .certifications {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .training__credentials {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .training__credentials img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 140px;
    padding: 0.75rem;
    border-radius: var(--radius-sm);
    background: #fff;
  }

  .engagements {
    margin-top: clamp(2.5rem, 5vw, 4rem);
  }

  .engagements__head h3 {
    font-size: clamp(1.5rem, 2.3vw, 2rem);
  }

  .engagements__grid {
    display: grid;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  .engagement {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 0;
    padding: clamp(1.5rem, 3vw, 2rem);
    border: 1px solid var(--border);
    border-top: 4px solid var(--accent);
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
  }

  .engagement__tag {
    align-self: flex-start;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .engagement h4 {
    font-size: 1.3rem;
  }

  .engagement p {
    color: var(--muted);
  }

  .engagement ul {
    display: grid;
    gap: 0.55rem;
    margin: 0.25rem 0 0;
    padding: 0;
    list-style: none;
  }

  .engagement li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    line-height: 1.4;
  }

  .engagement li svg {
    flex-shrink: 0;
    margin-top: 0.15rem;
    color: var(--accent);
  }

  .trainings__footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem 2rem;
    margin-top: 2rem;
  }

  .trainings__note {
    flex: 1 1 360px;
    color: var(--muted);
  }

  .trainings__footer .btn {
    gap: 0.75rem;
  }

  @media (min-width: 860px) {
    .engagements__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .trainings__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .training:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }

    .trainings__coaching {
      grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    }

    .coaching__assessment {
      grid-column: 1 / -1;
    }
  }
`

const topics = siteConfig.skills.filter(skill => skill.category === 'training')
const coaching = siteConfig.skills.filter(skill => skill.category === 'coaching')
const assessments = siteConfig.skills.filter(skill => skill.category === 'assessment')

const Trainings = () => (
  <TrainingsSection
    id="trainings"
    className="section"
    aria-labelledby="trainings-title"
  >
    <div className="container">
      <div className="section-head">
        <p className="eyebrow">Trainings</p>
        <h2 id="trainings-title">Trainings offered</h2>
        <p>
          Interactive sessions that use assessments, games, discussion, and
          simulations to make learning engaging – and change lasting.
        </p>
      </div>

      <div className="trainings__grid">
        {topics.map((topic, i) => (
          <article className="training reveal" key={topic.name}>
            <span className="training__num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>
          </article>
        ))}
      </div>

      <section className="trainings__coaching" aria-labelledby="coaching-title">
        <div className="coaching__intro">
          <p className="eyebrow">Coaching &amp; assessments</p>
          <h3 id="coaching-title">Personal growth, grounded in insight</h3>
        </div>
        <div className="coaching__details">
          {coaching.map(skill => (
            <div key={skill.name}>
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
        {assessments.map(skill => (
          <div className="coaching__assessment coaching__details" key={skill.name}>
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
            {skill.certifications?.length > 0 && (
              <ul className="certifications" aria-label="Certifications">
                {skill.certifications.map(cert => (
                  <li key={cert.name}>
                    <FiAward className="certifications__icon" aria-hidden="true" />
                    <span>
                      <strong>{cert.name}</strong>
                      <span className="certifications__issuer">{cert.issuer}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <div className="training__credentials">
              {skill.images.map(image => (
                <img
                  key={image.src}
                  src={withPrefix(image.src)}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="engagements" aria-labelledby="engagements-title">
        <div className="engagements__head">
          <p className="eyebrow">Ways to work together</p>
          <h3 id="engagements-title">One-time events or ongoing partnership</h3>
        </div>
        <div className="engagements__grid">
          {siteConfig.engagements.map(item => (
            <article className="engagement reveal" key={item.name}>
              <span className="engagement__tag">{item.type}</span>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <ul>
                {item.formats.map(format => (
                  <li key={format}>
                    <FiCheck aria-hidden="true" />
                    {format}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="trainings__footer">
        <p className="trainings__note">
          Not sure which fits? Let&rsquo;s talk about your goals and build the
          right plan together.
        </p>
        <a className="btn btn--primary" href={`mailto:${siteConfig.social.email}`}>
          Start a conversation
          <FiArrowRight aria-hidden="true" />
        </a>
      </div>
    </div>
  </TrainingsSection>
)

export default Trainings
