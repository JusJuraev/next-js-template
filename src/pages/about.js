import React from 'react'
import request from 'utils/request'
import styled from 'styled-components'
import { POSTS_LIST } from 'constants/api'
import { useCreate } from 'hooks'
import Layout from 'components/Layout'

const Posts = styled.div`
  display: grid;
`

const Post = styled.div`
  border-bottom: 1px solid #d2d2d2;
  padding: 15px;
  & h2 {
    margin-top: unset;
  }
  & p {
    margin-bottom: unset;
  }
`

const About = props => {
  const { posts } = props

  const useCreatePost = () => {
    return useCreate(POSTS_LIST)
  }

  const createPost = useCreatePost()

  const onSubmitPost = () => {
    createPost.create({
      title: 'test title',
      body: 'test body',
      userId: 2
    })
  }

  return (
    <Layout>
      <button type={'button'} onClick={onSubmitPost} disabled={createPost.isLoading}>
        {createPost.isLoading ? 'Submitting post' : 'Submit post'}
      </button>
      <Posts>
        {posts.map(item => {
          return (
            <Post key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </Post>
          )
        })}
      </Posts>
    </Layout>
  )
}

export async function getStaticProps () {
  const posts = await request.get(POSTS_LIST)

  return {
    props: {
      posts: posts.data || []
    }
  }
}

export default About
