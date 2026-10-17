import React from 'react'
import { Link, withPrefix } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFound = styled.section`
  text-align: center;

  img {
    width: 160px;
    margin: 0 auto 2rem;
  }

  p {
    max-width: 48ch;
    margin: 1rem auto 2rem;
    color: var(--muted);
    font-size: 1.1rem;
  }
`

const NotFoundPage = () => (
  <Layout>
    <NotFound className="section">
      <div className="container">
        <img
          src={withPrefix('/images/ufo-and-cow.svg')}
          alt=""
          width="160"
          height="160"
        />
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          Looks like you&rsquo;ve followed a broken link or entered a URL that
          doesn&rsquo;t exist on this site.
        </p>
        <Link className="btn btn--primary" to="/">
          Back to home
        </Link>
      </div>
    </NotFound>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="Page not found" />
