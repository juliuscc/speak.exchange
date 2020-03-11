import styled from 'styled-components'
import { Search as SearchIcon } from 'styled-icons/zondicons/Search'
import { ArrowLeftRight } from 'styled-icons/remix-line/ArrowLeftRight'
import React from 'react'

import Container from './fragments/Container'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.focusBackground};
  padding: 20px 0;
`

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
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

const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  flex-direction: column;
  position: relative;
  justify-content: center;
`

const LanguageSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LanguageSelect = ({ language, onClick }) => {
  return (
    <>
      <Language>{language ? 'French' : 'English'}</Language>
      <SwitchButton onClick={onClick}>
        <StyledArrowLeftRight />
      </SwitchButton>
      <Language> {language ? 'English' : 'French'}</Language>
    </>
  )
}

const SwitchButton = styled.button`
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 30px;
  width: 40px;
  margin: 0 10px;
  cursor: pointer;
`

const StyledArrowLeftRight = styled(ArrowLeftRight)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`

const Language = styled.div`
  width: 75px;
  text-align: center;
  font-weight: 600;
`

const CharacterSelect = styled.div`
  padding: 10px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  font-family: ${({ theme }) => theme.fonts.text};
  font-color: ${({ theme }) => theme.colors.black};
  opacity: 70%;
  font-size: 20px;
  height: 100%;
  align-items: center;
`
const CharButton = styled.button`
  padding: 0 6px;
  background-color: ${({ theme }) => theme.colors.focusBackground};
  border: none;
  font-size: 16px;
  cursor: pointer;
`

const CharacterButton = ({ char, onClick }) => (
  <CharButton onClick={onClick}>{char}</CharButton>
)

export default ({
  language,
  onLanguageChange,
  translationQuery,
  onTranslationQueryChange,
  triggerSearch,
  addSpecialCharacter
}) => (
  <Wrapper>
    <Container>
      <LanguageWrapper>
        <LanguageSelectWrapper>
          <LanguageSelect language={language} onClick={onLanguageChange} />
        </LanguageSelectWrapper>
        <CharacterSelect>
          {[
            'à',
            'â',
            'é',
            'è',
            'ê',
            'ë',
            'ï',
            'î',
            'ô',
            'ù',
            'û',
            'ç',
            'œ',
            'æ'
          ].map(char => (
            <CharacterButton char={char} onClick={addSpecialCharacter(char)} />
          ))}
        </CharacterSelect>
      </LanguageWrapper>
      <SearchBar>
        <SearchBox
          placeholder="Start typing to search"
          onChange={onTranslationQueryChange}
          value={translationQuery}
        />
        <SearchButton onClick={triggerSearch}>
          <StyledSearchIcon />
        </SearchButton>
      </SearchBar>
    </Container>
  </Wrapper>
)
