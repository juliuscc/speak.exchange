import styled from 'styled-components'
import React from 'react'
import { ArrowLeftRight } from 'styled-icons/remix-line/ArrowLeftRight'
import screenSizes from '../../utils/screen-sizes'
import Container from '../ui-fragments/Container'
import { SearchInput } from '../ui-fragments/Input'
import { IconButton } from '../ui-fragments/Button'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.focusBackground};
  padding: 20px 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: black 0px 0px 13px -10px;
`

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
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

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    justify-content: center;
  }
`

const SlimIconButton = styled(IconButton)`
  height: 30px;
  padding: 0;
  border-radius: 5px;
  margin: 0 10px;
`

const LanguageSelect = ({ language, onClick }) => {
  return (
    <>
      <Language>{language === 'en' ? 'English' : 'French'}</Language>
      <SlimIconButton
        onClick={onClick}
        icon={ArrowLeftRight}
        aria-label={`Switch language to translate to ${
          language === 'en' ? 'English' : 'French'
        }`}
      />
      <Language> {language === 'en' ? 'French' : 'English'}</Language>
    </>
  )
}

const Language = styled.div`
  width: 75px;
  text-align: center;
  font-weight: 600;
`

const CharacterSelect = styled.div`
  padding: 10px 0;
  padding-right: -6px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.black};
  opacity: 70%;
  font-size: 20px;
  height: 100%;
  align-items: center;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    display: none;
  }
`

const CharButton = styled.button`
  text-align: center;
  padding: 0 6px;
  background-color: ${({ theme }) => theme.colors.focusBackground};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    padding: 0 5px;
  }
  :focus {
    outline: none;
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.border};
  }
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
  addSpecialCharacter,
  inputRef
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
            <CharacterButton
              key={char}
              char={char}
              onClick={addSpecialCharacter(char)}
            />
          ))}
        </CharacterSelect>
      </LanguageWrapper>
      <SearchBar>
        <SearchInput
          placeholder="Start typing to search"
          onChange={onTranslationQueryChange}
          value={translationQuery}
          onClick={triggerSearch}
          inputRef={inputRef}
        />
      </SearchBar>
    </Container>
  </Wrapper>
)
