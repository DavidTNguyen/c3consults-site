import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import siteConfig from '../../../data/siteConfig'

const AboutSection = styled.section`
  .about__grid {
    display: grid;
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: start;
  }

  .about__card {
    max-width: 380px;
    margin-inline: auto;
    width: 100%;
  }

  .about__photo {
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
  }

  .about__name {
    margin-top: 1.25rem;
    font-size: 1.35rem;
  }

  .about__role {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .about__social {
    display: flex;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .about__social a {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--muted);
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  .about__social a:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  .about__bio {
    margin-top: 1.25rem;
    font-size: 1.075rem;
    color: var(--text);
  }

  .about__bio p {
    max-width: 68ch;
  }

  @media (min-width: 900px) {
    .about__grid {
      grid-template-columns: 340px 1fr;
    }

    .about__card {
      position: sticky;
      top: calc(var(--header-h) + 2rem);
    }
  }
`

// The bio in siteConfig uses <br/><br/> to separate paragraphs.
const paragraphs = siteConfig.authorDescription
  .split(/(?:<br\s*\/?>\s*){2,}/i)
  .map(p => p.trim())
  .filter(Boolean)

const About = () => {
  const { social, authorShortName, authorRole } = siteConfig

  return (
    <AboutSection id="about" className="section" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__card reveal">
          <div className="about__photo">
            <StaticImage
              src="../../images/headshot.jpg"
              alt={`Portrait of ${authorShortName}`}
              width={380}
              aspectRatio={4 / 5}
              transformOptions={{ cropFocus: 'north' }}
            />
          </div>
          <h3 className="about__name">{authorShortName}</h3>
          <p className="about__role">{authorRole}</p>
          <div className="about__social">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
              >
                <FaLinkedinIn size={17} aria-hidden="true" />
              </a>
            )}
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (opens in a new tab)"
              >
                <FaFacebookF size={16} aria-hidden="true" />
              </a>
            )}
            {social.email && (
              <a href={`mailto:${social.email}`} aria-label="Email">
                <FiMail size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title">Hi, I&rsquo;m Khanh.</h2>
          <div className="about__bio">
            {paragraphs.map((html, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
            ))}
          </div>
        </div>
      </div>
    </AboutSection>
  )
}

export default About
