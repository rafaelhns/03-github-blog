import { FilterFormContainer, FilterInput } from './styles'

export function FilterForm() {
  return (
    <FilterFormContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>

      <FilterInput type="text" placeholder="Buscar conteúdo" />
    </FilterFormContainer>
  )
}
