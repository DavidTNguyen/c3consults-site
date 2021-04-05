import React from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import ReactPlayer from 'react-player/youtube'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { videos } from '../../../data/videos'

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" url={url} playing={isSelected} />
)

const Videos = ({ className }) => {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  )

  const getVideoThumb = videoId =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`

  const getVideoId = url =>
    url.substr('https://www.youtube.com/embed/'.length, url.length)

  const customRenderThumb = children =>
    children.map(item => {
      const videoId = getVideoId(item.props.url)
      return <img src={getVideoThumb(videoId)} />
    })

  return (
    <div className="player-wrapper">
      <ReactPlayer
        playing
        className="react-player"
        width="100%"
        url="https://www.youtube.com/watch?v=9LAVC2kUOzo"
      />
    </div>
  )
}

export default styled(Videos)`
  position: relative;
  margin: auto;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};

  .carousel-background {
    margin: auto;
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`
