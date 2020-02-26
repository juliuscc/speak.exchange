import styled from 'styled-components'
import { Search as SearchIcon } from 'styled-icons/zondicons/Search'
import Container from './fragments/Container'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.focusBackground};
  padding: 20px;
`

const LanguageSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`

const LanguageSelect = styled.select`
  background: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px 10px 10px 10px;
  font-size: 15px;
  position: relative;
  appearance: none;
  display: block;

  &:after {
    /* background-color: ${({ theme }) => theme.colors.primary}; */
    position: absolute;
    content: '';
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
`

const CharacterSelect = styled.div`
  padding: 5px;
`

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
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
`

const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
`

export default () => (
  <Wrapper>
    <Container narrow>
      <LanguageSelectWrapper>
        <LanguageSelect>
          <option>
            <span role="img" aria-label="US Flag">
              🇺🇸
            </span>
            Eng
            <span role="img" aria-label="Two-way arrow">
              ↔
            </span>
            <span role="img" aria-label="Swedish Flag">
              🇸🇪
            </span>
            Swe
          </option>
          <option>
            <span role="img" aria-label="US Flag">
              🇺🇸
            </span>
            Eng
            <span role="img" aria-label="Two-way arrow">
              ↔
            </span>
            <span role="img" aria-label="Swedish Flag">
              🇸🇪
            </span>
            Swe
          </option>
          <option>
            <span role="img" aria-label="US Flag">
              🇺🇸
            </span>
            Eng
            <span role="img" aria-label="Two-way arrow">
              ↔
            </span>
            <span role="img" aria-label="Swedish Flag">
              🇸🇪
            </span>
            Swe
          </option>
        </LanguageSelect>

        <CharacterSelect>å ä ö</CharacterSelect>
      </LanguageSelectWrapper>
      <SearchBar>
        <SearchBox placeholder="Start typing to search" />
        <SearchButton>
          <StyledSearchIcon />
        </SearchButton>
      </SearchBar>
    </Container>
  </Wrapper>
)
