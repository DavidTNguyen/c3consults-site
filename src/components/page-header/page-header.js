import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  min-height: clamp(260px, 38vw, 380px);
  padding-block: 3rem;
  color: #fff;
  background: #1d1b19;

  .page-header__bg {
    position: absolute !important;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
        180deg,
        rgba(18, 16, 17, 0.25) 0%,
        rgba(18, 16, 17, 0.85) 100%
      ),
      linear-gradient(90deg, rgba(110, 11, 18, 0.55), transparent 70%);
  }

  .eyebrow {
    color: #fff;
  }

  .page-header__lead {
    max-width: 60ch;
    margin-top: 0.85rem;
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.85);
  }
`

const PageHeader = ({ eyebrow, title, lead, image }) => (
  <Header aria-labelledby="page-title">
    {image}
    <div className="container">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 id="page-title">{title}</h1>
      {lead && <p className="page-header__lead">{lead}</p>}
    </div>
  </Header>
)

PageHeader.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  image: PropTypes.node,
}

export default PageHeader
