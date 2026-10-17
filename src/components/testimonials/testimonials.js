import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { testimonials } from '../../../data/testimonials'

const TestimonialsSection = styled.section`
  .testimonials__grid {
    columns: 1;
    column-gap: 1.25rem;
  }

  .testimonial {
    break-inside: avoid;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 0 0 1.25rem;
    padding: 1.6rem;
    border-radius: var(--radius);
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
  }

  .testimonial__mark {
    height: 1.25rem;
    font-size: 3.5rem;
    line-height: 1;
    font-family: Georgia, 'Times New Roman', serif;
    color: var(--accent);
  }

  .testimonial blockquote {
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
  }

  .testimonial figcaption {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding-top: 1.1rem;
    border-top: 1px solid var(--border);
  }

  .testimonial__avatar {
    flex-shrink: 0;
    border-radius: 999px;
    overflow: hidden;
    isolation: isolate;
  }

  .testimonial__name {
    display: block;
    font-weight: 700;
    line-height: 1.3;
  }

  .testimonial__title {
    display: block;
    color: var(--muted);
    font-size: 0.85rem;
    line-height: 1.4;
  }

  @media (min-width: 720px) {
    .testimonials__grid {
      columns: 2;
    }
  }

  @media (min-width: 1080px) {
    .testimonials__grid {
      columns: 3;
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
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              width: 56
              height: 56
              transformOptions: { cropFocus: NORTH }
            )
          }
        }
      }
    }
  `)

  const avatars = Object.fromEntries(
    data.allFile.nodes.map(node => [node.base, getImage(node)])
  )

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

        <div className="testimonials__grid">
          {testimonials.map(t => {
            const avatar = avatars[t.headshot]
            return (
              <figure className="testimonial reveal" key={t.id}>
                <span className="testimonial__mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote dangerouslySetInnerHTML={{ __html: t.quote }} />
                <figcaption>
                  {avatar && (
                    <GatsbyImage
                      className="testimonial__avatar"
                      image={avatar}
                      alt={`Headshot of ${t.client}`}
                    />
                  )}
                  <span>
                    <span className="testimonial__name">{t.client}</span>
                    <span className="testimonial__title">{t.title}</span>
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </TestimonialsSection>
  )
}

export default Testimonials
