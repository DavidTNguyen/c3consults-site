import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import siteConfig from '../../data/siteConfig'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PageHeader from '../components/page-header'
import LinkCards from '../components/link-cards'
import Contact from '../components/contact'

const Events = () => (
  <Layout>
    <PageHeader
      eyebrow="Events"
      title="Upcoming Events"
      lead="Workshops, webinars, and speaking engagements with Khanh."
      image={
        <StaticImage
          className="page-header__bg"
          src="../images/heroes/Linked-Workshop.jpg"
          alt=""
          layout="fullWidth"
          loading="eager"
          fetchPriority="high"
        />
      }
    />
    <section className="section" aria-label="Event list">
      <div className="container">
        <LinkCards items={siteConfig.events} ctaLabel="Event details" />
      </div>
    </section>
    <Contact />
  </Layout>
)

export default Events

export const Head = ({ location }) => (
  <Seo
    title="Events"
    description="Workshops, webinars, and speaking engagements with Khanh Nguyễn of C3 Consults."
    pathname={location.pathname}
  />
)
