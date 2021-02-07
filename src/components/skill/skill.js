import React from 'react'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">
          <p dangerouslySetInnerHTML={{ __html: children }}></p>
        </div>
      </div>
    </div>
  )
}

const Skill = ({ className }) => {
  return(
  
    <div className={className}>
      <h2>Training Offer</h2>

      {siteConfig.skills &&
        siteConfig.skills.map(skill => (
        <Accordion key={skill.name} title={skill.name}>
          {skill.description}
        </Accordion>
      ))}
    </div>
  )

}

export default styled(Skill)`
  .wrapper {
    width: 600px;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.primary};
  }

  .accordion-wrapper {
    & + * {
      margin-top: 0.5em;
    }
  }

  .accordion-item {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;
  }

  .accordion-item.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }

  .accordion-title {
    font-weight: 600;
    cursor: pointer;
    padding: 0.5em 1.5em;
    border: solid 1px #ccc;
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid currentColor;
    }

    &:hover,
    &.open {
      color: #808e91;
    }

    &.open {
      &::after {
        content: '';
        border-top: 0;
        border-bottom: 5px solid;
      }
    }
  }

  .accordion-content {
    padding: 1em 1.5em;
  }
`
