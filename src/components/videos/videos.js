import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import siteConfig from '../../../data/siteConfig'

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" height="500px" url={url} playing={isSelected} />
)

const Videos = ({ className }) => {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  )

  const getVideoThumb = videoId =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`

  const getVideoId = url =>
    url.substr('https://www.youtube.com/embed/'.length, url.length)

  const customRenderThumb = (children) =>
    children.map(item => {
      const videoId = getVideoId(item.props.url)
      return <img src={getVideoThumb(videoId)} alt={"Video Thumb " + videoId}/>
    })

  return (
    <div className={className}>
      <div className="player-wrapper">
        <Carousel
          renderItem={customRenderItem}
          renderThumbs={customRenderThumb}
        >
          {siteConfig.videos &&
            siteConfig.videos.map(vid => (
              <YoutubeSlide key={vid.key} url={vid.url} />
            ))}
        </Carousel>
      </div>
    </div>
  )
}

export default styled(Videos)`
  position: relative;
  margin: auto;
  width: 100%;
  height:100%;
  background: ${({ theme }) => theme.colors.primary};

  .carousel-background {
    margin: auto;
  }

  .player-wrapper {
    position: relative;
    // padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`
