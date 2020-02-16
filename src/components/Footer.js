import React from 'react'
import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'

const Container = styled.div`
  display: grid;
  padding: 2rem 1rem;
  justify-content: space-around;
  grid-auto-flow: column;
  grid-gap: 3rem;
  border-top: 0.2rem solid rgba(19, 19, 19, 0.2);
  // align-self: end;
  ${MEDIA.TABLET`
    grid-auto-flow: row;
    text-align: center;
  `}
  & .section {
    display: grid;
    grid-gap: 1rem;
    &-title {
      text-transform: uppercase;
      font-weight: 600;
    }
    &-content {
      font-weight: 300;
      display: grid;
      grid-gap: 1rem;
    }
  }
  a {
    color: #131313;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: #ff3530;
    }
  }
`

export default function Footer() {
  return (
    <Container>
      <div className="section">
        <div className="section-title">location</div>
        <div className="section-content">
          2741 E 4th St. STE D
          <br />
          Long Beach, Ca 90814
        </div>
      </div>
      <div className="section">
        <div className="section-title">contact</div>
        <div className="section-content">
          562-719-5017
          <br />
          info@fourthstreetannex.com
        </div>
      </div>
      <div className="section">
        <div className="section-title">social</div>
        <div className="section-content">
          <div className="section-content">
            <a href="https://www.instagram.com/annextraining/">instagram</a>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">links</div>
        <div className="section-content">
          <a href="http://annextraining.com">annex training</a>
        </div>
      </div>
      {/* <div>fueled by <span className="logo">formula</span></div> */}
    </Container>
  )
}
