import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { config } from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'

const Link = styled(({ className, icon: Icon, color, ...props }) => (
  <a className={className} target="_blank" rel="noopener noreferrer" {...props}>
    <Icon color={color} size={32} />
  </a>
)).attrs(props => ({ color: props.theme.colors.primary }))`
  & + & {
    margin-left: 24px;
  }
`

const Footer = ({ className }) => {
  const { email, linkedin, facebook } = siteConfig.social
  console.log(email)
  return (
    <footer className={className}>
      {`© ${new Date().getFullYear()} ${siteConfig.authorName}`}
      <div>
        {email && <Link href={'mailto:' + email} icon={FaEnvelope} />}
        {facebook && <Link href={facebook} icon={FaFacebook} />}
        {linkedin && <Link href={linkedin} icon={FaLinkedin} />}
      </div>
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`
