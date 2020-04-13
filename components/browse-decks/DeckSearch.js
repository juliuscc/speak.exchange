import styled from 'styled-components'
import React from 'react'
import screenSizes from '../../utils/screen-sizes'

const DeckSearch = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  flex: 0 0 30%;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    justify-content: center;
    align-items: center;
  }
`
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  height: 50px;
  width: 280px;
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 90%;
  }
`
const SearchBox = styled.input`
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  flex: 1;
  font-size: 18px;
  :focus {
    outline: none;
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.border};
  }
`
const SortOption = styled.button`
  background-color: ${props =>
    props.active
      ? props.theme.colors.primaryMutedInactive
      : props.theme.colors.primaryMuted};
  color: ${({ theme }) => theme.colors.white};
  width: 280px;
  border-radius: 10px;
  padding: 5px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 15px;
  font-weight: 300;
  margin: 5px;

  :focus {
    outline: none;
  }

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 90%;
  }
`

export default ({ sortType, setSortType, searchWord, setSearchWord }) => {
  const sortTypeEqualsActive = local =>
    local.type === sortType.type && local.order === sortType.order

  return (
    <DeckSearch>
      <SearchBar>
        <SearchBox
          placeholder="Search by deck name"
          title="Search by deck name"
          value={searchWord}
          onChange={event => setSearchWord(event.target.value)}
        />
      </SearchBar>
      <SortOption
        onClick={() => {
          setSortType({ type: 'date', order: 1 })
        }}
        active={sortTypeEqualsActive({ type: 'date', order: 1 })}
      >
        Sort by creation date descending
      </SortOption>
      <SortOption
        onClick={() => {
          setSortType({ type: 'date', order: -1 })
        }}
        active={sortTypeEqualsActive({ type: 'date', order: -1 })}
      >
        Sort by creation date ascending
      </SortOption>
      <SortOption
        onClick={() => {
          setSortType({ type: 'alphabetical', order: 1 })
        }}
        active={sortTypeEqualsActive({ type: 'alphabetical', order: 1 })}
      >
        Sort by name A-Z
      </SortOption>
      <SortOption
        onClick={() => {
          setSortType({ type: 'alphabetical', order: -1 })
        }}
        active={sortTypeEqualsActive({ type: 'alphabetical', order: -1 })}
      >
        Sort by name Z-A
      </SortOption>
    </DeckSearch>
  )
}
