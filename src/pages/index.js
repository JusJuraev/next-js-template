import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import Trans from 'components/Trans'

const languages = [
  { id: 'ru', name: 'Русский' },
  { id: 'en', name: 'English' },
  { id: 'uz', name: 'O\'zbekcha' },
]

const Language = styled('div')`
  background-color: ${props => props.isActive ? '#00408c' : props.theme.colors.primary};
  color: white;
  cursor: pointer;
  padding: 5px;
`

const Home = props => {
  const router = useRouter()
  const { asPath, locale, pathname } = router

  const onChangeLocale = locale => {
    router.replace(pathname, asPath, { locale })
  }

  return (
    <Layout>
      <div>
        <Trans>test_locale</Trans>
      </div>
      {languages.map((item, index) => {
        return (
          <Language key={index} isActive={item.id === locale} onClick={() => onChangeLocale(item.id)}>
            {item.name}
          </Language>
        )
      })}
    </Layout>
  )
}

Home.getInitialProps = async () => ({

})

export default Home
