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

const ResourceCard = styled.a`
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

const Resource = ({ className, location }) => {
  const title = 'Resources'
  const { keywords, resources } = siteConfig
  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />

      <Hero
        heroImg={withPrefix(
          '/images/pierre-chatel-innocenti-W5INoOK-5eI-unsplash.jpeg'
        )}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {resources.map(res => (
              <Col key={res.title} align="center">
                <ResourceCard
                  as={res.url ? 'a' : 'div'}
                  href={res.url}
                  target="_blank"
                >
                  <Image src={withPrefix(res.image)} />
                  <p>{res.title}</p>
                </ResourceCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Resource)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`
