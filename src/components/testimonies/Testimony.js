import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Testimony = ({
  id,
  title,
  client,
  theme,
  headshot,
  quote,
  className,
}) => {
  console.log(`Testimony Card ${theme}`)
  return (
    <article key={id} className="testimony_item">
      <div className="inner">
        <li>
          <img
            className="avatar__image"
            src={`/images/${headshot}`}
            alt="user avatar"
          />

          <h2
            gutterBottom
            variant="h5"
            component="h2"
            className="testimony__card-title"
          >
            {client}
          </h2>
          <h3
            gutterBottom
            variant="h6"
            component="h2"
            className="testimony__card-title--small"
          >
            {title}
          </h3>
          <p
            variant="body2"
            color="textSecondary"
            component="p"
            className="testimony__card"
          >
            {quote}
          </p>
        </li>
      </div>
    </article>
  )
}

export default styled(Testimony)`
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
`
