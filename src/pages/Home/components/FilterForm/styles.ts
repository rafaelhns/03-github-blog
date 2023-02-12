import styled from 'styled-components'

export const FilterFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors['base-span']};
    }
  }
`

export const FilterInput = styled.input`
  background-color: ${(props) => props.theme.colors['base-input']};
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.colors['base-border']};
  border-radius: 6px;
  color: ${(props) => props.theme.colors['base-text']};

  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`
