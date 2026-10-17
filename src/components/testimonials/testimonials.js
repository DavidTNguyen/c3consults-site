import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { testimonials } from '../../../data/testimonials'

const CLAMP_LINES = 6

const TestimonialsSection = styled.section`
  .spotlight {
    display: grid;
    gap: 1.75rem;
  }

  .spotlight__stage {
    position: relative;
    padding: clamp(1.75rem, 4vw, 3rem);
    border-radius: var(--radius);
    background: linear-gradient(135deg, var(--accent-soft), var(--surface) 70%);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
  }

  .spotlight__stage::after {
    content: '';
    position: absolute;
    left: var(--pointer-x, 10%);
    bottom: -11px;
    width: 22px;
    height: 22px;
    background: var(--surface);
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    transform: translateX(-50%) rotate(45deg);
    transition: left 0.35s ease;
  }

  .spotlight__mark {
    position: absolute;
    top: 0.5rem;
    left: 1.25rem;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(5rem, 10vw, 7.5rem);
    line-height: 1;
    color: var(--accent);
    opacity: 0.18;
    pointer-events: none;
  }

  .spotlight__panel {
    position: relative;
    animation: spotlight-in 0.45s ease both;
  }

  .spotlight__panel[hidden] {
    display: none;
  }

  .spotlight__panel blockquote {
    margin: 0;
    font-size: clamp(1.05rem, 1.6vw, 1.3rem);
    line-height: 1.7;
  }

  .spotlight__panel--clamped blockquote {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${CLAMP_LINES};
    overflow: hidden;
  }

  .spotlight__more {
    margin-top: 0.75rem;
    padding: 0;
    border: 0;
    background: none;
    color: var(--accent);
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .spotlight__cite {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin-top: 1.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--border);
  }

  .spotlight__cite-avatar {
    flex-shrink: 0;
    border-radius: 999px;
    overflow: hidden;
    isolation: isolate;
  }

  .spotlight__name {
    display: block;
    font-weight: 700;
    font-style: normal;
  }

  .spotlight__title {
    display: block;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .spotlight__people {
    display: flex;
    gap: 0.5rem;
    margin: 0;
    padding: 0.75rem 0.25rem 0.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .spotlight__people::-webkit-scrollbar {
    display: none;
  }

  .person {
    flex: 0 0 auto;
    width: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.25rem;
    border: 0;
    border-radius: var(--radius-sm);
    background: none;
    color: var(--muted);
    font: inherit;
    font-size: 0.85rem;
    line-height: 1.3;
    text-align: center;
    cursor: pointer;
    scroll-snap-align: center;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .person__avatar {
    border-radius: 999px;
    overflow: hidden;
    isolation: isolate;
    box-shadow: 0 0 0 3px var(--bg), 0 0 0 3px transparent;
    filter: grayscale(0.35);
    transition: box-shadow 0.2s ease, filter 0.2s ease;
  }

  .person:hover,
  .person:focus-visible {
    transform: translateY(-3px);
    color: var(--text);
  }

  .person:hover .person__avatar {
    filter: none;
  }

  .person[aria-selected='true'] {
    color: var(--text);
    font-weight: 700;
  }

  .person[aria-selected='true'] .person__avatar {
    filter: none;
    box-shadow: 0 0 0 3px var(--bg), 0 0 0 6px var(--accent);
  }

  .person:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  @media (min-width: 720px) {
    .spotlight__stage {
      display: flex;
      flex-direction: column;
      min-height: 24rem;
    }

    .spotlight__panel:not([hidden]) {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    .spotlight__cite {
      margin-top: auto;
    }

    .spotlight__panel > :nth-last-child(2) {
      margin-bottom: 1.5rem;
    }

    .spotlight__people {
      justify-content: center;
      overflow: visible;
    }
  }

  @media (min-width: 1080px) {
    .spotlight__stage {
      min-height: 28rem;
    }
  }

  @keyframes spotlight-in {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .spotlight__panel,
    .spotlight__stage::after,
    .person,
    .person__avatar {
      animation: none;
      transition: none;
    }
  }
`


