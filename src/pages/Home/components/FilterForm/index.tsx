import { ChangeEvent, useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { FilterFormContainer, FilterInput } from './styles'

export function FilterForm() {
  const { totalBlogPosts, filterPosts } = useContext(BlogContext)

  const handleFilterPosts = (event: ChangeEvent<HTMLInputElement>) => {
    filterPosts(event.target.value)
  }

  return (
    <FilterFormContainer>
      <div>
        <strong>Publicações</strong>
        <span>{totalBlogPosts} publicações</span>
      </div>

      <FilterInput
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleFilterPosts}
      />
    </FilterFormContainer>
  )
}
