import React from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import { testimonials } from '../../../data/testimonials'

const Testimonies = ({ className }) => {
  return (
    <div className={className}>
      <h2>Testimonies</h2>
      {testimonials.map(testimony => (
        <article
          key={testimony.id}
          className="testimony__item animate-on-scroll"
        >
          <div className="inner">
            <img
              className="testimony__image testimony__client"
              src={`/images/${testimony.headshot}`}
              alt="user avatar"
            />

            <div className="testimony__card">
              <h2 className="testimony__card-title">
                {testimony.client}
                <br />
                <small className="testimony__card-title--small">
                  {testimony.title}
                </small>
              </h2>
              <p>{testimony.quote}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default styled(Testimonies)`
  position: relative;
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin: 70px 0 0 -1px;
    width: 1px;
    height: calc(100% - 70px);
    background: ${({ theme }) => theme.colors.primary};
  }
  .testimony__item {
    width: 100%;
    margin: 0 0 20px 0;
    position: relative;
  }
  .testimony__item:after {
    content: '';
    display: block;
    clear: both;
  }
  .testimony__item div.inner {
    width: 100%;
    float: left;
    margin: 85px 0 0 0;
  }
  .testimony__client {
    display: block;
    padding: 3px 5px;
    position: absolute;
    top: 0;
    left: 42%;
    margin: 0 0 0 -30px;
    border-radius: 100%;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: 0 0 0 7px ${({ theme }) => theme.colors.background};
  }
  .testimony__client span {
    display: block;
    text-align: center;
  }
  .testimony__card {
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transform: translate(-50%);
  }
  .testimony__card-title {
    padding: 15px;
    margin: 0;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 3px 3px 0 0;
    position: relative;
  }
  .testimony__card-title:after {
    content: '';
    position: absolute;
    top: -5px;
    left: 30%;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
  }
  .testimony__item div.inner p {
    padding: 15px;
    margin: 0;
    font-size: 14px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
    border-radius: 0 0 6px 6px;
  }
  .testimony__item:nth-child(2n + 2) div.inner {
    float: right;
    .testimony__card {
      transform: translate(50%);
    }
  }
  .testimony__card-title {
    // background: #BA0E0E
    background: ${({ theme }) => theme.colors.primary};
  }
  .testimony__card-title:after {
    background: ${({ theme }) => theme.colors.primary};
  }
  .testimony__card-title--small {
    font-size: 10px;
  }

  .testimony__item.is-visible div.inner {
    .testimony__card {
      transition: transform 0.8s ease-in;
      transform: translate(0);
    }
  }

  ${p => config(p).media['sm']`
    .testimony__item div.inner {
      width: 40%;
      margin: 5px 0 0 0;
    }

    .testimony__item div.inner h2:after {
      top: 20px;
      left: unset;
      right: -5px;
    }
    .testimony__item:nth-child(2n+2) div.inner h2:after {
      left: -5px;
    }
  `}

  .testimony__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 120px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }
`
