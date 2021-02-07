import React from 'react'
import styled from 'styled-components'

const IDIContainer = styled.div`
  margin-left: 60px;
`

const About = ({ className, title = 'about', text = '' }) => (
  <div className={className}>
    <h2>{title}</h2>
    <p dangerouslySetInnerHTML={{ __html: text }}></p>
    <div>
      <div>
        <img
          className="iconDetails"
          src={`/images/idi_logo.png`}
          alt="IDI's Logo"
        />
      </div>
      <IDIContainer>
        <div>
          I am a Qualified Administrator of the IDI (Intercultural Development
          Inventory) a premier tool that assesses intercultural competency.
        </div>
      </IDIContainer>
    </div>
  </div>
)

export default styled(About)`
  .iconDetails {
    margin-left: 2%;
    float: left;
  }

  .container2 {
    width: 100%;
    height: auto;
    padding: 1%;
  }

  h4 {
    margin: 0px;
  }
`
