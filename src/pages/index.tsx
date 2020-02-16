import React from 'react'
import styled, { keyframes } from 'styled-components'
import Layout from 'components/layout'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { animatedBorderStyle } from '../components/Home/borderAnimation'
import Programs from 'components/Home/Programs'

const Container = styled.div`
  display: grid;
  grid-gap: 5rem;
`
const BrandingSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  height: 70rem;
  .copy {
    display: grid;
    justify-content: center;
    padding: 3rem;
    grid-gap: 3.5rem;
    text-align: center;
    ${animatedBorderStyle}

    &-title {
      align-self: end;
      font-size: 5rem;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: underline;
      letter-spacing: 0.25rem;
    }
    &-support {
      font-size: 3rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
    }
  }
`

function Index({ data }) {
  const { copy, mainImage } = data.homeJson.branding

  return (
    <Layout>
      <Container>
        <BrandingSection>
          <div className="copy">
            <div className="copy-title">{copy.title}</div>
            <div className="copy-support">{copy.message}</div>
          </div>
          <Img
            fluid={mainImage.image ? mainImage.image.childImageSharp.fluid : {}}
            alt={mainImage.title}
          />
        </BrandingSection>
        <Programs image={mainImage} />
      </Container>
    </Layout>
  )
}

const IndexWithQuery = props => (
  <StaticQuery
    query={graphql`
      query HomepageQuery {
        homeJson {
          branding {
            copy {
              title
              message
            }
            mainImage {
              title
              image {
                childImageSharp {
                  fluid(maxHeight: 500, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Index data={data} {...props} />}
  />
)

export default IndexWithQuery
