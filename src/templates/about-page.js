import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
            <iframe style={{width:'100%',height:'400px'}}  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQm90h1ER-aEqZbuYBt-xxr6wcsA6_KaMX2_3HaYhgeWagK_dTvBHoCuXAazlpampYckm-b6wPVO01Q/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            <br></br>
            <iframe style={{width:'100%',height:'650px'}} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQm90h1ER-aEqZbuYBt-xxr6wcsA6_KaMX2_3HaYhgeWagK_dTvBHoCuXAazlpampYckm-b6wPVO01Q/pubhtml?gid=1754433348&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            <br></br>
            <iframe style={{width:'100%',height:'400px'}} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQm90h1ER-aEqZbuYBt-xxr6wcsA6_KaMX2_3HaYhgeWagK_dTvBHoCuXAazlpampYckm-b6wPVO01Q/pubhtml?gid=1837742513&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
