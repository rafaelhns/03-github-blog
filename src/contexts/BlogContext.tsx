import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/api'

interface Author {
  avatar: string
  name: string
  login: string
  bio: string
  company: string
  followers: number
  profileUrl: string
}

interface BlogPosts {
  number: number
  id: number
  title: string
  body: string
  created_at: string
}

interface BlogContextType {
  author: Author
  listedBlogPosts: BlogPosts[]
  totalBlogPosts: number
  filterPosts: (query: string) => void
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [author, setAuthor] = useState<Author>({
    avatar: '',
    name: '',
    login: '',
    bio: '',
    company: '',
    followers: 0,
    profileUrl: '',
  })

  const [postFilter, setPostFilter] = useState<string>('')
  const [blogPosts, setBlogPosts] = useState<BlogPosts[]>([])
  const totalBlogPosts = blogPosts.length
  const listedBlogPosts = blogPosts.filter(
    (post) => post.title.includes(postFilter) || post.body.includes(postFilter),
  )

  useEffect(() => {
    async function fetchAuthor() {
      const response = await api.get('/users/RafaelXau')
      const {
        avatar_url: avatar,
        name,
        login,
        bio,
        company,
        followers,
        html_url: profileUrl,
      } = response.data

      setAuthor({
        avatar,
        name,
        login,
        bio,
        company,
        followers,
        profileUrl,
      })
    }

    async function fetchPosts() {
      const response = await api.get(
        '/search/issues?q=repo:rafaelxau/03-github-blog/issues',
      )

      setBlogPosts(response.data.items)
    }

    fetchAuthor()
    fetchPosts()
  }, [])

  function filterPosts(query: string) {
    setPostFilter(query)
  }

  return (
    <BlogContext.Provider
      value={{ author, listedBlogPosts, filterPosts, totalBlogPosts }}
    >
      {children}
    </BlogContext.Provider>
  )
}
