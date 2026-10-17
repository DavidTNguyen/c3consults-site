import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import siteConfig from '../../data/siteConfig'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PageHeader from '../components/page-header'
import LinkCards from '../components/link-cards'
import Contact from '../components/contact'

const Resources = () => (
  <Layout>
    <PageHeader
      eyebrow="Listen & watch"
      title="Resources"
      lead="Sermons, interviews, and conversations on race, immigration, and the Asian American experience."
      image={
        <StaticImage
          className="page-header__bg"
          src="../images/heroes/pierre-chatel-innocenti-W5INoOK-5eI-unsplash.jpeg"
          alt=""
          layout="fullWidth"
          loading="eager"
          fetchPriority="high"
        />
      }
    />
    <section className="section" aria-label="Resource list">
      <div className="container">
        <LinkCards items={siteConfig.resources} ctaLabel="Watch or listen" />
      </div>
    </section>
    <Contact />
  </Layout>
)

export default Resources

export const Head = ({ location }) => (
  <Seo
    title="Resources"
    description="Sermons, interviews, and conversations with Khanh Nguyễn on race, immigration, and the Asian American experience."
    pathname={location.pathname}
  />
)
