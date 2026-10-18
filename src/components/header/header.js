import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { FiSun, FiMoon } from 'react-icons/fi'
import siteConfig from '../../../data/siteConfig'

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--header-bg);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid var(--border);
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: var(--header-h);
`

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--text);
  text-decoration: none;
  flex-shrink: 0;

  &:hover {
    color: var(--text);
  }

  .brand__logo {
    display: block;
    width: 100px;
  }

  @media (min-width: 720px) {
    .brand__logo {
      width: 110px;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  ul {
    display: flex;
    gap: 0.15rem;
    list-style: none;
    padding: 0;
  }

  .nav__link {
    display: block;
    padding: 0.5rem 0.7rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  .nav__link:hover {
    color: var(--text);
    background: var(--surface-2);
  }

  .nav__link[aria-current='page'] {
    color: var(--accent);
    background: var(--accent-soft);
  }

  .nav__cta {
    display: none;
    min-height: 40px;
    padding: 0.55rem 1.1rem;
    margin-left: 0.5rem;
    font-size: 0.95rem;
  }

  @media (min-width: 900px) {
    gap: 0.5rem;

    .nav__link {
      padding: 0.5rem 0.95rem;
    }

    .nav__cta {
      display: inline-flex;
    }
  }
`

const ThemeToggle = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  color: var(--muted);
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: var(--text);
    background: var(--surface-2);
  }

  .icon--sun {
    display: none;
  }

  [data-theme='dark'] & .icon--sun {
    display: block;
  }

  [data-theme='dark'] & .icon--moon {
    display: none;
  }
`

const toggleTheme = () => {
  if (typeof window === 'undefined' || !window.__setPreferredTheme) return
  window.__setPreferredTheme(window.__theme === 'dark' ? 'light' : 'dark')
}

const Header = () => {
  const { headerLinks, social, enableDarkmode, siteShortName } = siteConfig

  return (
    <Bar>
      <Inner className="container">
        <Brand to="/" aria-label={`${siteShortName} home`}>
          <StaticImage
            className="brand__logo"
            src="../../images/c3-logo.png"
            alt="C3 Cultural Competency Consulting"
            width={110}
            placeholder="none"
            loading="eager"
          />
        </Brand>

        <Nav aria-label="Main">
          <ul>
            {headerLinks.map(link => (
              <li key={link.url}>
                <Link className="nav__link" to={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {enableDarkmode && (
            <ThemeToggle
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              <FiMoon className="icon--moon" size={19} aria-hidden="true" />
              <FiSun className="icon--sun" size={19} aria-hidden="true" />
            </ThemeToggle>
          )}
          {social.email && (
            <a
              className="btn btn--primary nav__cta"
              href={`mailto:${social.email}`}
            >
              Book Khanh
            </a>
          )}
        </Nav>
      </Inner>
    </Bar>
  )
}

export default Header
