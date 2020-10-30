import React, { useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from '@material-ui/core'

export default styled(props => {
  const [autoPlay, setAutoPlay] = useState(true)
  const [timer, setTimer] = useState(1000)
  const [animation, setAnimation] = useState('slide')
  const [indicators, setIndicators] = useState(true)
  const [timeout, setTimeout] = useState(1000)
  const [navButtonsAlwaysVisible, setNavButtonsAlwaysVisible] = useState(false)
  const [navButtonsAlwaysInvisible, setNavButtonsAlwaysInvisible] = useState(
    false
  )

  const items = [
    {
      Name: 'Workshop',
      Caption: 'Immersive Learning!',
      contentPosition: 'left',
      Items: [
        {
          Name: 'Workshop',
          Image: 'https://source.unsplash.com/featured/?presenter',
        },
        {
          Name: 'Classroom',
          Image: 'https://source.unsplash.com/featured/?teacher',
        },
      ],
    },
    {
      Name: 'Webinar',
      Caption: 'Virtual Conference!',
      contentPosition: 'middle',
      Items: [
        {
          Name: 'Washing Machine WX9102',
          Image: 'https://source.unsplash.com/featured/?studio',
        },
        {
          Name: 'Learus Vacuum Cleaner',
          Image: 'https://source.unsplash.com/featured/?zommconference',
        },
      ],
    },
    {
      Name: 'Consultation',
      Caption: 'IDI Training!',
      contentPosition: 'right',
      Items: [
        {
          Name: 'Consultation',
          Image: 'https://source.unsplash.com/featured/?studying',
        },
        {
          Name: 'Training',
          Image: 'https://source.unsplash.com/featured/?students',
        },
      ],
    },
  ]

  return (
    <Carousel
      className="Example"
      autoPlay={autoPlay}
      timer={timer}
      animation={animation}
      indicators={indicators}
      timeout={timeout}
      navButtonsAlwaysVisible={navButtonsAlwaysVisible}
      navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
      next={(now, previous) =>
        console.log(
          `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
      prev={(now, previous) =>
        console.log(
          `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
      onChange={(now, previous) =>
        console.log(
          `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
    >
      {items.map((item, index) => {
        return (
          <Banner
            item={item}
            key={index}
            contentPosition={item.contentPosition}
          />
        )
      })}
    </Carousel>
  )
})`
  .Banner {
    height: 100%;
    position: relative;

    .Media {
      background-color: white;
      height: 100%;
      overflow: hidden;

      position: relative;

      .MediaCaption {
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

      transition: 300ms;
      cursor: pointer;
      &:hover {
        filter: brightness(115%);
      }
    }

    .BannerGrid {
      height: 100%;
    }

    .Content {
      color: white;
      background-color: $dark-red;
      height: 100%;

      cursor: pointer;

      padding: 30px;

      transition: 300ms;

      &:hover,
      &:active {
        background-color: $dark-red-active;

        .ViewButton {
          background-color: $almost-white;
          color: $dark-red;
        }
      }

      .Title {
        font-size: $huge-font-size;
        font-weight: 500;
      }

      .Caption {
        margin-top: 10px;
        font-size: $bigger-font-size;
      }

      .ViewButton {
        margin-top: 40px;
        color: white;

        font-size: $header-font-size;
        border: 3px solid white;
        text-transform: capitalize;

        transition: 200ms;
      }
    }
  }
`

const Banner = props => {
  if (props.newProp) console.log(props.newProp)
  const contentPosition = props.contentPosition ? props.contentPosition : 'left'
  const totalItems = props.length ? props.length : 3
  const mediaLength = totalItems - 1

  let items = []
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>
      </CardContent>
    </Grid>
  )

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i]

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
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
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  )
}
