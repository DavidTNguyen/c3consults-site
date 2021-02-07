import React from 'react'
import styled from 'styled-components'

const About = ({ className, title = 'about', text = '' }) => (
  <div className={className}>
    <h2>{title}</h2>
    <p dangerouslySetInnerHTML={{ __html: text }}></p>
  </div>
)

export default styled(About)`
  
`
