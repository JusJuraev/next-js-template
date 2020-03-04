import React from 'react'
import styled from 'styled-components'
import { withTranslation } from 'hocs/withTranslation'
import Layout from 'components/Layout'
import { Trans } from 'components/I18N'

const languages = [
  { id: 'ru', name: 'Русский' },
  { id: 'en', name: 'English' },
  { id: 'uz', name: 'O\'zbekcha' },
]

const Language = styled('div')`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  cursor: pointer;
  padding: 5px;
`

const Home = props => {
  const { t, i18n } = props
  return (
    <Layout>
      <Trans>test</Trans>
      {languages.map((item, index) => {
        return (
          <Language key={index} onClick={() => i18n.changeLanguage(item.id)}>
            {item.name}
          </Language>
        )
      })}
    </Layout>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation()(Home)
