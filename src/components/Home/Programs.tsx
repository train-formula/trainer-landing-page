import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import MEDIA from 'helpers/mediaTemplates'

const Container = styled.div`
  & .title {
    text-transform: uppercase;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
    ${MEDIA.TABLET`
      font-size: 2.35rem;
    `}
  }
  & .container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, 25%);
    grid-gap: 5rem;
    justify-content: space-around;
    height: 100%;
    ${MEDIA.TABLET`
      grid-template-columns: 1fr;
      text-align: center;
    `}
    & .program {
      background-color: #ffffff;
      display: grid;
      grid-gap: 1rem;
      align-items: center;
      text-align: center;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.2s ease;
      &:hover {
        border-bottom: 2px solid #ff3530;
      }
      &-title {
        margin-top: 1rem;
        font-size: 2.25rem;
        font-weight: 600;
      }
      &-description {
        width: 75%;
        justify-self: center;
        font-size: 1.8rem;
        font-weight: 300;
      }
    }
  }
  a {
    color: #131313;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`

export default function Programs({ image }) {
  return (
    <Container>
      <div className="title">programs</div>
      <div className="container">
        {Array.from({ length: 3 }, (_, i) => ({ id: `id-${i}` })).map(
          ({ id }) => (
            <Link to="/programs">
              <div className="program">
                <Img
                  className="image"
                  fluid={image.image ? image.image.childImageSharp.fluid : {}}
                  alt={image.image.title}
                />
                <div className="program-title">30 Day Booty Lift</div>
                <div className="program-description">
                  description description description description description
                  description{' '}
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </Container>
  )
}
