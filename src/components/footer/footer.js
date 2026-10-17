import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import siteConfig from '../../../data/siteConfig'

const FooterBar = styled.footer`
  border-top: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  font-size: 0.95rem;

  .footer__grid {
    display: grid;
    gap: 2rem;
    padding-block: 3rem 2rem;
  }

  .footer__name {
    color: var(--text);
    font-weight: 800;
    font-size: 1.1rem;
  }

  .footer__about p {
    max-width: 38ch;
    margin-top: 0.5rem;
  }

  .footer__heading {
    margin-bottom: 0.75rem;
    color: var(--text);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 0.4rem;
  }

  a {
    color: var(--muted);
    text-decoration: none;
  }

  a:hover {
    color: var(--accent);
  }

  .footer__social {
    display: flex;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .footer__social a {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid var(--border);
    transition: color 0.2s ease, border-color 0.2s ease,
      background-color 0.2s ease;
  }

  .footer__social a:hover {
    border-color: var(--accent);
    background: var(--accent-soft);
  }

  .footer__bottom {
    padding-block: 1.25rem 2rem;
    border-top: 1px solid var(--border);
    font-size: 0.85rem;
  }

  @media (min-width: 720px) {
    .footer__grid {
      grid-template-columns: 2fr 1fr 1fr;
    }
  }
`

const Footer = () => {
  const { social, headerLinks, authorName, siteShortName } = siteConfig

  return (
    <FooterBar>
      <div className="container footer__grid">
        <div className="footer__about">
          <div className="footer__name">{siteShortName}</div>
          <p>
            Cultural competency, anti-racism, and intercultural training that
            motivates, educates, and activates.
          </p>
          <div className="footer__social">
            {social.email && (
              <a href={`mailto:${social.email}`} aria-label="Email">
                <FiMail size={18} aria-hidden="true" />
              </a>
            )}
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
          </div>
        </div>

        <nav aria-label="Footer">
          <div className="footer__heading">Explore</div>
          <ul>
            {headerLinks.map(link => (
              <li key={link.url}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <div className="footer__heading">Contact</div>
          <ul>
            {social.email && (
              <li>
                <a href={`mailto:${social.email}`}>{social.email}</a>
              </li>
            )}
            {social.linkedin && (
              <li>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        © {new Date().getFullYear()} {authorName} · {siteShortName}
      </div>
    </FooterBar>
  )
}

export default Footer
