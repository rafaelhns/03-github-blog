import { FilterForm } from './components/FilterForm'
import { PostList } from './components/PostList'
import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <FilterForm />
      <PostList />
    </HomeContainer>
  )
}
