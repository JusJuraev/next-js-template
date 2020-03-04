import React from 'react'
import { withTranslation } from 'hocs/withTranslation'
import Layout from 'components/Layout'

const About = props => {
  const { i18n } = props

  return (
    <Layout>
      About Page
    </Layout>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation()(About)
