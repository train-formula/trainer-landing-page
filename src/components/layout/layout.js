import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Head from 'components/head'
import Header from 'components/header'
import Footer from 'components/Footer'
import GlobalStyle from 'global.css.js'
import MEDIA from 'helpers/mediaTemplates'

const Container = styled.div`
  height: 100%;
  // padding: 3vw;
  // background: #f7f7f7;
  // border: 5px solid red;
  // min-height: 100vh;
  // ${MEDIA.TABLET`
    // padding: 6vw;
  // `}
`
const Content = styled.div`
  height: 100%;
  padding: 2rem 6rem 6rem;
`

const Layout = ({ data, children }) => (
  <Container>
    <GlobalStyle />
    <Head />
    <Header
      logo={data.homeJson.logo.image}
      instagramHREF={data.homeJson.instagramHREF}
    />
    <Content>{children}</Content>
    <Footer />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        homeJson {
          instagramHREF
          logo {
            title
            image {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWithQuery
