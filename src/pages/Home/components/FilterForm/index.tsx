import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { FilterFormContainer, FilterInput } from './styles'

export function FilterForm() {
  const { totalBlogPosts } = useContext(BlogContext)

  return (
    <FilterFormContainer>
      <div>
        <strong>Publicações</strong>
        <span>{totalBlogPosts} publicações</span>
      </div>

      <FilterInput type="text" placeholder="Buscar conteúdo" />
    </FilterFormContainer>
  )
}
