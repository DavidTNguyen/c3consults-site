import React from 'react'
import styled from 'styled-components'
import { FiArrowRight } from 'react-icons/fi'
import siteConfig from '../../../data/siteConfig'

const ContactSection = styled.section`
  .contact__card {
    position: relative;
    overflow: hidden;
    display: grid;
    gap: 2rem;
    align-items: center;
    padding: clamp(2rem, 6vw, 4rem);
    border-radius: calc(var(--radius) * 1.5);
    background: linear-gradient(135deg, #a3101a 0%, #6e0b12 100%);
    color: #fff;
    box-shadow: var(--shadow);
  }

  .contact__card::after {
    content: '';
    position: absolute;
    right: -120px;
    top: -120px;
    width: 360px;
    height: 360px;
    border-radius: 999px;
    border: 36px solid rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }

  .eyebrow {
    color: rgba(255, 255, 255, 0.85);
  }

  p {
    max-width: 58ch;
    margin-top: 0.85rem;
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.1rem;
  }

  .contact__actions {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .btn--light {
    background: #fff;
    color: #86101a;
  }

  .btn--light:hover {
    background: #fbeceb;
    color: #86101a;
  }

  .btn--ghost {
    color: #fff;
  }

  @media (min-width: 900px) {
    .contact__card {
      grid-template-columns: 1.4fr auto;
    }
  }
`

const Contact = () => {
  const { social } = siteConfig

  return (
    <ContactSection
      id="contact"
      className="section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__card reveal">
          <div>
            <p className="eyebrow">Let&rsquo;s work together</p>
            <h2 id="contact-title">
              Ready to grow your team&rsquo;s cultural competency?
            </h2>
            <p>
              Tell me about your group and goals – I&rsquo;d love to customize a
              training that fits your needs.
            </p>
          </div>
          <div className="contact__actions">
            {social.email && (
              <a className="btn btn--light" href={`mailto:${social.email}`}>
                Email Khanh
                <FiArrowRight aria-hidden="true" />
              </a>
            )}
            {social.linkedin && (
              <a
                className="btn btn--ghost"
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </ContactSection>
  )
}

export default Contact
