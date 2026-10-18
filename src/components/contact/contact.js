import React, { useState } from 'react'
import styled from 'styled-components'
import { FiArrowRight } from 'react-icons/fi'
import siteConfig from '../../../data/siteConfig'

const ContactSection = styled.section`
  .contact__card {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
    align-items: center;
    padding: clamp(1.25rem, 6vw, 4rem);
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
    margin-top: 1rem;
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

  .contact__form {
    position: relative;
    z-index: 1;
    min-width: 0;
  }

  .contact__fields {
    display: grid;
    gap: 1rem;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .contact__field {
    display: grid;
    gap: 0.35rem;
    font-weight: 600;
  }

  .contact__field input,
  .contact__field textarea {
    width: 100%;
    min-width: 0;
    padding: 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--surface);
    color: var(--text);
    font-size: 1rem;
    font-weight: 400;
  }

  .contact__field textarea {
    min-height: 150px;
    resize: vertical;
  }

  .contact__form :focus-visible {
    outline-color: #fff;
  }

  .contact__fields .btn {
    justify-self: start;
  }

  .contact__fields:disabled .btn {
    cursor: wait;
    opacity: 0.7;
    transform: none;
  }

  .contact__privacy {
    font-size: 0.875rem;
  }

  .contact__privacy a {
    color: inherit;
  }

  @media (min-width: 900px) {
    .contact__card {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`

const Contact = () => {
  const { social } = siteConfig
  const [status, setStatus] = useState('idle')

  const handleSubmit = async event => {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('sending')

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

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
          <form
            className="contact__form"
            action="https://formspree.io/f/xppqnaga"
            method="POST"
            aria-label="Contact Khanh"
            aria-busy={status === 'sending'}
            onSubmit={handleSubmit}
          >
            <fieldset className="contact__fields" disabled={status === 'sending'}>
              <legend className="sr-only">Send Khanh a message</legend>
              <label className="contact__field" htmlFor="contact-name">
                Name (required)
                <input id="contact-name" name="name" autoComplete="name" required />
              </label>
              <label className="contact__field" htmlFor="contact-email">
                Email (required)
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="contact__field" htmlFor="contact-message">
                Message (required)
                <textarea id="contact-message" name="message" rows={5} required />
              </label>
              <div hidden>
                <label htmlFor="contact-website">Leave this field empty</label>
                <input
                  id="contact-website"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <button className="btn btn--light" type="submit">
                {status === 'sending' ? 'Sending...' : 'Send message'}
                <FiArrowRight aria-hidden="true" />
              </button>
            </fieldset>
            <p className="contact__privacy">
              This form uses{' '}
              <a href="https://formspree.io/legal/privacy-policy/">Formspree</a>{' '}
              to deliver your message. Please don&rsquo;t include sensitive information.
            </p>
            <div role="status" aria-live="polite" aria-atomic="true">
              {status === 'sending' && <p>Sending your message...</p>}
              {status === 'success' && (
                <p>Thank you! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p>
                  Your message could not be sent. Please try again or use the
                  Email Khanh link. Your message is still in the form.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </ContactSection>
  )
}

export default Contact
