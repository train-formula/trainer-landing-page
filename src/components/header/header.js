import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'
import { FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'
import Img from 'gatsby-image'

import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 7rem;
  ${MEDIA.DESKTOP`
    justify-content: center;
  `}
  .logo,
  .programs-link,
  .instagram-link {
    flex: 1 0 0;
  }
  .logo {
    text-align: center;
  }
  .programs-link {
    font-weight: 600;
    font-size: 1.35rem;
  }
  .instagram-link {
    display: flex;
    justify-content: flex-end;
  }
  .programs-link,
  .instagram-link {
    ${MEDIA.DESKTOP`
      display: none;
    `}
  }
  a {
    color: #9b9b9b;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: #ff3530;
    }
  }
`

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
})

const Header = ({ logo, instagramHREF }) => (
  <AnimatedContainer>
    <Container>
      <span className="programs-link">
        <Link to="/programs">programs</Link>
      </span>

      <span className="logo">
        <Link to="/">
          <Img
            fixed={logo ? logo.childImageSharp.fixed : {}}
            alt={logo.title}
          />
        </Link>
      </span>

      <span className="instagram-link">
        <a href={instagramHREF} target="__blank">
          <FaInstagram />
        </a>
      </span>
    </Container>
  </AnimatedContainer>
)

export default Header
