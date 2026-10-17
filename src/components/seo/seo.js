import React from 'react'
import PropTypes from 'prop-types'
import siteConfig from '../../../data/siteConfig'

const Seo = ({ title, description, pathname, children }) => {
  const {
    siteName,
    siteShortName,
    siteDescription,
    siteUrl,
    logo,
    keyWords,
    theme_color,
  } = siteConfig

  const fullTitle = title ? `${title} | ${siteShortName}` : siteName
  const metaDescription = description || siteDescription
  const url = `${siteUrl}${pathname || '/'}`
  const image = `${siteUrl}${logo}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keyWords && keyWords.length > 0 && (
        <meta name="keywords" content={keyWords.join(', ')} />
      )}
      <meta name="theme-color" content={theme_color} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteShortName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      {children}
    </>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  children: PropTypes.node,
}

export default Seo
