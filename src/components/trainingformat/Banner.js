import React from 'react'
import styled from 'styled-components'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core'

const Banner = props => {
  if (props.newProp) console.log(props.newProp)
  const contentPosition = props.contentPosition ? props.contentPosition : 'left'
  const totalItems = props.length ? props.length : 3
  const mediaLength = totalItems - 1

  let items = []
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="banner-content">
        <Typography className="banner-title">{props.item.Name}</Typography>

        <Typography className="banner-caption">{props.item.Caption}</Typography>
      </CardContent>
    </Grid>
  )

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i]

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia
          className="banner-media"
          image={item.Image}
          title={item.Name}
        >
          <Typography className="banner-media-caption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    )

    items.push(media)
  }

  if (contentPosition === 'left') {
    items.unshift(content)
  } else if (contentPosition === 'right') {
    items.push(content)
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content)
  }

  return (
    <Card raised className="banner">
      <Grid container spacing={0} className="banner-grid">
        {items}
      </Grid>
    </Card>
  )
}

export default styled(Banner)`
  .banner {
    height: 100%;
    position: relative;
  }

  .banner banner-media {
    background-color: white;
    height: 100%;
    overflow: hidden;

    position: relative;

    transition: 300ms;
    cursor: pointer;
    &:hover {
      filter: brightness(115%);
    }
  }

  .banner banner-media-caption {
    text-overflow: ellipsis;

    position: absolute;
    bottom: 0;

    padding: 15px;

    background-color: black;
    color: white;
    opacity: 0.6;

    width: 100%;
    height: 10%;

    font: {
      size: $header-font-size;
      weight: 200;
    }

    transition: 300ms;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  .banner banner-grid {
    height: 100%;
  }

  .banner banner-content {
    color: white;
    background-color: $dark-red;
    height: 100%;

    cursor: pointer;

    padding: 30px;

    transition: 300ms;

    &:hover,
    &:active {
      background-color: $dark-red-active;
    }
  }

  .banner banner-title {
    font-size: $huge-font-size;
    font-weight: 500;
  }

  .banner banner-caption {
    margin-top: 10px;
    font-size: $bigger-font-size;
  }

  .banner view-button {
    margin-top: 40px;
    color: white;

    font-size: $header-font-size;
    border: 3px solid white;
    text-transform: capitalize;

    transition: 200ms;
  }
`