const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialAvatars {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "testimonials" }
        }
      ) {
        nodes {
          base
          thumb: childImageSharp {
            gatsbyImageData(
              layout: FIXED
              width: 72
              height: 72
              transformOptions: { cropFocus: NORTH }
            )
          }
          small: childImageSharp {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              transformOptions: { cropFocus: NORTH }
            )
          }
        }
      }
    }
  `)

  const images = Object.fromEntries(
    data.allFile.nodes.map(node => [
      node.base,
      { thumb: getImage(node.thumb), small: getImage(node.small) },
    ])
  )

  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState({})
  const tabRefs = useRef([])

  const select = index => {
    const next = (index + testimonials.length) % testimonials.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const onKeyDown = event => {
    const keys = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: testimonials.length - 1,
    }
    if (event.key in keys) {
      event.preventDefault()
      select(keys[event.key])
    }
  }

  const [longQuotes, setLongQuotes] = useState({})
  const quoteRefs = useRef({})

  // Only clamp quotes that actually exceed CLAMP_LINES at the current width,
  // so the full text is always shown without JS and never hidden without a toggle.
  useEffect(() => {
    const measure = () => {
      const quote = quoteRefs.current[testimonials[active].id]
      if (!quote) return
      const lineHeight = parseFloat(getComputedStyle(quote).lineHeight)
      const isLong = quote.scrollHeight / lineHeight > CLAMP_LINES + 0.5
      const id = testimonials[active].id
      setLongQuotes(prev => (prev[id] === isLong ? prev : { ...prev, [id]: isLong }))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  const stageRef = useRef(null)
  const peopleRef = useRef(null)
  const [pointerX, setPointerX] = useState(null)

  // Keep the speech-bubble pointer aligned with the selected portrait.
  useEffect(() => {
    const place = () => {
      const stage = stageRef.current?.getBoundingClientRect()
      const tab = tabRefs.current[active]?.getBoundingClientRect()
      if (!stage || !tab) return
      const x = tab.left + tab.width / 2 - stage.left
      setPointerX(Math.min(Math.max(x, 28), stage.width - 28))
    }
    place()
    const row = peopleRef.current
    window.addEventListener('resize', place)
    row?.addEventListener('scroll', place, { passive: true })
    return () => {
      window.removeEventListener('resize', place)
      row?.removeEventListener('scroll', place)
    }
  }, [active])

  return (
    <TestimonialsSection
      id="testimonials"
      className="section section--alt"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-title">What people are saying</h2>
        </div>

        <div className="spotlight reveal">
          <div
            className="spotlight__stage"
            ref={stageRef}
            style={
              pointerX === null ? undefined : { '--pointer-x': `${pointerX}px` }
            }
          >
            <span className="spotlight__mark" aria-hidden="true">
              &ldquo;
            </span>
            {testimonials.map((t, i) => {
              const isLong = longQuotes[t.id]
              const isOpen = expanded[t.id]
              const img = images[t.headshot]?.small
              return (
                <figure
                  key={t.id}
                  id={`testimonial-panel-${t.id}`}
                  role="tabpanel"
                  aria-labelledby={`testimonial-tab-${t.id}`}
                  hidden={i !== active}
                  className={`spotlight__panel${
                    isLong && !isOpen ? ' spotlight__panel--clamped' : ''
                  }`}
                >
                  <blockquote
                    id={`testimonial-quote-${t.id}`}
                    ref={el => (quoteRefs.current[t.id] = el)}
                    dangerouslySetInnerHTML={{ __html: t.quote }}
                  />
                  {isLong && (
                    <button
                      type="button"
                      className="spotlight__more"
                      aria-expanded={Boolean(isOpen)}
                      aria-controls={`testimonial-quote-${t.id}`}
                      onClick={() =>
                        setExpanded(prev => ({ ...prev, [t.id]: !isOpen }))
                      }
                    >
                      {isOpen ? 'Show less' : 'Read full testimonial'}
                    </button>
                  )}
                  <figcaption className="spotlight__cite">
                    {img && (
                      <GatsbyImage
                        className="spotlight__cite-avatar"
                        image={img}
                        alt=""
                      />
                    )}
                    <span>
                      <cite className="spotlight__name">{t.client}</cite>
                      <span className="spotlight__title">{t.title}</span>
                    </span>
                  </figcaption>
                </figure>
              )
            })}
          </div>

          <div
            className="spotlight__people"
            ref={peopleRef}
            role="tablist"
            aria-label="Choose a testimonial"
          >
            {testimonials.map((t, i) => {
              const img = images[t.headshot]?.thumb
              return (
                <button
                  key={t.id}
                  ref={el => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`testimonial-tab-${t.id}`}
                  aria-selected={i === active}
                  aria-controls={`testimonial-panel-${t.id}`}
                  tabIndex={i === active ? 0 : -1}
                  className="person"
                  onClick={() => setActive(i)}
                  onKeyDown={onKeyDown}
                >
                  {img && (
                    <GatsbyImage
                      className="person__avatar"
                      image={img}
                      alt=""
                    />
                  )}
                  <span>{t.client}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </TestimonialsSection>
  )
}

export default Testimonials
