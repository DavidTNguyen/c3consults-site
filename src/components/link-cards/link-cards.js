import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FiArrowUpRight } from 'react-icons/fi'

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    transition: transform 0.25s ease, box-shadow 0.25s ease,
      border-color 0.25s ease;
  }

  .card:hover,
  .card:focus-within {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
    border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
  }

  .card__media {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--surface-2);
  }

  .card__media .gatsby-image-wrapper {
    position: absolute;
    inset: 1rem;
    max-width: none !important;
    border-radius: 8px;
  }

  .card__body {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.6rem;
    padding: 1.25rem 1.35rem 1.4rem;
  }

  .card__title {
    font-size: 1.2rem;
  }

  .card__title a {
    color: var(--text);
    text-decoration: none;
  }

  /* Stretch the title link so the whole card is clickable. */
  .card__title a::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  .card__desc {
    color: var(--muted);
    font-size: 0.98rem;
  }

  .card__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: auto;
    padding-top: 0.5rem;
    color: var(--accent);
    font-weight: 650;
    font-size: 0.95rem;
  }
`

const LinkCards = ({ items, ctaLabel }) => {
  const data = useStaticQuery(graphql`
    query MediaCardImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "media" }
        }
      ) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(width: 640, layout: CONSTRAINED)
          }
        }
      }
    }
  `)

  const images = Object.fromEntries(
    data.allFile.nodes.map(node => [node.base, getImage(node)])
  )

  return (
    <Grid>
      {items.map(item => {
        const image = images[item.image]
        return (
          <article className="card reveal" key={item.title}>
            <div className="card__media">
              {image && (
                <GatsbyImage image={image} alt="" objectFit="contain" />
              )}
            </div>
            <div className="card__body">
              <h2 className="card__title">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h2>
              {item.description && (
                <p className="card__desc">{item.description}</p>
              )}
              {item.url && (
                <span className="card__cta" aria-hidden="true">
                  {ctaLabel}
                  <FiArrowUpRight />
                </span>
              )}
            </div>
          </article>
        )
      })}
    </Grid>
  )
}

LinkCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  ctaLabel: PropTypes.string,
}

LinkCards.defaultProps = {
  ctaLabel: 'Open',
}

export default LinkCards
