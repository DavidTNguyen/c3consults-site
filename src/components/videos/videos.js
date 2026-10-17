import React, { useState } from 'react'
import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'
import siteConfig from '../../../data/siteConfig'

const VideosSection = styled.section`
  .videos__grid {
    display: grid;
    gap: 1.5rem;
  }

  .video {
    margin: 0;
  }

  .video__frame {
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius);
    overflow: hidden;
    background: #000;
    box-shadow: var(--shadow);
  }

  .video__frame iframe,
  .video__poster,
  .video__poster img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .video__poster img {
    object-fit: cover;
    transition: transform 0.5s ease, opacity 0.3s ease;
    opacity: 0.88;
  }

  .video__poster:hover img {
    transform: scale(1.03);
    opacity: 1;
  }

  .video__play {
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    place-items: center;
    width: 72px;
    height: 72px;
    border-radius: 999px;
    background: var(--accent);
    color: var(--on-accent);
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    transition: transform 0.2s ease;
  }

  .video__play svg {
    margin-left: 4px;
  }

  .video__poster:hover .video__play {
    transform: translate(-50%, -50%) scale(1.08);
  }

  figcaption {
    margin-top: 0.85rem;
    font-weight: 600;
  }

  @media (min-width: 800px) {
    .videos__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

const getVideoId = url => url.split('/').pop().split('?')[0]

// Lightweight facade: shows a thumbnail and only loads the YouTube player on click.
const LiteYouTube = ({ id, title }) => {
  const [active, setActive] = useState(false)

  return (
    <div className="video__frame">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="video__poster"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            width="480"
            height="360"
            loading="lazy"
            decoding="async"
          />
          <span className="video__play" aria-hidden="true">
            <FaPlay size={22} />
          </span>
        </button>
      )}
    </div>
  )
}

const Videos = () => {
  if (!siteConfig.videos || !siteConfig.videos.length) return null

  return (
    <VideosSection
      id="videos"
      className="section section--alt"
      aria-labelledby="videos-title"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Watch</p>
          <h2 id="videos-title">See Khanh in action</h2>
        </div>
        <div className="videos__grid">
          {siteConfig.videos.map(video => (
            <figure className="video reveal" key={video.key}>
              <LiteYouTube id={getVideoId(video.url)} title={video.title} />
              <figcaption>{video.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </VideosSection>
  )
}

export default Videos
