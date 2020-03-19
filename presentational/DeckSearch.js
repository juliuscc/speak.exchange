import styled from 'styled-components'
import { Search as SearchIcon } from 'styled-icons/zondicons/Search'
import React from 'react'

const DeckSearch = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
`
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  height: 50px;
  width: 100%;
`
const SearchBox = styled.input`
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px 0px 0px 10px;
  flex: 1;
  font-size: 18px;
`

const SearchButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border: 1px ${({ theme }) => theme.colors.border};
  border-style: solid solid solid none;
  border-radius: 0px 10px 10px 0px;
  width: 40px;
  cursor: pointer;
`

const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
`
const FilterOption = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 15px;
  font-weight: 300;
  margin-left: 20px;
`

export default () => (
  <DeckSearch>
    <SearchBar>
      <SearchBox placeholder="Start typing to search" />
      <SearchButton>
        <StyledSearchIcon />
      </SearchButton>
    </SearchBar>
    <FilterOption>Filter</FilterOption>
    <FilterOption>Sort</FilterOption>
    <FilterOption>Tag</FilterOption>
  </DeckSearch>
)
