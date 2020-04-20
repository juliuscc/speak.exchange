import styled from 'styled-components'
import Link from 'next/link'
import { MessageSquareAdd } from 'styled-icons/boxicons-solid/MessageSquareAdd'
import screenSizes from '../../utils/screen-sizes'

const WelcomeHeader = styled.h1`
  color: ${({ theme }) => theme.colors.primaryHighlighted};
  text-align: center;
`

const OnlyDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${screenSizes.smallPhone.max}) {
    display: block;
  }
`

const WelcomeText = styled.p`
  font-size: 18px;
  display: inline-block;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.text};
  margin-bottom: 5px;
`

const ShortExplanation = styled.p`
  margin: 0;
  font-weight: 600;
`

const Icon = styled.svg`
  color: ${({ theme }) => theme.colors.primary};
  width: 20px;
  display: inline-block;
  position: relative;
  top: -3px;
`

export default () => (
  <>
    <WelcomeHeader>Welcome to speak.exchange!</WelcomeHeader>
    <WelcomeText>
      <strong>To get started,</strong> type in any French or English word in the
      search bar to search for translations and examples of that word.
    </WelcomeText>
    <WelcomeText>
      <strong>If a word exists in both languages,</strong> like{' '}
      <em>&quot;chaise&quot;</em>, then switch translation direction by clicking
      the switch button above the search box.
    </WelcomeText>
    <WelcomeText>
      <strong>To add a word and its translation to a flashcard deck, </strong>
      then click on the <Icon as={MessageSquareAdd} /> button in the
      bottom-right corner of a search result. To learn more about learning new
      words with flashcards, check out{' '}
      <Link href="/repeat">
        <a href="/repeat">speak.repeat</a>
      </Link>
      .
    </WelcomeText>
    <OnlyDesktop>
      <WelcomeText>
        <strong>If you need to type a special character,</strong> click the
        character you need and it will appear in the search box.
      </WelcomeText>
    </OnlyDesktop>
    <WelcomeHeader>How to read a search result</WelcomeHeader>
    <OnlyDesktop>
      <Title>Type:</Title>
      <ShortExplanation>
        This indicates what type of word it is. Hover over the word type to
        learn more.
      </ShortExplanation>
      <WelcomeText>
        Words have different types: some are nouns like &quot;chair&quot;,
        marked <em>n</em>, and some are interjections like &quot;ow!&quot;,
        marked <em>interj</em>. This is important to display as a word can be
        more than one type, like for example the word &quot;bail&quot;: it can
        be a noun and a verb.
      </WelcomeText>
    </OnlyDesktop>
    <Title>Original word:</Title>
    <ShortExplanation>
      This is the word that matches your search term.
    </ShortExplanation>
    <WelcomeText>
      Sometimes the word your looking for changes meaning when used in an
      expression, and sometimes the word changes meaning depending on the
      preposition that follows it. Our results display all the possible ways
      your search term can be used so you can be sure to find the translation
      for the specific context you&apos;re looking for.
    </WelcomeText>
    <Title>Translated word:</Title>
    <ShortExplanation>
      This is the translation of a given original word.
    </ShortExplanation>
    <WelcomeText>
      Sometimes a word can have several translations that apply for just one
      original word; if that&apos;s the case, we separate these by commas.
    </WelcomeText>
    <OnlyDesktop>
      <Title>Example:</Title>
      <ShortExplanation>
        This is an example of the word used in the real communication.
      </ShortExplanation>
      <WelcomeText>
        These help you understand how a word is used in context. Some
        translations will feature several, one or even no examples;
        unfortunately, speak.exchange has no control over these as we source our
        translations from an external provider, who comes up with these examples
        for us.
      </WelcomeText>
    </OnlyDesktop>
  </>
)
