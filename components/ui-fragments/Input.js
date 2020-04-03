import styled from 'styled-components'
import { Search as SearchIcon } from 'styled-icons/zondicons/Search'
import { IconButton } from './Button'

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: 18px;
`

const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
`

const HalfInput = styled(Input)`
  border-radius: 10px 0 0 10px;
  flex: 1;
  :focus {
    outline: none;
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.border};
  }
`

const SearchButton = styled(IconButton)`
  border-style: solid solid solid none;
  border-radius: 0px 10px 10px 0px;
  width: 40px;
`

export const SearchInput = ({ onChange, value, placeholder, onClick }) => (
  <SearchInputWrapper>
    <HalfInput onChange={onChange} value={value} placeholder={placeholder} />
    <SearchButton onClick={onClick} icon={SearchIcon} />
  </SearchInputWrapper>
)
