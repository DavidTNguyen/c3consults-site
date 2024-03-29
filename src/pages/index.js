import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa'
import { withPrefix } from 'gatsby'
import loadable from '@loadable/component'
import siteConfig from '../../data/siteConfig'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import Videos from '../components/videos'
import About from '../components/about'
import Skill from '../components/skill'
import Timeline from '../components/timeline'
import Testimonies from '../components/testimonies'
import Offerings from '../components/offerings'

const Layout = loadable(() => import('../components/layout'))

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  opacity: 0.2;
`

const Home = ({ className, location }) => {
  // validate siteConfig settings
  if (siteConfig.googleAnalyticsId === 'UA-000000000-1') {
    console.error(
      'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
    )
  }

  const title = siteConfig.siteTitle
  // const title = 'Under Construction!'
  const { keywords } = siteConfig
  // const id = null

  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />

      <Hero heroImg={siteConfig.siteCover} title={title} />
      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            <Col xs={4} className="avatar">
              <Row>
                <Col>
                  <img
                    className="avatar__image"
                    src={withPrefix(siteConfig.authorAvatar)}
                    alt="user avatar"
                  />
                </Col>
                {/* <Col>
                  <img
                    className="logo__image"
                    src={withPrefix(siteConfig.logo)}
                    alt="c3 logo"
                  />
                </Col> */}
              </Row>
              <div className="social">
                {siteConfig.social.linkedin && (
                  <a
                    className="social-link linkedin"
                    target="_blank"
                    href={siteConfig.social.linkedin}
                  >
                    <FaLinkedin className="social-icon" size="32" />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    className="social-link facebook"
                    target="_blank"
                    href={siteConfig.social.facebook}
                  >
                    <FaFacebook className="social-icon" size="32" />
                  </a>
                )}
                {siteConfig.social.email && (
                  <a
                    className="social-link email"
                    target="_blank"
                    href={`mailto:${siteConfig.social.email}`}
                  >
                    <FaEnvelope className="social-icon" size="32" />
                  </a>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Videos />
            </Col>
          </Row>
          <Separator />
          <Row>
            <Col>
              <About title="Bio" text={siteConfig.authorDescription} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Skill />
              </Row>
            </Col>
          </Row>
          <Separator />
          <Row>
            <Col>
              <Offerings />
            </Col>
          </Row>
          <Separator />
          <Row>
            <Col>
              <Timeline />
            </Col>
          </Row>
          <Separator />
          <Row>
            <Col>
              <Testimonies />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .logo__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 350px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.facebook:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`
