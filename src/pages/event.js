import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from 'gatsby'
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0, 0, 0, 0.51);
`

const EventCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) =>
    href &&
    css`
      &:hover ${Image} {
        transition: transform 0.5s;
        transform: translateY(-5px);
      }
    `}
`

const Event = ({ className, location }) => {
  const title = 'Upcoming Events'
  const { keywords, events } = siteConfig
  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />

      <Hero
        heroImg={withPrefix('/images/Linked-Workshop.jpg')}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {events.map(event => (
              <Col key={event.title} align="center">
                <EventCard
                  as={event.url ? 'a' : 'div'}
                  href={event.url}
                  target="_blank"
                >
                  <Image src={withPrefix(event.image)} />
                  <h3>{event.title}</h3>
									<p>{event.description}</p>
                </EventCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Event)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`
