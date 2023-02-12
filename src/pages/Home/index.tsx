import { FilterForm } from './components/FilterForm'
import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <FilterForm />
    </HomeContainer>
  )
}
