import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from 'gatsby'
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import IconButton from '@material-ui/core/IconButton'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0, 0, 0, 0.51);
`

const TeamMemberCard = styled.a`
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

const TeamMember = ({ className, location }) => {
  const title = 'Our Team'
  const { keywords, team } = siteConfig
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
            {team.map(member => (
              <Col key={member.title} align="center">
                <TeamMemberCard
                  as={member.url ? 'a' : 'div'}
                  href={member.url}
                  target="_blank"
                >
                  <Image src={withPrefix(member.image)} />
                  <p>
                    <IconButton
                      aria-label="Linkedin.com"
                      onClick={() =>
                        window.open(`${member.linkedin}`, '_blank')
                      }
                    >
                      <LinkedInIcon fontSize="large" />
                    </IconButton>{' '}
                    <IconButton
                      aria-label="Linkedin.com"
                      onClick={() =>
                        window.open(`${member.twitter}`, '_blank')
                      }
                    >
                      <TwitterIcon fontSize="large" />
                    </IconButton>
                  </p>
                  <h3>{member.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: member.bio }}></p>
                </TeamMemberCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(TeamMember)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`
