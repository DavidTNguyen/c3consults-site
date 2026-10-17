import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'
import About from '../components/about'
import Journey from '../components/journey'
import Videos from '../components/videos'
import Trainings from '../components/trainings'
import Services from '../components/services'
import Experience from '../components/experience'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Journey />
    <Videos />
    <Trainings />
    <Services />
    <Experience />
    <Testimonials />
    <Contact />
  </Layout>
)

export default Home

export const Head = ({ location }) => <Seo pathname={location.pathname} />
