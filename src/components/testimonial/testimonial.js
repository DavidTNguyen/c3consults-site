import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { testimonials } from '../../../data/testimonials'

const Testimonial = ({ id }) => {
  const { client, title, quote, headshot } = testimonials.find(
    testimonial => testimonial.id === id
  )

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${headshot}`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="client">{client}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            {quote}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default styled(Testimonial)`
.screen {
  width: 100%;
  height: 100%;
}

.container {
  max-width: 990px;
  flex: 1 1 100%;
  padding: 45px 25px;
}

h1 {
  font-weight: bold;
  color: white;
  margin: 6px 0 12px;
}

.date {
  color: var(--secondary);
  font-size: 14px;
  text-transform: uppercase;
}

header {
  border-bottom: 1px solid var(--divider);
  position: relative;
}

.avatar {
  background: var(--divider);
  border-radius: 50%;
  position: absolute;
  bottom: 12px;
  right: 0;
  overflow: hidden;
}

.avatar,
.avatar img {
  width: 40px;
  height: 40px;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.card {
  position: relative;
  padding: 25px;
  height: 460px;
  flex: 0 0 40%;
  max-width: 40%;
}

.card:nth-child(4n + 1),
.card:nth-child(4n + 4) {
  flex: 0 0 60%;
  max-width: 60%;
}

.card:nth-child(odd) {
  padding-left: 0;
}

.card:nth-child(even) {
  padding-right: 0;
}

.card-content-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  pointer-events: none;
}

.card-content-container.open {
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  overflow: hidden;
  padding: 40px 0;
}

.card-content {
  pointer-events: auto;
  position: relative;
  border-radius: 20px;
  background: #1c1c1e;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.open .card-content {
  height: auto;
  max-width: 700px;
  overflow: hidden;
  pointer-events: none;
}

.card-open-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.card-image-container {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 420px;
  width: 100vw;
}

.open .card-image-container,
.open .title-container {
  z-index: 1;
}

.title-container {
  position: absolute;
  top: 15px;
  left: 15px;
  max-width: 300px;
}

.open .title-container {
  top: 30px;
  left: 30px;
}

h2 {
  color: #fff;
  margin: 8px 0;
}

.client {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
}

.overlay {
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 990px;
}

.overlay a {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  left: 50%;

  transform: translateX(-50%);
}

.content-container {
  padding: 460px 35px 35px 35px;
  max-width: 700px;
  width: 90vw;
}

p {
  color: #9d9ca1;
  font-size: 20px;
  line-height: 28px;
}

@media only screen and (max-width: 800px) {
  .card {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .card:nth-child(4n + 1),
  .card:nth-child(4n + 4) {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  .card {
    flex: 1 0 100%;
    max-width: 100%;
    padding: 10px;
    padding-left: 0;
    padding-right: 0;
  }

  .card:nth-child(4n + 1),
  .card:nth-child(4n + 4) {
    flex: 1 0 100%;
    max-width: 100%;
  }
}
`
