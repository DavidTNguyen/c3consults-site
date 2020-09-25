import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from '@reach/router'
import { testimonials } from '../../../data/testimonials'

export default function Testimonial({ id }) {
  const { client, title, quote } = testimonials.find(
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
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
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

    .card-content-container.open {
      padding: 0;
    }
  }
`
