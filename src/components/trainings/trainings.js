import React from 'react'
import styled from 'styled-components'
import { FiPlus } from 'react-icons/fi'
import siteConfig from '../../../data/siteConfig'

const TrainingsSection = styled.section`
  .trainings__grid {
    display: grid;
    gap: 1rem;
    align-items: start;
  }

  .training {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .training:hover,
  .training[open] {
    border-color: color-mix(in srgb, var(--accent) 45%, var(--border));
    box-shadow: var(--shadow);
  }

  .training summary {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.35rem;
    cursor: pointer;
    list-style: none;
    font-weight: 700;
    font-size: 1.075rem;
    line-height: 1.35;
  }

  .training summary::-webkit-details-marker {
    display: none;
  }

  .training__num {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 12px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 800;
  }

  .training__title {
    flex: 1;
  }

  .training__icon {
    flex-shrink: 0;
    color: var(--muted);
    transition: transform 0.25s ease;
  }

  .training[open] .training__icon {
    transform: rotate(45deg);
    color: var(--accent);
  }

  .training__body {
    padding: 0 1.35rem 1.35rem calc(1.35rem + 3.5rem);
    color: var(--muted);
    font-size: 1rem;
  }

  .training__body ol {
    margin-top: 0.75rem;
  }

  .training__body li + li {
    margin-top: 0.35rem;
  }

  .training__body img {
    float: left;
    width: auto;
    max-height: 84px;
    margin: 0.25rem 1rem 0.5rem 0;
  }

  .training__body::after {
    content: '';
    display: block;
    clear: both;
  }

  .trainings__note {
    margin-top: 2rem;
    color: var(--muted);
  }

  @media (min-width: 860px) {
    .trainings__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 520px) {
    .training__body {
      padding-left: 1.35rem;
    }
  }
`

// Some descriptions contain <br/> spacing meant for the old layout.
const cleanHtml = html => html.replace(/(?:<br\s*\/?>\s*)+(?=<ol)/gi, '')

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
        {siteConfig.skills.map((skill, i) => (
          <details className="training reveal" key={skill.name}>
            <summary>
              <span className="training__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="training__title">{skill.name}</span>
              <FiPlus className="training__icon" size={22} aria-hidden="true" />
            </summary>
            <div
              className="training__body"
              dangerouslySetInnerHTML={{ __html: cleanHtml(skill.description) }}
            />
          </details>
        ))}
      </div>

      <p className="trainings__note">
        Every training can be customized – from a 30-minute talk or 1-hour
        webinar to a half- or full-day workshop or a 5-week virtual series.
      </p>
    </div>
  </TrainingsSection>
)

export default Trainings
