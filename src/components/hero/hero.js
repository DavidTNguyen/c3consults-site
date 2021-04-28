import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

const Hero = ({ className, title }) => (
  <HeroContainer className={className}>
    <TitleContainer>
      <Container fluid>
        <Row>
          <Col xs={4} className="avatar">
            <Row>
              <Col>
                <img
                  className="logo__image"
                  src={withPrefix(siteConfig.logo)}
                  alt="c3 logo"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <HeroTitle>{title}</HeroTitle>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </TitleContainer>
  </HeroContainer>
)

export default styled(Hero)`
  ${p =>
    `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 100vh;
  background-attachment: fixed;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  .logo__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 350px;
    border-radius: 100px;
    margin: 0 auto 24px;
    /* Add the blur effect */
    // filter: blur(3px);
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }
`
