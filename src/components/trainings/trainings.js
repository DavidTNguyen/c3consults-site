import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import { FiArrowRight } from 'react-icons/fi'
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
    max-height: 120px;
    padding: 0.75rem;
    border-radius: var(--radius-sm);
    background: #fff;
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

      <div className="trainings__footer">
        <p className="trainings__note">
          Every training can be customized – from a 30-minute talk or 1-hour
          webinar to a half- or full-day workshop or a 5-week virtual series.
        </p>
        <a className="btn btn--primary" href={`mailto:${siteConfig.social.email}`}>
          Discuss a training
          <FiArrowRight aria-hidden="true" />
        </a>
      </div>
    </div>
  </TrainingsSection>
)

export default Trainings
